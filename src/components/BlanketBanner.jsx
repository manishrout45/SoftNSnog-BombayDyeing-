import React from "react";

const BlanketBanner = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full aspect-video overflow-hidden">
        <img
          src="/assets/images/BlanketBanner.png"
          alt="400 GSM Fleece Blanket - Comfort and Warmth"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default BlanketBanner;