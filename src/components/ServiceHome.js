import React from "react";
import {
  FaCode,
  FaMobile,
  FaBullhorn,
  FaShoppingCart
} from "react-icons/fa";

import { COLORS } from "../theme/theme";

const industries = [
  {
    icon: <FaShoppingCart />,
    title: "E-commerce",
    desc: "Online stores and digital selling platforms."
  },
  {
    icon: <FaCode />,
    title: "Technology",
    desc: "SaaS apps and modern software platforms."
  },
  {
    icon: <FaMobile />,
    title: "Mobile Apps",
    desc: "Android and iOS apps with smooth UX."
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing",
    desc: "SEO and digital marketing solutions."
  },
  {
    icon: <FaShoppingCart />,
    title: "Retail",
    desc: "Billing software and inventory systems."
  },
  {
    icon: <FaCode />,
    title: "Enterprise",
    desc: "ERP systems and business automation."
  }
];

const ServiceHome = () => {
  return (
    <section
      className="py-24"
      style={{
        background: `linear-gradient(180deg, ${COLORS.light}, ${COLORS.white})`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>

            <p
              className="font-semibold mb-3 tracking-wide uppercase text-sm"
              style={{ color: COLORS.primary }}
            >
              Industries We Serve
            </p>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: COLORS.dark }}
            >
              Smart IT Solutions
              <br />
              For Every Industry
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{ color: COLORS.secondary }}
            >
              Softcoders provides customized software and web solutions
              for industries including Field Service, Online Commerce,
              Hospitality, Real Estate, Security, Media Management
              and many more.
            </p>

          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {industries.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center"
              >

                {/* ICON */}
                <div
                  className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 text-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                    color: COLORS.white
                  }}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h4
                  className="font-semibold mb-2 text-lg"
                  style={{ color: COLORS.dark }}
                >
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p
                  className="text-sm"
                  style={{ color: COLORS.secondary }}
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceHome;