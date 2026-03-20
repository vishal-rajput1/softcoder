import React from "react";
import { COLORS } from "../theme/theme";

import { Link } from "react-router-dom";
import img1 from "../assets/images/slide1.avif";
import img2 from "../assets/images/slide2.avif";
import img3 from "../assets/images/slide3.avif";

const CompanySection = () => {
  return (
    <section className="w-full">

      {/* Top Section */}
      <div
        className="pt-24 pb-40 px-6"
        style={{ background: COLORS.dark, color: COLORS.white }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <p
              className="tracking-widest text-sm mb-4"
              style={{ color: COLORS.accent }}
            >
              OUR COMPANY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Soft Coders is your trusted source in IT services and support
            </h2>
          </div>

          {/* Right */}
          <div
            className="text-lg leading-relaxed"
            style={{ color: `${COLORS.white}CC` }}
          >
            Soft Coders is a trusted IT solutions provider focused on delivering smart, scalable, and result-driven digital services. Our team combines technical expertise with creative thinking to build powerful software, websites, and applications tailored to your business goals.

We are committed to quality, performance, and long-term support, ensuring that every solution we deliver adds real value to your business.
          </div>

        </div>
      </div>


      {/* Cards Section */}
      <div
        className="relative pt-24 pb-20 px-6"
        style={{ background: COLORS.light }}
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 -mt-40">

          {/* Card 1 */}
          <div className="relative group cursor-pointer overflow-hidden z-10">

            <img
              src={img1}
              className="w-full h-72 object-cover rounded-lg transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100 rounded-lg"></div>

            {/* White Card */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] px-10 py-6 text-center rounded-lg transition-all duration-500 group-hover:bottom-[-5px] group-hover:shadow-2xl"
              style={{ background: COLORS.white }}
            >

              <p className="text-sm mb-1" style={{ color: COLORS.primary }}>
                Our services
              </p>

             <h3
  className="text-xl font-semibold mb-2 whitespace-nowrap"
  style={{ color: COLORS.dark }}
>
  How we can help
</h3>

              {/* Learn More */}
              <Link
              to="/About"
                className="text-sm font-medium opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: COLORS.primary }}
              >
                Discover Now →
              </Link>

            </div>

          </div>


          {/* Card 2 */}
          <div className="relative group cursor-pointer overflow-hidden">

            <img
              src={img3}
              className="w-full h-72 object-cover rounded-lg transition duration-500 group-hover:scale-110"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100 rounded-lg"></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] px-10 py-6 text-center rounded-lg transition-all duration-500 group-hover:bottom-[-5px] group-hover:shadow-2xl"
              style={{ background: COLORS.white }}
            >

              <p className="text-sm mb-1" style={{ color: COLORS.primary }}>
                Our expertise
              </p>

              <h3
  className="text-xl font-semibold mb-2 whitespace-nowrap"
  style={{ color: COLORS.dark }}
>
  Why choose us
</h3>

              <Link
              to="/About"
                className="text-sm font-medium opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: COLORS.primary }}
              >
                Learn more →
              </Link>

            </div>

          </div>


          {/* Card 3 */}
          <div className="relative group cursor-pointer overflow-hidden">

            <img
              src={img2}
              className="w-full h-72 object-cover rounded-lg transition duration-500 group-hover:scale-110"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100 rounded-lg"></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] px-10 py-6 text-center rounded-lg transition-all duration-500 group-hover:bottom-[-5px] group-hover:shadow-2xl"
              style={{ background: COLORS.white }}
            >

              <p className="text-sm mb-1" style={{ color: COLORS.primary }}>
                Our customers
              </p>

              <h3
  className="text-xl font-semibold mb-2 whitespace-nowrap"
  style={{ color: COLORS.dark }}
>
  Client success stories
</h3>

              <Link
              to="/About"
                className="text-sm font-medium opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: COLORS.primary }}
              >
                Read More →
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default CompanySection;