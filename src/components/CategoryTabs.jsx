import React from "react";

const categories = [
  {
    name: "Sheet Sets",
    image:
      "https://img.magnific.com/premium-photo/refreshing-bedroom-with-springthemed-bedding_1314467-127013.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Duvet Covers",
    image:
      "https://img.magnific.com/premium-photo/lily-rose-pink-floral-queen-duvet-cover-vray-tracing-style_899449-83124.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Pillowcases",
    image:
      "https://img.magnific.com/premium-photo/cozy-autumn-retreat-with-plush-cushions-pillows-rustic-living-room-setting_980820-4141.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Linen Bedding",
    image:
      "https://img.magnific.com/premium-photo/organic-linen-bedding-sets-neutral-tones_1327465-44181.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Kids Bedding",
    image:
      "https://img.magnific.com/premium-photo/colorful-kids-bedding-set-featuring-fun-characters_984027-300707.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
];

const offers = [
  {
    discount: "Flat 30% Discount",
    title: "Luxury Sheet\nSets Deals",
    description:
      "Luxury sheets crafted for comfort, softness and a premium sleep experience.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85",
  },
  {
    discount: "Flat 25% Discount",
    title: "Save Big on\nLinen Sheets",
    description:
      "Experience premium comfort with our beautiful linen bedding collection.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85",
  },
];

const CategoryTabs = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      {/* ==================== */}
      {/* CATEGORY HEADING */}
      {/* ==================== */}

      <div className="mb-8 text-center sm:mb-11 lg:mb-14">
        <p className="mb-2 text-[9px] font-medium uppercase leading-none tracking-[0.18em] text-gray-500 sm:text-[11px]">
          Our Categories
        </p>

        <h2 className="font-serif text-[24px] font-bold leading-tight text-gray-900 sm:text-[28px] lg:text-[42px]">
          Shop By Category
        </h2>
      </div>

      {/* ==================== */}
      {/* CATEGORY TABS */}
      {/* ==================== */}

      <div className="mx-auto flex w-full max-w-[900px] flex-wrap items-start justify-center gap-x-5 gap-y-7 sm:flex-nowrap sm:justify-between sm:gap-5 md:gap-8">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className="group flex w-[76px] min-w-0 flex-col items-center border-0 bg-transparent p-0 sm:w-auto sm:flex-1"
          >
            {/* Category Image */}
            <div className="mb-2.5 h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-gray-100 sm:mb-3 sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px]">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Category Name */}
            <span className="max-w-[90px] text-center text-[9px] font-semibold leading-tight text-gray-800 sm:max-w-none sm:text-[11px] md:text-[12px]">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* ==================== */}
      {/* EXTRA SPACE */}
      {/* ==================== */}

      <div className="h-8 sm:h-11 lg:h-14" />

      {/* ==================== */}
      {/* PROMOTIONAL BANNERS */}
      {/* ==================== */}

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="group relative min-h-[175px] overflow-hidden rounded-xl bg-[#eee9e1] sm:min-h-[205px] lg:min-h-[225px]"
          >
            {/* Background Image */}
            <img
              src={offer.image}
              alt={offer.title.replace("\n", " ")}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full w-[68%] flex-col justify-center px-4 py-5 sm:w-[58%] sm:px-6 sm:py-7 lg:w-[55%] lg:px-7">
              {/* Discount Badge */}
              <span className="mb-2 w-fit rounded-full bg-[#B4863C] px-2.5 py-1 text-[7px] font-semibold leading-tight text-white sm:text-[8px]">
                {offer.discount}
              </span>

              {/* Title */}
              <h3 className="whitespace-pre-line text-[18px] font-bold leading-[1.08] text-gray-900 sm:text-[22px] lg:text-[24px]">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="mt-2 line-clamp-2 text-[8px] leading-[1.4] text-gray-600 sm:mt-2.5 sm:text-[8px] lg:text-[9px]">
                {offer.description}
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-3 w-fit rounded-full bg-gray-900 px-3.5 py-1.5 text-[7px] font-semibold text-white transition-colors duration-200 hover:bg-[#B4863C] sm:mt-4 sm:px-4 sm:py-2 sm:text-[8px]"
              >
                {offer.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;