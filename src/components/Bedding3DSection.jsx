import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";

/* =========================================================
   SLIDES
========================================================= */

const slides = [
  {
    title: "COMFORT",
    subtitle: "Sleep deeper. Wake better.",
    description:
      "Premium bedding designed to bring softness, comfort and a better night's sleep to every bedroom.",
    rotation: Math.PI * 0.08,
  },
  {
    title: "DESIGN",
    subtitle: "Made to transform your space.",
    description:
      "Beautiful textures, elegant patterns and refined details that make your bedroom feel effortlessly luxurious.",
    rotation: 0,
  },
  {
    title: "LUXURY",
    subtitle: "A better way to sleep.",
    description:
      "Thoughtfully crafted bedding that combines premium materials with timeless style and everyday comfort.",
    rotation: -Math.PI * 0.08,
  },
];

/* =========================================================
   BED MODEL
========================================================= */

function BedModel({ rotation, scale }) {
  const group = useRef(null);

  const { scene } = useGLTF("/models/bed.glb");

  /*
   ========================================================
   BED INITIAL / FRONT DIRECTION

   Change ONLY this value if the bed is facing the wrong
   direction.

   0               = original GLB direction
   Math.PI / 2     = rotate 90 degrees
   -Math.PI / 2    = rotate -90 degrees
   Math.PI         = rotate 180 degrees
   ========================================================
  */

  const baseRotation = Math.PI;

  /*
   IMPORTANT:
   Clone the model only when the GLB changes.

   Previously scene.clone() was executed directly inside
   render, which can create unnecessary objects during
   React re-renders.
  */

  const clonedScene = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  /*
   Set initial rotation only once.
  */

  useEffect(() => {
    if (!group.current) return;

    group.current.rotation.y =
      baseRotation + rotation;
  }, []);

  /*
   ========================================================
   LIGHTWEIGHT ROTATION

   We only keep rendering while the bed is actually
   moving toward its target rotation.

   This avoids unnecessary GPU work when the slide is idle.
   ========================================================
  */

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetRotation =
      baseRotation + rotation;

    const currentRotation =
      group.current.rotation.y;

    const difference =
      targetRotation - currentRotation;

    /*
     * Stop updating when rotation is close enough.
     */
    if (Math.abs(difference) < 0.001) {
      group.current.rotation.y =
        targetRotation;

      return;
    }

    group.current.rotation.y =
      THREE.MathUtils.damp(
        currentRotation,
        targetRotation,
        4,
        Math.min(delta, 0.05)
      );
  });

  return (
    <group
      ref={group}
      scale={scale}
      position={[0, -0.12, 0]}
    >
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/bed.glb");

/* =========================================================
   LOADING
========================================================= */

function LoadingBed() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1d4636] border-t-transparent" />

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#1d4636]/60">
          Loading
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   WEBGL MONITOR
========================================================= */

function WebGLMonitor() {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleContextLost = (event) => {
      /*
       * Prevent the browser from immediately discarding
       * the context while it attempts to restore it.
       */
      event.preventDefault();

      console.warn(
        "WebGL context lost. Waiting for browser recovery..."
      );
    };

    const handleContextRestored = () => {
      console.info(
        "WebGL context restored."
      );
    };

    canvas.addEventListener(
      "webglcontextlost",
      handleContextLost,
      false
    );

    canvas.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      canvas.removeEventListener(
        "webglcontextlost",
        handleContextLost
      );

      canvas.removeEventListener(
        "webglcontextrestored",
        handleContextRestored
      );
    };
  }, [gl]);

  return null;
}

/* =========================================================
   BED SCENE
========================================================= */

function BedScene({ rotation }) {
  const [scale, setScale] = useState(2.65);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      /*
       * Keep the bed large enough visually but avoid
       * unnecessarily huge model scaling.
       */

      if (width < 480) {
        setScale(3.70);
      } else if (width < 640) {
        setScale(3.70);
      } else if (width < 768) {
        setScale(3.65);
      } else if (width < 1024) {
        setScale(3.60);
      } else if (width < 1280) {
        setScale(3.60);
      } else {
        setScale(4.10);
      }
    };

    updateScale();

    window.addEventListener(
      "resize",
      updateScale,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateScale
      );
    };
  }, []);

  /*
   ========================================================
   WEBGL CANVAS
   ========================================================
  */

  return (
    <Canvas
      frameloop="always"
      camera={{
        position: [4.4, 2.6, 8.8],
        fov: 44,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
        stencil: false,
        depth: true,
      }}
      performance={{
        min: 0.5,
        max: 1,
        debounce: 200,
      }}
      onCreated={({ gl }) => {
        /*
         * Keep renderer pixel ratio under control.
         */
        gl.setPixelRatio(
          Math.min(
            window.devicePixelRatio || 1,
            1.5
          )
        );

        gl.outputColorSpace =
          THREE.SRGBColorSpace;

        gl.toneMapping =
          THREE.ACESFilmicToneMapping;

        gl.toneMappingExposure = 1;
      }}
    >
      {/* =================================================
          WEBGL MONITOR
      ================================================= */}

      <WebGLMonitor />

      {/* =================================================
          LIGHTING
          
          Using normal lights instead of an HDR Environment
          significantly reduces GPU load and makes the scene
          more reliable on lower-powered/mobile devices.
      ================================================= */}

      <ambientLight intensity={1.7} />

      <hemisphereLight
        skyColor="#ffffff"
        groundColor="#d8d0c3"
        intensity={1.2}
      />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
      />

      <directionalLight
        position={[-5, 4, -3]}
        intensity={1.2}
      />

      <directionalLight
        position={[2, 5, -6]}
        intensity={0.8}
      />

      {/* =================================================
          MODEL
      ================================================= */}

      <Suspense fallback={null}>
        <BedModel
          rotation={rotation}
          scale={scale}
        />
      </Suspense>
    </Canvas>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function Bedding3DSection() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeSlide =
    slides[activeIndex];

  const wheelLock = useRef(false);
  const wheelAccumulator = useRef(0);

  const touchStartY = useRef(null);
  const touchStartX = useRef(null);

  /* =======================================================
     CHANGE SLIDE
  ======================================================= */

  const changeSlide = (direction) => {
    setActiveIndex((current) => {
      const next =
        current + direction;

      if (next < 0) {
        return 0;
      }

      if (next >= slides.length) {
        return slides.length - 1;
      }

      return next;
    });
  };

  /* =======================================================
     SECTION VISIBILITY
  ======================================================= */

  const isSectionActive = () => {
    if (!sectionRef.current) {
      return false;
    }

    const rect =
      sectionRef.current.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;

    const sectionCenter =
      rect.top + rect.height / 2;

    const viewportCenter =
      viewportHeight / 2;

    return (
      Math.abs(
        sectionCenter -
          viewportCenter
      ) <
      viewportHeight * 0.45
    );
  };

  /* =======================================================
     WHEEL SCROLL
  ======================================================= */

  useEffect(() => {
    const handleWheel = (event) => {
      if (!isSectionActive()) {
        return;
      }

      if (Math.abs(event.deltaY) < 2) {
        return;
      }

      const direction =
        event.deltaY > 0
          ? 1
          : -1;

      /*
       * Allow normal page scrolling above
       * the first slide.
       */

      if (
        activeIndex === 0 &&
        direction < 0
      ) {
        return;
      }

      /*
       * Allow normal page scrolling below
       * the last slide.
       */

      if (
        activeIndex ===
          slides.length - 1 &&
        direction > 0
      ) {
        return;
      }

      event.preventDefault();

      wheelAccumulator.current +=
        event.deltaY;

      const threshold = 80;

      if (
        Math.abs(
          wheelAccumulator.current
        ) >= threshold
      ) {
        if (!wheelLock.current) {
          wheelLock.current = true;

          changeSlide(direction);

          wheelAccumulator.current = 0;

          setTimeout(() => {
            wheelLock.current = false;
          }, 500);
        }
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [activeIndex]);

  /* =======================================================
     TOUCH START
  ======================================================= */

  const handleTouchStart = (event) => {
    const touch =
      event.touches[0];

    touchStartY.current =
      touch.clientY;

    touchStartX.current =
      touch.clientX;
  };

  /* =======================================================
     TOUCH END
  ======================================================= */

  const handleTouchEnd = (event) => {
    if (
      touchStartY.current ===
        null ||
      touchStartX.current ===
        null
    ) {
      return;
    }

    const touch =
      event.changedTouches[0];

    const endY =
      touch.clientY;

    const endX =
      touch.clientX;

    const deltaY =
      touchStartY.current -
      endY;

    const deltaX =
      touchStartX.current -
      endX;

    touchStartY.current = null;
    touchStartX.current = null;

    /*
     * Ignore horizontal swipes.
     */

    if (
      Math.abs(deltaY) <
      Math.abs(deltaX)
    ) {
      return;
    }

    /*
     * Ignore very small swipes.
     */

    if (
      Math.abs(deltaY) < 50
    ) {
      return;
    }

    if (wheelLock.current) {
      return;
    }

    wheelLock.current = true;

    if (deltaY > 0) {
      if (
        activeIndex <
        slides.length - 1
      ) {
        changeSlide(1);
      }
    } else {
      if (activeIndex > 0) {
        changeSlide(-1);
      }
    }

    setTimeout(() => {
      wheelLock.current = false;
    }, 500);
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isSectionActive()) {
        return;
      }

      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowRight"
      ) {
        if (
          activeIndex <
          slides.length - 1
        ) {
          event.preventDefault();

          changeSlide(1);
        }
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        if (activeIndex > 0) {
          event.preventDefault();

          changeSlide(-1);
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f6f1e9] font-sans"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative flex min-h-[760px] items-center lg:min-h-[780px]">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-0">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="relative z-20 max-w-xl pt-14 lg:pt-0">

              {/* Label */}

              <div className="mb-6 flex items-center gap-3">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#1d4636]/70 sm:text-xs">
                  Bedding Collection
                </span>
              </div>

              {/* Main title */}

              <div className="overflow-hidden">
                <h2
                  key={`title-${activeIndex}`}
                  className="animate-[fadeUp_0.6s_ease-out] font-serif text-5xl font-normal leading-[0.9] tracking-tight text-[#1d4636] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
                >
                  {activeSlide.title}
                </h2>
              </div>

              {/* Subtitle */}

              <p
                key={`subtitle-${activeIndex}`}
                className="mt-7 max-w-md animate-[fadeUp_0.7s_ease-out] font-sans text-xl font-normal leading-tight text-[#1d4636]/80 sm:text-2xl lg:text-3xl"
              >
                {activeSlide.subtitle}
              </p>

              {/* Description */}

              <p
                key={`description-${activeIndex}`}
                className="mt-5 max-w-md animate-[fadeUp_0.8s_ease-out] font-sans text-sm font-normal leading-7 text-[#1d4636]/60 sm:text-base"
              >
                {activeSlide.description}
              </p>

              {/* Progress */}

              <div className="mt-10 flex items-center gap-4">
                {slides.map(
                  (slide, index) => (
                    <div
                      key={slide.title}
                      className="flex items-center gap-2"
                    >
                      <div
                        className={`h-[2px] transition-all duration-500 ${
                          index ===
                          activeIndex
                            ? "w-12 bg-[#1d4636]"
                            : "w-6 bg-[#1d4636]/20"
                        }`}
                      />

                      <span
                        className={`font-sans text-[10px] tracking-widest transition-opacity duration-300 ${
                          index ===
                          activeIndex
                            ? "text-[#1d4636] opacity-100"
                            : "text-[#1d4636] opacity-30"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Scroll instruction */}

              <div className="mt-12 hidden items-center gap-3 font-sans text-[#1d4636]/40 sm:flex">
                <div className="relative h-8 w-5 rounded-full border border-[#1d4636]/30">
                  <div className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 animate-bounce rounded-full bg-[#1d4636]/50" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em]">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT 3D BED
            ================================================= */}

            <div className="relative -mt-8 h-[420px] sm:h-[500px] md:h-[580px] lg:-mt-0 lg:h-[720px] lg:-translate-x-4 xl:h-[780px] xl:-translate-x-8">

              {/* Outer circle */}

              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1d4636]/10 sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px] lg:h-[560px] lg:w-[560px] xl:h-[620px] xl:w-[620px]" />

              {/* Inner circle */}

              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6dfd3]/50 sm:h-[320px] sm:w-[320px] md:h-[390px] md:w-[390px] lg:h-[460px] lg:w-[460px] xl:h-[510px] xl:w-[510px]" />

              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl sm:h-[250px] sm:w-[250px] md:h-[320px] md:w-[320px]" />

              {/* =================================================
                  3D CANVAS
              ================================================= */}

              <div className="absolute inset-0 z-10">
                <Suspense fallback={<LoadingBed />}>
                  <BedScene
                    rotation={
                      activeSlide.rotation
                    }
                  />
                </Suspense>
              </div>

              {/* Decorative dots */}

              <div className="absolute right-[10%] top-[20%] h-3 w-3 rounded-full bg-[#1d4636]/20" />

              <div className="absolute bottom-[22%] left-[12%] h-2 w-2 rounded-full bg-[#1d4636]/20" />
            </div>
          </div>
        </div>

        {/* =================================================
            SIDE SLIDE NUMBER
        ================================================= */}

        <div className="absolute bottom-8 right-5 hidden sm:block lg:bottom-12 lg:right-8">
          <div className="flex flex-col items-center gap-2">
            <span className="rotate-90 font-sans text-[10px] tracking-widest text-[#1d4636]/30">
              0{activeIndex + 1}
            </span>

            <div className="h-12 w-[1px] bg-[#1d4636]/10" />

            <span className="font-sans text-[10px] tracking-widest text-[#1d4636]/20">
              0{slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div className="relative z-30 flex justify-center gap-3 pb-8 lg:hidden">
        {slides.map(
          (slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() =>
                setActiveIndex(index)
              }
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-[#1d4636]"
                  : "w-2 bg-[#1d4636]/20"
              }`}
              aria-label={`Go to ${slide.title}`}
            />
          )
        )}
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}