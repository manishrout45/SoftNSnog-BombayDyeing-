
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#17251f] text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <img
              src="/assets/images/SoftnSnogLogo.png"
              alt="Soft n Snog"
              className="w-36 mb-6 cursor-pointer object-contain"
              onClick={() => scrollToSection("home")}
            />

            <p className="text-[#c8d0ca] text-sm leading-7 max-w-sm mb-7">
              Welcome to Soft n Snog, your destination for quality bedding
              and beautiful Bombay Dyeing products designed to bring comfort,
              style, and elegance to your bedroom.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#66756d] flex items-center justify-center hover:bg-[#d8a95b] hover:border-[#d8a95b] hover:text-[#17251f] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#66756d] flex items-center justify-center hover:bg-[#d8a95b] hover:border-[#d8a95b] hover:text-[#17251f] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>


            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#f4eee4] text-lg font-medium mb-6">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-[#c8d0ca]">

              <li
                onClick={() => scrollToSection("home")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                Home
              </li>

              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                About Us
              </li>

              <li
                onClick={() => scrollToSection("bedsheets")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                Bedsheets
              </li>

              <li
                onClick={() => scrollToSection("comforters")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                Comforters
              </li>

              <li
                onClick={() => scrollToSection("pillowcovers")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                Pillow Covers
              </li>

              <li
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#d8a95b] cursor-pointer transition duration-300"
              >
                Contact
              </li>

            </ul>
          </div>

          {/* COLLECTIONS */}
          <div>
            <h3 className="text-[#f4eee4] text-lg font-medium mb-6">
              Collections
            </h3>

            <ul className="space-y-4 text-sm text-[#c8d0ca]">

              <li className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Bombay Dyeing Bedsheets
              </li>

              <li className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Bombay Dyeing Pillow Covers
              </li>

              <li className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Bombay Dyeing Comforters
              </li>

              <li className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Bombay Dyeing Duvet Covers
              </li>

              <li className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Bedroom Essentials
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#f4eee4] text-lg font-medium mb-6">
              Get In Touch
            </h3>

            <div className="text-[#c8d0ca] text-sm space-y-5">

              {/* LOCATION */}
              <div className="flex items-start gap-3">

                <MdLocationOn
                  className="text-[#d8a95b] mt-1 flex-shrink-0"
                  size={20}
                />

                <span className="leading-6">
                  Bhubaneswar, Odisha
                </span>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <MdPhone
                  className="text-[#d8a95b] flex-shrink-0"
                  size={19}
                />

                <a
                  href="tel:+919937513398"
                  className="hover:text-[#d8a95b] transition duration-300"
                >
                  +91 99375 13398
                </a>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <MdEmail
                  className="text-[#d8a95b] mt-1 flex-shrink-0"
                  size={19}
                />

                <a
                  href="mailto:softnsnog@gmail.com"
                  className="hover:text-[#d8a95b] transition duration-300 break-all"
                >
                  softnsnog@gmail.com
                </a>

              </div>

            </div>

            <p className="text-[#8f9b94] text-xs leading-6 mt-7 max-w-xs">
              Explore quality Bombay Dyeing bedding at Soft n Snog and bring
              comfort, style, and a beautiful finish to your bedroom.
            </p>
          </div>

        </div>
      </div>

      {/* NEWSLETTER / CTA STRIP */}
      <div className="border-t border-[#3b4b43]">

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <div className="text-center md:text-left">

              <p className="text-[#f4eee4] text-sm font-medium">
                Bring comfort home.
              </p>

              <p className="text-[#8f9b94] text-xs mt-1">
                Discover Bombay Dyeing bedding at Soft n Snog.
              </p>

            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3 rounded-full bg-[#d8a95b] text-[#17251f] text-sm font-semibold hover:bg-[#e4bd7d] transition-all duration-300"
            >
              Explore Collection
            </button>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#3b4b43]">

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8f9b94]">

            <p>
              © {new Date().getFullYear()} Soft n Snog. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">

              <span className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Privacy Policy
              </span>

              <span className="hover:text-[#d8a95b] cursor-pointer transition duration-300">
                Terms &amp; Conditions
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
