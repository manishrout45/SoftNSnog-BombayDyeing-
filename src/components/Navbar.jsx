import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bedsheets", href: "/bedsheets" },
    { name: "Bed Linen", href: "/bed-linen" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================================================== */}
      {/* FIXED NAVBAR */}
      {/* ================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[9999] w-full bg-[#4c2025]/95 text-[#f8f5ef] shadow-lg">

        {/* ================================================== */}
        {/* DESKTOP NAVBAR */}
        {/* ================================================== */}

        <div className="hidden lg:block">

          {/* Logo Row */}
          <div className="flex h-[78px] items-center justify-center">
            <a href="/" aria-label="Bedding Store">
              <img
                src="public/assets/images/SoftnSnogLogo.png"
                alt="Bedding Store"
                className="h-14 w-auto object-contain xl:h-14"
              />
            </a>
          </div>

          {/* Navigation Row */}
          <div className="border-t border-b border-white/10">
            <nav className="mx-auto flex h-[54px] max-w-[1400px] items-center justify-center px-8">
              <ul className="flex items-center gap-10 xl:gap-14">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group relative flex h-[54px] items-center text-[11px] font-medium uppercase tracking-[0.16em] text-[#f8f5ef]/90 transition-colors duration-300 hover:text-[#d89b22]"
                    >
                      {item.name}

                      {/* Hover Underline */}
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#d89b22] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* ================================================== */}
        {/* MOBILE NAVBAR */}
        {/* ================================================== */}

        <div className="lg:hidden">

          {/* Mobile Header */}
          <div className="flex h-[70px] items-center justify-between px-5 sm:px-7">

            {/* Logo Left */}
            <a
              href="/"
              aria-label="Bedding Store"
              className="flex items-center"
            >
              <img
                src="public/assets/images/SoftnSnogLogo.png"
                alt="Bedding Store"
                className="h-10 w-auto object-contain sm:h-10"
              />
            </a>

            {/* Hamburger Right */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenu}
              className="flex h-10 w-10 items-center justify-center text-[#f8f5ef] transition-colors duration-200 hover:text-[#d89b22]"
            >
              {mobileMenu ? (
                <X size={25} strokeWidth={1.5} />
              ) : (
                <Menu size={25} strokeWidth={1.5} />
              )}
            </button>

          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden border-t border-white/10 bg-[#111111] transition-all duration-300 ${
              mobileMenu
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="px-5 pb-5 pt-2 sm:px-7">
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className={`flex items-center py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f8f5ef] transition-colors duration-200 hover:text-[#d89b22] ${
                        index !== navItems.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

      </header>

      {/* ================================================== */}
      {/* NAVBAR SPACER */}
      {/* ================================================== */}

      <div
        className="h-[70px] lg:h-[136px]"
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;