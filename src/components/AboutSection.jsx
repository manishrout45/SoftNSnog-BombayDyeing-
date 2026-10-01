
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f7f2] py-16 md:py-24 px-5 md:px-12 overflow-hidden">
      <div className="max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Heading */}
            <div className="mb-8">
              <p className="text-[#6d8b5b] uppercase tracking-[2px] text-xs font-semibold mb-4">
                Premium Bedding Collection
              </p>

              <h2 className="text-[#263326] font-serif text-3xl md:text-5xl leading-tight mb-5">
                Discover Bombay Dyeing
                <br />
                Bedding For Your Home
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-7 max-w-2xl">
                At Soft n Snog, we bring you a carefully selected range of
                Bombay Dyeing bedding products, combining trusted quality,
                beautiful designs, and everyday comfort. From elegant
                bedsheets to soft pillow covers and more, discover bedding
                made to add comfort and style to your bedroom.
              </p>
            </div>

            {/* Bedsheet Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="https://i.pinimg.com/736x/b7/7e/16/b77e161b0a6ff52d3f57e3638ad7636e.jpg"
                alt="Bombay Dyeing bedsheet collection"
                className="w-full h-[320px] sm:h-[450px] md:h-[580px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Pillow Cover Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="https://i.pinimg.com/736x/3a/ee/58/3aee58ca4c80209cc592ef06823acf3c.jpg"
                alt="Bombay Dyeing pillow cover collection"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* Bottom Right Content */}
            <motion.div
              className="pt-1"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-[#263326] font-serif text-2xl md:text-4xl mb-5 leading-tight">
                Quality Bombay Dyeing
                <br />
                Bedding, Chosen For You
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-7 mb-7">
                Explore a range of Bombay Dyeing products selected for their
                comfort, design, and quality. Whether you're refreshing your
                bedroom with a new bedsheet or adding a finishing touch with
                coordinating pillow covers, our collection makes everyday
                bedding feel more comfortable and beautiful.
              </p>

              <div className="space-y-4">
                {[
                  "Genuine Bombay Dyeing bedding products.",
                  "Beautiful designs for modern and classic bedrooms.",
                  "Comfort-focused fabrics with quality finishes.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <Check
                      className="text-[#6d8b5b] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

