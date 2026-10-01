
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Heart,
  ShieldCheck,
  Feather,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: Feather,
    number: "01",
    title: "Everyday Comfort",
    text: "Explore Bombay Dyeing bedding made with comfortable fabrics and thoughtful designs for a relaxing everyday sleep experience.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Elegant Designs",
    text: "Discover beautiful colours, refined patterns and versatile Bombay Dyeing designs that complement different bedroom styles.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Trusted Quality",
    text: "Choose from Bombay Dyeing products known for their attention to fabric quality, finishing and everyday usability.",
  },
];

const faqs = [
  {
    question: "What Bombay Dyeing products are available at Soft n Snog?",
    answer:
      "Soft n Snog offers a selection of Bombay Dyeing bedding products including bedsheets, comforters, duvet covers, pillow covers and other bedroom essentials, depending on current availability.",
  },
  {
    question: "Why choose Bombay Dyeing bedding?",
    answer:
      "Bombay Dyeing bedding combines comfortable fabrics, attractive patterns and practical finishes, making it suitable for refreshing your bedroom with both comfort and style.",
  },
  {
    question: "Is Bombay Dyeing bedding suitable for everyday use?",
    answer:
      "Yes. Many Bombay Dyeing bedding products are designed for everyday bedroom use. For the best results, follow the specific care instructions provided with each product.",
  },
  {
    question: "How can I choose the right bedding for my bedroom?",
    answer:
      "Consider the size of your bed, preferred fabric feel, colours and overall bedroom style. You can choose subtle patterns for a calm look or expressive prints to bring more character to the room.",
  },
  {
    question: "How should I care for Bombay Dyeing bedding?",
    answer:
      "Care instructions can vary between products. Always check the label or product instructions before washing, drying or storing your bedding to help maintain its colour, softness and finish.",
  },
];

const WhyChooseUs = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f6f1e9] text-[#321b1d]">

      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full border border-[#8b2631]/10" />

      <div className="absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full border border-[#c6a878]/20" />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4c2025]">
              Bombay Dyeing At Soft n Snog
            </p>

            <h2 className="max-w-4xl font-serif text-[42px] leading-[0.98] tracking-[-0.04em] sm:text-[56px] lg:text-[76px]">
              Comfort worth
              <span className="block italic text-[#4c2025]">
                bringing home.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] leading-7 text-[#6d5959] sm:text-[16px]">
              At Soft n Snog, discover a carefully selected range of Bombay
              Dyeing bedding products, bringing together comfortable fabrics,
              beautiful designs and trusted everyday quality for your home.
            </p>
          </div>
        </motion.div>

        {/* ================= BENEFIT CARDS ================= */}
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden border border-[#321b1d]/10 bg-[#fbf8f3] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#8b2631]/30 sm:p-9"
              >

                {/* Number */}
                <div className="absolute right-6 top-5 font-serif text-[46px] leading-none text-[#8b2631]/10">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b2631]/20 text-[#4c2025]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-[28px] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-[14px] leading-6 text-[#756262]">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-10 bg-[#c6a878] transition-all duration-500 group-hover:w-20" />

              </motion.div>
            );
          })}

        </div>

        {/* ================= LOWER SECTION ================= */}
        <div className="mt-16 grid gap-12 border-t border-[#321b1d]/10 pt-16 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4c2025]">
              Frequently Asked
            </p>

            <h3 className="mt-4 font-serif text-[38px] leading-[1.05] tracking-[-0.03em] sm:text-[48px]">
              Everything you need
              <span className="block italic text-[#4c2025]">
                to know.
              </span>
            </h3>

            <p className="mt-6 max-w-md text-[14px] leading-7 text-[#756262]">
              From choosing the right bedsheet to understanding fabric,
              comfort and care, find simple answers to common questions about
              the Bombay Dyeing bedding products available at Soft n Snog.
            </p>

            {/* Small visual block */}
            <div className="relative mt-10 hidden h-[180px] overflow-hidden bg-[#4c2025] lg:block">

              <img
                src="https://img.magnific.com/premium-photo/bed-with-floral-bedspread-flowered-comforter_1041545-12918.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Bombay Dyeing bedding"
                className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-[#4c2025]/55" />

              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    Bombay Dyeing Collection
                  </p>

                  <p className="mt-1 font-serif text-xl text-white">
                    Comfort for every bedroom.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
                  <ArrowUpRight size={16} />
                </div>

              </div>
            </div>

          </motion.div>

          {/* ================= FAQ ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="divide-y divide-[#321b1d]/10 border-y border-[#321b1d]/10">

              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div key={faq.question}>

                    <button
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    >

                      <div className="flex items-start gap-5">

                        <span className="pt-1 text-[11px] font-semibold tracking-[0.15em] text-[#4c2025]">
                          0{index + 1}
                        </span>

                        <span className="font-serif text-[20px] leading-tight sm:text-[23px]">
                          {faq.question}
                        </span>

                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#321b1d]/15 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#4c2025] text-white"
                            : "text-[#4c2025]"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>

                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >

                          <div className="pb-7 pl-10 pr-10 sm:pl-[52px] sm:pr-14">

                            <p className="max-w-2xl text-[14px] leading-7 text-[#756262]">
                              {faq.answer}
                            </p>

                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* ================= BOTTOM BRAND LINE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#321b1d]/10 pt-7"
        >

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b2631]">
            Comfort · Quality · Style
          </p>

          <div className="flex items-center gap-3 text-[#756262]">
            <Heart size={15} strokeWidth={1.5} />

            <span className="text-[12px]">
              Bombay Dyeing bedding, available at Soft n Snog
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;