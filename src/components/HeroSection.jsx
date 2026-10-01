
import React from "react";
import heroImage from "../../public/assets/images/HeroImg.png";

/* =========================================================
   CUSTOM CATEGORY ICONS
========================================================= */

const BedSheetIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bed headboard */}
    <path
      d="M7 29V18C7 16.9 7.9 16 9 16H18C20.8 16 23 18.2 23 21V29"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Pillow */}
    <path
      d="M10 21.5C10 20.4 10.9 19.5 12 19.5H18C19.1 19.5 20 20.4 20 21.5V24H10V21.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Mattress */}
    <path
      d="M23 22H39C40.1 22 41 22.9 41 24V29H23V22Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Bedsheet */}
    <path
      d="M21 21.5C25 22.5 30 22.5 35 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M35 22C36 25 35 27.5 33.5 29"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Legs */}
    <path
      d="M10 29V34M38 29V34"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);


const ComforterIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Comforter */}
    <path
      d="M10 13C10 11.9 10.9 11 12 11H36C37.1 11 38 11.9 38 13V35C38 36.1 37.1 37 36 37H12C10.9 37 10 36.1 10 35V13Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Quilted pattern */}
    <path
      d="M10 20H38M10 28H38"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.8"
    />

    <path
      d="M18 11V37M30 11V37"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.8"
    />

    {/* Folded top */}
    <path
      d="M12 11H36C37.1 11 38 11.9 38 13V17H10V13C10 11.9 10.9 11 12 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);


const DoharIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Folded Dohar */}
    <path
      d="M12 12H36C37.1 12 38 12.9 38 14V34C38 35.1 37.1 36 36 36H12C10.9 36 10 35.1 10 34V14C10 12.9 10.9 12 12 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Fold lines */}
    <path
      d="M10 18H38M10 24H38M10 30H38"
      stroke="currentColor"
      strokeWidth="1.3"
      opacity="0.8"
    />

    {/* Decorative pattern */}
    <path
      d="M16 15L18 17L20 15L22 17L24 15L26 17L28 15L30 17L32 15"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const PillowIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pillow outer shape */}
    <path
      d="M12 15C15 12 20 11 24 11C28 11 33 12 36 15C39 18 40 22 40 24C40 26 39 30 36 33C33 36 28 37 24 37C20 37 15 36 12 33C9 30 8 26 8 24C8 22 9 18 12 15Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Inner seam */}
    <path
      d="M13 17C16 15 20 14 24 14C28 14 32 15 35 17C37 19 38 22 38 24C38 26 37 29 35 31C32 33 28 34 24 34C20 34 16 33 13 31C11 29 10 26 10 24C10 22 11 19 13 17Z"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.8"
    />

    {/* Pillow creases */}
    <path
      d="M18 20C20 22 20 26 18 28M30 20C28 22 28 26 30 28"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);


const BathLinenIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main towel */}
    <path
      d="M12 13H35C36.7 13 38 14.3 38 16V31C38 32.7 36.7 34 35 34H12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Rolled end */}
    <path
      d="M12 13C9.8 13 8 14.8 8 17V30C8 32.2 9.8 34 12 34C14.2 34 16 32.2 16 30V17C16 14.8 14.2 13 12 13Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    {/* Towel texture */}
    <path
      d="M19 18H34M19 22H34M19 26H34M19 30H34"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);


const CollectionIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bottom layer */}
    <path
      d="M11 29L24 35L37 29L24 23L11 29Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    {/* Middle layer */}
    <path
      d="M11 23L24 29L37 23L24 17L11 23Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    {/* Top layer */}
    <path
      d="M11 17L24 23L37 17L24 11L11 17Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    {/* Center detail */}
    <path
      d="M24 11V23M24 23V35"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.7"
    />
  </svg>
);


/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  const categories = [
    {
      name: "Bed Sheets",
      icon: BedSheetIcon,
    },
    {
      name: "Comforters",
      icon: ComforterIcon,
    },
    {
      name: "Dohars",
      icon: DoharIcon,
    },
    {
      name: "Pillows",
      icon: PillowIcon,
    },
    {
      name: "Bath Linen",
      icon: BathLinenIcon,
    },
    {
      name: "Collections",
      icon: CollectionIcon,
    },
  ];

  return (
    <section className="relative w-full h-[580px] md:h-[620px] overflow-hidden">

      {/* =====================================================
          HERO BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">

        <img
          src={heroImage}
          alt="Bombay Dyeing Premium Bedding"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Left-side gradient for text readability */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#faf5eb]
            via-[#faf5eb]/85
            via-35%
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          sm:left-10
          md:left-[8%]
          top-[44%]
          md:top-1/2
          z-20
          max-w-[520px]
          -translate-y-1/2
        "
      >

        {/* Top Badge */}

        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/90
            px-4
            py-2
            shadow-md
            backdrop-blur-sm
            text-[9px]
            sm:text-[10px]
            md:text-[11px]
            font-medium
            tracking-wide
            text-[#55483f]
          "
        >

          <span className="h-2 w-2 rounded-full bg-[#4c2025]/95" />

          <span>PREMIUM BED &amp; BATH LINEN</span>

          <span className="text-[#b3a89e]">
            •
          </span>

          <span>
            TIMELESS CRAFT
          </span>

        </div>


        {/* Heading */}

        <h1
          className="
            m-0
            font-serif
            text-[46px]
            sm:text-[54px]
            md:text-[66px]
            lg:text-[72px]
            font-semibold
            leading-[0.96]
            tracking-[-2px]
            text-[#241c19]
          "
        >
          Comfort
          <br />
          Meets Elegance
        </h1>


        {/* Description */}

        <p
          className="
            mt-5
            mb-6
            max-w-[400px]
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            leading-[1.55]
            text-[#554b45]
          "
        >
          Discover beautifully crafted bedding designed
          <br className="hidden sm:block" />
          for softer nights and stylish bedrooms.
        </p>


        {/* Buttons */}

        <div className="flex flex-wrap items-center gap-3">

          <button
            type="button"
            className="
              h-11
              rounded-md
              bg-[#4c2025]/95
              px-6
              text-[11px]
              sm:text-xs
              font-semibold
              tracking-wide
              text-white
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#741f2c]
              hover:shadow-lg
            "
          >
            Shop Bedding
          </button>


          <button
            type="button"
            className="
              h-11
              rounded-md
              border
              border-[#8b2635]/20
              bg-white/90
              px-6
              text-[11px]
              sm:text-xs
              font-semibold
              tracking-wide
              text-[#352824]
              shadow-md
              backdrop-blur-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-white
              hover:shadow-lg
            "
          >
            Explore Collection
          </button>

        </div>

      </div>


      {/* =====================================================
          PREMIUM BADGE
      ====================================================== */}

      <div
        className="
          absolute
          right-5
          top-5
          z-30
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-dotted
          border-[#d1a95a]
          bg-[#4c2025]/95
          shadow-lg
          sm:right-8
          sm:top-8
          md:right-[8%]
          md:top-10
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            flex-col
            items-center
            justify-center
            rounded-full
            border
            border-[#e4c97d]/70
            text-center
            text-[#f0d991]
          "
        >

          <span className="text-[7px] leading-none">
            ✦
          </span>

          <span className="mt-1 text-[5px] font-bold tracking-[1px]">
            PREMIUM
          </span>

          <span className="text-[5px] tracking-[1px]">
            LINEN
          </span>

          <span className="mt-0.5 text-[7px] leading-none">
            ✦
          </span>

        </div>

      </div>


      {/* =====================================================
          BOTTOM CATEGORY BAR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-40
          flex
          h-[70px]
          w-full
          overflow-x-auto
          bg-[#4c2025]/95
          px-0
          backdrop-blur-sm
          md:px-[4%]
        "
      >

        {categories.map((category) => {

          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="
                group
                flex
                h-full
                min-w-[150px]
                flex-1
                cursor-pointer
                items-center
                justify-center
                gap-3
                border-r
                border-white/10
                px-4
                text-[12px]
                font-medium
                tracking-wide
                text-[#f8eee5]
                transition-all
                duration-200
                hover:bg-white/10
                sm:text-[13px]
                md:text-[14px]
              "
            >

              {/* Product Icon */}

              <Icon
                className="
                  h-[30px]
                  w-[30px]
                  shrink-0
                  text-[#d8b763]
                  transition-all
                  duration-200
                  group-hover:-translate-y-1
                  group-hover:scale-110
                "
              />

              {/* Category Name */}

              <span
                className="
                  whitespace-nowrap
                  leading-none
                "
              >
                {category.name}
              </span>

            </div>
          );

        })}

      </div>

    </section>
  );
};

export default HeroSection;
