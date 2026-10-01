import React from "react";
import {
  BedDouble,
  Feather,
  Layers3,
  Sparkles,
} from "lucide-react";

const items = [
  {
    text: "Premium Fabrics & Finishes",
    icon: Feather,
  },
  {
    text: "Comfort Designed for Everyday Living",
    icon: BedDouble,
  },
  {
    text: "Timeless Patterns & Modern Designs",
    icon: Sparkles,
  },
  {
    text: "Made for Beautiful Bedrooms",
    icon: Layers3,
  },
];

const MarqueeBar = () => {
  return (
    <div className="w-full overflow-hidden bg-[#4c2025] py-5 sm:py-6">
      <div className="flex w-max whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="mx-6 flex items-center gap-5 sm:mx-8 sm:gap-6"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c6a878]/60 text-[#c6a878] sm:h-10 sm:w-10">
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="sm:h-5 sm:w-5"
                />
              </div>

              {/* Text */}
              <p className="font-serif text-lg text-[#f8efe3] sm:text-xl md:text-2xl">
                {item.text}
              </p>

              {/* Gold separator */}
              <div className="ml-2 h-px w-8 bg-[#c6a878]/60 sm:w-12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeBar;