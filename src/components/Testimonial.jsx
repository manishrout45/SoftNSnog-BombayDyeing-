
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Bhubaneswar",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
    text: "The bedsheet feels incredibly soft and premium. The print has completely changed the look of our bedroom, and even after several washes it still feels beautiful.",
    collection: "Premium Bedsheets",
  },
  {
    id: 2,
    name: "Anita Das",
    location: "Cuttack",
    role: "Home Decor Enthusiast",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90",
    text: "I wanted something elegant but comfortable for our bedroom. The quality, colours and finishing are exactly what I was looking for. It feels like a completely refreshed space.",
    collection: "Signature Collection",
  },
  {
    id: 3,
    name: "Sanjay Patra",
    location: "Khordha",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
    text: "The fabric feels great and the design looks even better in person. It has that comfortable, timeless feel that makes you want to stay in bed a little longer.",
    collection: "Everyday Comfort",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const item = testimonials[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#4A1F24] text-[#f5eee4]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#eadcc9 1px, transparent 1px),
            linear-gradient(90deg, #eadcc9 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-44 -top-44 h-[580px] w-[580px] rounded-full border border-[#d2b48c] opacity-20" />

      <div className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-[#d2b48c] opacity-15" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-14 xl:px-20">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-9">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 flex items-center gap-3"
            >
              

              <span className="text-[8px] uppercase tracking-[3px] text-[#d2bda0] sm:text-[9px] sm:tracking-[4px]">
                Customer Stories
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-serif text-[30px] font-light leading-[1.05] text-[#f8f1e8] sm:text-[38px] md:text-[44px] lg:text-[50px]"
            >
              Loved for the
              <br />
              <span className="italic text-[#ddc6a3]">
                way it feels.
              </span>
            </motion.h2>
          </div>

          {/* Counter */}
          <div className="hidden text-right sm:block">
            <p className="font-serif text-4xl text-[#c5a87c] md:text-5xl">
              0{current + 1}
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[3px] text-[#c5b5a0]">
              of 0{testimonials.length}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16 xl:gap-20">

          {/* LEFT IMAGE */}
          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">

            {/* Vertical Label */}
            <div className="absolute -left-7 top-1/2 hidden -translate-y-1/2 lg:block">
              <p className="[writing-mode:vertical-rl] rotate-180 text-[8px] uppercase tracking-[5px] text-[#cbb79b]">
                Stories from our homes
              </p>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[320px] overflow-hidden sm:h-[370px] md:h-[410px] lg:h-[440px]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241013]/90 via-transparent to-transparent" />

              {/* Image Information */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${item.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6"
                >
                  <p className="mb-2 text-[7px] uppercase tracking-[3px] text-[#e2cda9]">
                    {item.collection}
                  </p>

                  <h3 className="font-serif text-xl sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
                    {item.location} · {item.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Decorative Square */}
            <div className="pointer-events-none absolute -bottom-3 -left-3 h-16 w-16 border border-[#b99565] opacity-70 sm:-bottom-4 sm:-left-4 sm:h-20 sm:w-20" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <Quote
                size={40}
                strokeWidth={1}
                className="text-[#c09a67]"
              />
            </motion.div>

            {/* Testimonial Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <p className="max-w-2xl font-serif text-[19px] font-light leading-[1.4] text-[#f5eee5] sm:text-[22px] md:text-[26px] lg:text-[30px]">
                  “{item.text}”
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Divider */}
            <div className="my-5 h-px w-full max-w-xl bg-[#8d5c62] sm:my-7" />

            {/* Customer Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`customer-${item.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="mb-1 text-[7px] uppercase tracking-[3px] text-[#c4ae92]">
                    Customer
                  </p>

                  <h4 className="font-serif text-lg text-[#f5eee5] sm:text-xl">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-[10px] text-[#c6b6a4] sm:text-xs">
                    {item.location}
                  </p>
                </div>

                <button
                  type="button"
                  className="group flex w-fit items-center gap-2 border-b border-[#bd9665] pb-1.5 text-[8px] uppercase tracking-[2px] text-[#dcc5a2] transition-colors hover:text-white"
                >
                  Their experience

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between sm:mt-8">

              {/* Progress */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-[2px] transition-all duration-500 ${
                      current === index
                        ? "w-10 bg-[#c19a67]"
                        : "w-4 bg-[#8f6368] hover:bg-[#b28e78]"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center border border-[#91666b] text-[#e3d4c3] transition-all duration-300 hover:bg-[#f0e5d6] hover:text-[#4c2025] sm:h-10 sm:w-10"
                >
                  <ChevronLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center bg-[#c09a67] text-[#4c2025] transition-all duration-300 hover:bg-[#e0c49b] sm:h-10 sm:w-10"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-9 border-t border-[#80545a] pt-4 sm:mt-11 sm:pt-5"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[7px] uppercase tracking-[2px] text-[#bda895] sm:text-[8px] sm:tracking-[3px]">
              Made for slow mornings · restful nights · beautiful homes
            </p>

            <p className="font-serif text-xs italic text-[#d1b996] sm:text-sm">
              Comfort, beautifully lived.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;

