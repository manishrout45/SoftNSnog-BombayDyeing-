import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const ContactUsSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f0e8]
        text-[#24211d]
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.11]
        "
        style={{
          backgroundImage: `
            linear-gradient(#b9b1a4 1px, transparent 1px),
            linear-gradient(90deg, #b9b1a4 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          TOP BRAND BAR
      ===================================================== */}
      <div className="relative z-10 border-b border-[#d4cec3]">
        <div
          className="
            mx-auto
            flex
            h-14
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:px-6
            md:h-16
            md:px-10
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[3px]
              text-[#756b5d]
              sm:text-[9px]
              sm:tracking-[4px]
            "
          >
            Bombay Dyeing
          </p>

          <p
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[4px]
              text-[#756b5d]
              md:block
            "
          >
            Soft N Snog
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a68a60]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[2px]
                sm:text-[9px]
                sm:tracking-[3px]
              "
            >
              Enquiries
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN AREA
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          py-10
          sm:px-6
          sm:py-14
          md:px-10
          md:py-20
          lg:py-24
        "
      >
        <div
          className="
            grid
            gap-10
            lg:min-h-[700px]
            lg:grid-cols-[90px_0.8fr_1.2fr]
            lg:gap-12
          "
        >
          {/* =================================================
              VERTICAL TEXT
          ================================================= */}
          <div className="hidden items-center justify-center lg:flex">
            <div
              className="
                [writing-mode:vertical-rl]
                rotate-180
                text-[11px]
                uppercase
                tracking-[8px]
                text-[#948879]
              "
            >
              Crafted for comfort · Designed for living
            </div>
          </div>

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Small Label */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8">
              

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-[#806a4d]
                    sm:text-[10px]
                    sm:tracking-[4px]
                  "
                >
                  The Art of Linen
                </span>
              </div>

              {/* =================================================
                  MAIN HEADING
              ================================================= */}
              <h1
                className="
                  font-serif
                  text-[48px]
                  font-light
                  leading-[0.86]
                  sm:text-[64px]
                  md:text-[78px]
                  lg:text-[105px]
                "
              >
                Wrap
                <br />

                <span className="ml-4 italic sm:ml-7 lg:ml-8">
                  yourself
                </span>

                <br />

                <span className="ml-8 sm:ml-14 lg:ml-20">
                  in comfort.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-7
                  ml-1
                  max-w-sm
                  text-[13px]
                  leading-6
                  text-[#716b62]
                  sm:mt-9
                  sm:text-sm
                  sm:leading-7
                "
              >
                From timeless patterns to contemporary textures,
                discover bedding crafted to make every moment
                at home feel a little more special.
              </p>
            </div>

            {/* =================================================
                MINI CONTACT
            ================================================= */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="mb-5 flex items-center gap-4 sm:gap-5">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c8c0b4]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <MessageCircle
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p
                    className="
                      mb-1
                      text-[8px]
                      uppercase
                      tracking-[2px]
                      text-[#958b7d]
                      sm:text-[9px]
                      sm:tracking-[3px]
                    "
                  >
                    Need assistance?
                  </p>

                  <p className="text-[13px] sm:text-sm">
                    Talk to our home specialists
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span
                  className="
                    border
                    border-[#c9c1b5]
                    px-3
                    py-2
                    text-[8px]
                    uppercase
                    tracking-[1.5px]
                    sm:px-4
                    sm:text-[9px]
                    sm:tracking-[2px]
                  "
                >
                  Bedsheets
                </span>

                <span
                  className="
                    border
                    border-[#c9c1b5]
                    px-3
                    py-2
                    text-[8px]
                    uppercase
                    tracking-[1.5px]
                    sm:px-4
                    sm:text-[9px]
                    sm:tracking-[2px]
                  "
                >
                  Comforters
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE + FORM
          ================================================= */}
          <div className="relative min-h-0 lg:min-h-[650px]">
            {/* =================================================
                BEDDING IMAGE
            ================================================= */}
            <div
              className="
                relative
                ml-auto
                h-[300px]
                w-full
                overflow-hidden
                sm:h-[400px]
                md:h-[480px]
                lg:absolute
                lg:right-0
                lg:top-0
                lg:h-[570px]
                lg:w-[82%]
              "
            >
              <img
                src="https://img.magnific.com/premium-photo/floral-bedspread-pink-pillows-cozy-bedroom-interior_273893-11243.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Bombay Dyeing bedding"
                loading="lazy"
                decoding="async"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                "
              />

              {/* Image Caption */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  text-white
                  sm:bottom-7
                  sm:left-7
                "
              >
                <p
                  className="
                    mb-2
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    opacity-80
                    sm:text-[9px]
                    sm:tracking-[4px]
                  "
                >
                  Collection 01
                </p>

                <p className="font-serif text-2xl sm:text-3xl">
                  Everyday luxury.
                </p>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================= */}
            <div
              className="
                relative
                z-20
                mt-[-25px]
                w-full
                bg-[#fffdf9]
                p-5
                shadow-[0_2px_8px_rgba(50,40,30,0.05)]
                sm:mt-[-45px]
                sm:p-7
                md:p-8
                lg:absolute
                lg:bottom-0
                lg:left-0
                lg:mt-0
                lg:w-[75%]
              "
            >
              {/* Dashed Stitch Border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  border
                  border-dashed
                  border-[#d9d1c5]
                  sm:inset-3
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    mb-2
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-[#9a7e54]
                    sm:mb-3
                    sm:text-[9px]
                    sm:tracking-[4px]
                  "
                >
                  Personal Assistance
                </p>

                <h2
                  className="
                    mb-5
                    font-serif
                    text-2xl
                    sm:mb-6
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  Let's create{" "}
                  <span className="italic">
                    comfort.
                  </span>
                </h2>

                {/* FORM */}
                <form
                  className="space-y-4 sm:space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Name + Email */}
                  <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      aria-label="Your name"
                      className="
                        min-w-0
                        w-full
                        border-b
                        border-[#cbc3b7]
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        transition-colors
                        duration-150
                        placeholder:text-[#9d968c]
                        focus:border-[#92734b]
                      "
                    />

                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      className="
                        min-w-0
                        w-full
                        border-b
                        border-[#cbc3b7]
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        transition-colors
                        duration-150
                        placeholder:text-[#9d968c]
                        focus:border-[#92734b]
                      "
                    />
                  </div>

                  {/* Phone + Product */}
                  <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      aria-label="Phone number"
                      className="
                        min-w-0
                        w-full
                        border-b
                        border-[#cbc3b7]
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        transition-colors
                        duration-150
                        placeholder:text-[#9d968c]
                        focus:border-[#92734b]
                      "
                    />

                    <select
                      defaultValue=""
                      aria-label="Product interest"
                      className="
                        min-w-0
                        w-full
                        border-b
                        border-[#cbc3b7]
                        bg-transparent
                        py-3
                        text-sm
                        text-[#777066]
                        outline-none
                        focus:border-[#92734b]
                      "
                    >
                      <option value="" disabled>
                        Product interest
                      </option>

                      <option>Bedsheets</option>
                      <option>Comforters</option>
                      <option>Blankets</option>
                      <option>Pillows</option>
                      <option>Bath Linen</option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    rows="2"
                    placeholder="Tell us what you're looking for..."
                    aria-label="Message"
                    className="
                      min-h-[60px]
                      w-full
                      resize-none
                      border-b
                      border-[#cbc3b7]
                      bg-transparent
                      py-3
                      text-sm
                      outline-none
                      transition-colors
                      duration-150
                      placeholder:text-[#9d968c]
                      focus:border-[#92734b]
                    "
                  />

                  {/* Submit */}
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      pt-2
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <p
                      className="
                        hidden
                        text-[9px]
                        uppercase
                        tracking-[2px]
                        text-[#aaa198]
                        sm:block
                      "
                    >
                      We reply within 24 hours
                    </p>

                    <button
                      type="submit"
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-4
                        bg-[#27231f]
                        px-6
                        py-4
                        text-[9px]
                        uppercase
                        tracking-[2px]
                        text-white
                        transition-colors
                        duration-150
                        hover:bg-[#3a342e]
                        sm:w-auto
                        sm:text-[10px]
                      "
                    >
                      Send Enquiry

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-150
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* =================================================
                STATIC BADGE
            ================================================= */}
            <div
              className="
                absolute
                -right-3
                top-[43%]
                hidden
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-[#9b8158]
                text-white
                md:flex
                lg:-right-5
                lg:h-28
                lg:w-28
              "
            >
              <div
                className="
                  text-center
                  text-[7px]
                  uppercase
                  leading-4
                  tracking-[2px]
                  lg:text-[8px]
                  lg:tracking-[3px]
                "
              >
                Comfort
                <br />
                since
                <br />
                1879
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION ROW
        ===================================================== */}
        <div
          className="
            mt-12
            grid
            gap-6
            border-t
            border-[#d3ccc0]
            pt-7
            sm:mt-16
            sm:gap-7
            md:grid-cols-3
            lg:mt-20
          "
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail
              size={17}
              strokeWidth={1.5}
              className="shrink-0 text-[#8f7552]"
            />

            <div>
              <p
                className="
                  mb-1
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-[#9b9286]
                  sm:tracking-[3px]
                "
              >
                Email
              </p>

              <p className="break-all text-[13px] sm:text-sm">
                softnsnog@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone
              size={17}
              strokeWidth={1.5}
              className="shrink-0 text-[#8f7552]"
            />

            <div>
              <p
                className="
                  mb-1
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-[#9b9286]
                  sm:tracking-[3px]
                "
              >
                Customer Care
              </p>

              <p className="text-[13px] sm:text-sm">
                We're here to help
              </p>
            </div>
          </div>

          {/* Collection */}
          <div className="flex items-center gap-4">
            <div
              className="
                h-4
                w-4
                shrink-0
                rounded-full
                border
                border-[#8f7552]
              "
            />

            <div>
              <p
                className="
                  mb-1
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-[#9b9286]
                  sm:tracking-[3px]
                "
              >
                Collection
              </p>

              <p className="text-[13px] sm:text-sm">
                Bedding · Bath · Home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM MARQUEE - STATIC
      ===================================================== */}
      <div
        className="
          relative
          overflow-hidden
          border-t
          border-[#d3ccc0]
          py-5
          sm:py-6
        "
      >
        <div
          className="
            flex
            w-full
            flex-wrap
            justify-center
            gap-x-6
            gap-y-2
            px-5
            text-center
            text-[8px]
            uppercase
            tracking-[3px]
            text-[#8c8377]
            sm:gap-x-10
            sm:text-[10px]
            sm:tracking-[5px]
          "
        >
          <span>Softness</span>
          <span>✦</span>
          <span>Craftsmanship</span>
          <span>✦</span>
          <span>Better Sleep</span>
          <span>✦</span>
          <span>Beautiful Living</span>
          <span>✦</span>
          <span>Timeless Comfort</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;