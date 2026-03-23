import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { COLORS } from "../theme/theme";
import { Link } from "react-router-dom";

import slide1 from "../assets/images/slide1.avif";
import slide2 from "../assets/images/aboutpage.jpg";
import slide3 from "../assets/images/slide3.avif";

const slides = [
  {
    image: slide1,
    title: "focus business",
    subtitle: "Let us provide the support you deserve.",
  },
  {
    image: slide2,
    title: "grow digitally",
    subtitle: "We build modern web & mobile solutions.",
  },
  {
    image: slide3,
    title: "innovate faster",
    subtitle: "SoftCoders delivers powerful technology.",
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <motion.span key={i} variants={letter}>
        {char}
      </motion.span>
    ));

  return (
  <div className="relative h-screen w-full overflow-hidden z-0">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Parallax Background */}
          <motion.img
            src={slides[index].image}
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center text-center"
            style={{ background: `${COLORS.dark}CC` }}
          >
            <div className="max-w-3xl text-white px-6">
              {/* Animated Title */}
              <motion.h1
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-7xl font-bold flex flex-wrap justify-center"
              >
                {splitText(slides[index].title)}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 text-lg md:text-xl"
              >
                {slides[index].subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
              >
                <Link
                  to="/services"
                  className="px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition"
                  style={{
                    background: COLORS.primary,
                    color: COLORS.dark,
                  }}
                >
                  Explore Services
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-full border-2 font-semibold text-lg hover:scale-105 transition"
                  style={{
                    borderColor: COLORS.primary,
                    color: COLORS.white,
                  }}
                >
                  Get Free Consultation
                </Link>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-10 flex flex-wrap justify-center gap-4 text-sm md:text-base"
              >
                {["React", "Node.js", "AI", "Cloud", "DevOps"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full backdrop-blur border"
                      style={{
                        background: `${COLORS.white}15`,
                        borderColor: `${COLORS.white}30`,
                        color: COLORS.white,
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 backdrop-blur p-4 rounded-full hover:scale-110 transition"
        style={{
          background: `${COLORS.white}20`,
          color: COLORS.white,
        }}
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 backdrop-blur p-4 rounded-full hover:scale-110 transition"
        style={{
          background: `${COLORS.white}20`,
          color: COLORS.white,
        }}
      >
        <FaChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="w-3 h-3 rounded-full cursor-pointer"
            style={{
              background: i === index ? COLORS.primary : `${COLORS.white}55`,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-xs mb-1">SCROLL</span> */}
        {/* <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[2px] h-8"
          style={{ background: COLORS.white }}
        /> */}
      {/* </div> */}
    </div>
  );
};

export default HeroCarousel;