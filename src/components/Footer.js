import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight
} from "react-icons/fa";

import { COLORS } from "../theme/theme";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919254147455";
    const message = `Newsletter Subscription Request\nEmail: ${email}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setEmail("");
  };

  return (
    <footer
      className="py-16"
      style={{ background: COLORS.dark, color: COLORS.white }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Get In Touch</h3>

            <p className="flex items-start gap-3 mb-3 text-gray-300">
              <FaMapMarkerAlt className="mt-1" />
              Sector 15, Noida 201301 (U.P.)
            </p>

            <p className="flex items-start gap-3 mb-3 text-gray-300">
              <FaPhone className="mt-1" />
              +91-8295000455
            </p>

            <p className="flex items-start gap-3 mb-5 text-gray-300">
              <FaEnvelope className="mt-1" />
              Info@softcoders.in
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">

              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full transition"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/">
                  <FaChevronRight size={12} /> Home
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/about">
                  <FaChevronRight size={12} /> About Us
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Our Services
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/portfolio">
                  <FaChevronRight size={12} /> Our Projects
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/contact">
                  <FaChevronRight size={12} /> Contact Us
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/career">
                  <FaChevronRight size={12} /> Career
                </Link>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Web Design & Development
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Mobile App Development
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Digital Marketing
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Logo Designing
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> E-commerce Solutions
                </Link>
              </li>

              <li>
                <Link className="flex items-center gap-2 hover:text-white" to="/services">
                  <FaChevronRight size={12} /> Desktop Software
                </Link>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Newsletter</h3>

            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for latest updates and offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-3"
            >

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="py-2 rounded font-medium transition"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Subscribe
              </button>

            </form>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2021-2026 SoftCoders. All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
