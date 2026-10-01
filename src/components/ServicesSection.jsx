import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  BedDouble,
  Layers3,
  Feather,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Bedsheets");
  const [startIndex, setStartIndex] = useState(0);

  const tabs = [
    { name: "Bedsheet", key: "Bedsheets", count: 4 },
    { name: "Comforter", key: "Comforters", count: 4 },
    { name: "Duvet Cover", key: "Duvet Covers", count: 4 },
    { name: "Pillow Cover", key: "Pillows", count: 4 },
  ];

  const allProducts = {
    Bedsheets: [
      {
        img: "https://m.media-amazon.com/images/I/618es3t1wvL.jpg",
        title: "Premium Cotton Bedsheet",
      },
      {
        img: "https://retail.bombaydyeing.com/admin/storage/home/items/picture/ZSsQ8Z0kBkWG02zA7K9i1UKSUrtR5jp5qPeEn985.png",
        title: "Floral Comfort Collection",
      },
      {
        img: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/FEBRUARY/11/iA0L2JTj_5e3367f4096d4ab28063ec11940bf2b1.jpg",
        title: "Elegant Printed Bedsheet",
      },
      {
        img: "https://m.media-amazon.com/images/I/716yrxd8d9L._AC_UF894,1000_QL80_.jpg",
        title: "Luxury Bedroom Collection",
      },
    ],

    Comforters: [
      {
        img: "https://retail.bombaydyeing.com/admin/storage/home/items/picture/y4MZZa6vdlE4zXwVzVlI0dFBDf4cIAcXnwYrhZSw.png",
        title: "Classic Comforter",
      },
      {
        img: "https://img.tatacliq.com/images/i28//437Wx649H/MP000000028827871_437Wx649H_202510180038381.jpeg",
        title: "Soft Quilted Comforter",
      },
      {
        img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/productimage/2019/12/13/b643adb5-dd4d-4175-bbb3-93791264a76f1576205139024-1.jpg",
        title: "Premium Winter Comfort",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3lqNJXCfiIq8vFa1ck7ZmA3YVgcyfHrbMP9JJ-Al5Q&s",
        title: "Modern Comfort Collection",
      },
    ],

    "Duvet Covers": [
      {
        img: "https://retail.bombaydyeing.com/admin/storage/products/items/picture/J9dVyBukDZUKuSttdt4KmbvuneMYEtRmaGR7btlg.png",
        title: "Premium Duvet Cover",
      },
      {
        img: "https://m.media-amazon.com/images/I/81AwrkIrpWL.jpg",
        title: "Minimal Linen Collection",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9e-jQLsavs1KE_qVsAsOztR9ilcPTFJc0bQRtYB_bQ27NTsHqxzqw98&s=10",
        title: "Modern Printed Duvet",
      },
      {
        img: "https://retail.bombaydyeing.com/admin/storage/home/items/picture/YYDVKsStRKLNlK1FOTkJxn5JjuZBh5Ryw6vEpd26.png",
        title: "Classic Bedroom Edit",
      },
    ],

    Pillows: [
      {
        img: "https://images-static.nykaa.com/media/catalog/product/2/4/249dfbc8901633772192_2.jpg?tr=w-500",
        title: "Premium Sleeping Pillow",
      },
      {
        img: "https://images-static.nykaa.com/media/catalog/product/2/2/22c94b08901633772741_2.jpg?tr=w-500",
        title: "Soft Comfort Pillow",
      },
      {
        img: "https://assets.myntassets.com/assets/images/29933891/2024/7/4/e4fa224c-ae1c-4a81-a02d-3fb0b2d842ec1720073081576-BOMBAY-DYEING-Mimosa-Rose--White-Floral-Microfiber-160-TC-Qu-1.jpg",
        title: "Decorative Cushion",
      },
      {
        img: "https://m.media-amazon.com/images/I/713Y+k4nPXL.jpg",
        title: "Luxury Pillow Collection",
      },
    ],
  };

  const getItemsPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setStartIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [activeTab]);

  const products = allProducts[activeTab];

  const visibleProducts = products.slice(
    startIndex,
    startIndex + itemsPerView
  );

  const nextSlide = () => {
    if (startIndex + itemsPerView >= products.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(Math.max(products.length - itemsPerView, 0));
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(auto);
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#4c2025] px-4 py-9 sm:px-6 md:px-10 md:py-14 lg:py-16">

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#c6a878]/10" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-[240px] w-[240px] rounded-full border border-[#c6a878]/10" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[-120px] h-[320px] w-[320px] rounded-full border border-[#c6a878]/10" />

      <div className="relative mx-auto max-w-[1450px]">

        {/* ================= HEADER ================= */}
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c6a878] sm:text-[10px]">
                Explore The Collection
              </p>
            </div>

            <h2 className="max-w-4xl font-serif text-[30px] leading-[1] tracking-[-0.035em] text-[#f8efe3] sm:text-[38px] md:text-[46px]">
              Beautiful bedding,
              <span className="block italic text-[#c6a878]">
                made for living.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xs lg:pb-1"
          >
            <p className="text-[11px] leading-5 text-[#eadbd0]/70 sm:text-xs">
              Discover thoughtfully designed bedding collections that bring
              comfort, character and timeless elegance to every bedroom.
            </p>
          </motion.div>

        </div>

        {/* ================= CATEGORY TABS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 border-y border-[#f8efe3]/15 py-4 md:mt-10"
        >
          <div className="flex w-full items-center justify-center gap-4 sm:gap-7 md:gap-10">

            {tabs.map((tab) => {
              const active = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`group relative shrink-0 whitespace-nowrap font-serif text-[12px] transition-colors duration-300 sm:text-sm ${
                    active
                      ? "text-[#f8efe3]"
                      : "text-[#eadbd0]/45 hover:text-[#eadbd0]"
                  }`}
                >
                  <span>{tab.name}</span>

                  <sup
                    className={`ml-1 text-[7px] transition ${
                      active
                        ? "text-[#c6a878]"
                        : "text-[#eadbd0]/30"
                    }`}
                  >
                    {tab.count}
                  </sup>

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 right-0 -bottom-2 mx-auto h-[1px] bg-[#c6a878] transition-all duration-300 ${
                      active
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}

          </div>
        </motion.div>

        {/* ================= COLLECTION LABEL ================= */}
        <div className="mt-7 flex items-center justify-between">

          <div className="flex items-center gap-2.5">

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c6a878]/40 text-[#c6a878]">
              {activeTab === "Bedsheets" && <BedDouble size={13} />}
              {activeTab === "Comforters" && <Feather size={13} />}
              {activeTab === "Duvet Covers" && <Layers3 size={13} />}
              {activeTab === "Pillows" && <Sparkles size={13} />}
            </div>

            <div>
              <p className="text-[7px] uppercase tracking-[0.22em] text-[#c6a878]">
                Bombay Dyeing
              </p>

              <p className="mt-0.5 font-serif text-sm text-[#f8efe3]">
                {activeTab} Collection
              </p>
            </div>

          </div>

          {/* Arrows */}
          <div className="flex gap-1.5">

            <button
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f8efe3]/20 text-[#f8efe3] transition-all duration-300 hover:border-[#c6a878] hover:bg-[#c6a878] hover:text-[#4c2025]"
              aria-label="Previous"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f8efe3]/20 text-[#f8efe3] transition-all duration-300 hover:border-[#c6a878] hover:bg-[#c6a878] hover:text-[#4c2025]"
              aria-label="Next"
            >
              <ChevronRight size={15} />
            </button>

          </div>
        </div>

        {/* ================= PRODUCT SLIDER ================= */}
        <div className="relative mt-5">

          <AnimatePresence mode="wait">

            <motion.div
              key={`${activeTab}-${startIndex}-${itemsPerView}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-4 md:gap-5 ${
                itemsPerView === 1
                  ? "grid-cols-1"
                  : itemsPerView === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >

              {visibleProducts.map((item, index) => (

                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="group"
                >

                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#38171c]">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-[250px] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] sm:h-[300px] md:h-[350px]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241014]/55 via-transparent to-transparent opacity-70" />

                    {/* Number */}
                    <span className="absolute left-3 top-3 font-serif text-xs text-[#f8efe3]/80">
                      0{startIndex + index + 1}
                    </span>

                    {/* View button */}
                    <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#f8efe3] text-[#4c2025] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                  {/* Product Info */}
                  <div className="border-b border-[#f8efe3]/15 pb-4 pt-3">

                    <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#c6a878]">
                      {activeTab}
                    </p>

                    <h3 className="font-serif text-[17px] leading-tight text-[#f8efe3] sm:text-[19px]">
                      {item.title}
                    </h3>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </AnimatePresence>

        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="max-w-md text-[10px] leading-5 text-[#eadbd0]/50 sm:text-[11px]">
            From everyday essentials to statement pieces, bring a softer,
            more beautiful feeling into your bedroom.
          </p>

          <button className="group flex w-fit items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f8efe3]">

            Discover Collection

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c6a878]/50 transition-all duration-300 group-hover:bg-[#c6a878] group-hover:text-[#4c2025]">
              <ArrowUpRight size={13} />
            </span>

          </button>

        </motion.div>

      </div>
    </section>
  );
}