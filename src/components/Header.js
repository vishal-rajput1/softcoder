import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
  FaProjectDiagram,
  FaUsers,
  FaBullhorn,
  FaTimes,
  FaBars,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";
import { COLORS } from "../theme/theme.js";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path
      ? { color: COLORS.accent }
      : { color: COLORS.light };

  return (
    <header className="w-full fixed top-0 z-50">

      {/* Announcement Marquee */}
      <div
        className="overflow-hidden text-sm py-2"
        style={{ background: COLORS.dark }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap items-center"
          style={{ color: COLORS.white }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <Link to="/career" className="flex items-center gap-2">
            <FaBriefcase style={{ color: COLORS.accent }} />
            We Are Hiring Developers
          </Link>

          <Link to="/services" className="flex items-center gap-2">
            <FaLaptopCode style={{ color: COLORS.accent }} />
            Web Development • Mobile Apps • UI/UX
          </Link>

          <Link to="/portfolio" className="flex items-center gap-2">
            <FaProjectDiagram style={{ color: COLORS.accent }} />
            100+ Successful Projects Delivered
          </Link>

          <a href="mailto:Info@softcoders.in" className="flex items-center gap-2">
            <FaEnvelope style={{ color: COLORS.accent }} />
            Info@softcoders.in
          </a>

          <a href="tel:+918295000455" className="flex items-center gap-2">
            <FaPhone style={{ color: COLORS.accent }} />
            +91-8295000455
          </a>

          <Link to="/about" className="flex items-center gap-2">
            <FaUsers style={{ color: COLORS.accent }} />
            Trusted by Businesses Worldwide
          </Link>

          <Link to="/contact" className="flex items-center gap-2">
            <FaBullhorn style={{ color: COLORS.accent }} />
            Get Your Website or App Built Today
          </Link>
        </motion.div>
      </div>

      {/* Navbar */}
      <nav
        className="transition-all duration-300"
        style={{
          background: COLORS.dark,
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SoftCoders Logo" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li><Link to="/" style={isActive("/")}>Home</Link></li>
            <li><Link to="/about" style={isActive("/about")}>About</Link></li>
            <li><Link to="/services" style={isActive("/services")}>Services</Link></li>
            <li><Link to="/portfolio" style={isActive("/portfolio")}>Portfolio</Link></li>
            <li><Link to="/products" style={isActive("/products")}>Products</Link></li>
            <li><Link to="/career" style={isActive("/career")}>Career</Link></li>

            <li>
              <Link
                to="/contact"
                style={{
                  background: COLORS.accent,
                  color: COLORS.dark,
                }}
                className="px-5 py-2 rounded-full transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-xl"
            style={{ color: COLORS.white }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden px-6 pb-6"
            style={{ background: COLORS.dark }}
          >
            <ul className="flex flex-col gap-4" style={{ color: COLORS.light }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/career">Career</Link></li>

              <li>
                <Link
                  to="/contact"
                  style={{
                    background: COLORS.accent,
                    color: COLORS.dark,
                  }}
                  className="px-4 py-2 rounded-lg inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;