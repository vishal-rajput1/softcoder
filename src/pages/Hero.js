import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image }) => {
  return (

    <motion.section
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "140px 0 100px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden"
      }}
    >

      {/* 🔥 GRADIENT + DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,41,59,0.6))",
          backdropFilter: "blur(3px)"
        }}
      />

      {/* CONTENT */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2
        }}
      >

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "20px"
          }}
        >
          {title}
        </h1>

        <p
  style={{
    maxWidth: "700px",
    margin: "0 auto",
    color: "#ffffff"
  }}
>
          {subtitle}
        </p>

      </div>

    </motion.section>
  );
};

export default Hero;