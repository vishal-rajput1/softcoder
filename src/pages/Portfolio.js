
import React, { useEffect } from "react";
import kingsprinter from "../assets/images/kingsprinter.png";
import hsfFoods from "../assets/images/hsffoods.png";
import vyaapak from "../assets/images/Screenshot 2026-03-20 152159.png";
import paryavaran from "../assets/images/paryavaran.png";
import budTulips from "../assets/images/budtulips.png";

const Portfolio = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Kings Printer",
      category: "E-commerce",
      image: kingsprinter,
      description:
        "Custom printing and online ordering e-commerce platform with modern UI and secure checkout system.",
    },
    {
      id: 2,
      title: "Bud & Tulips",
      category: "E-commerce",
      image: budTulips,
      description:
        "Online flower delivery platform with elegant design and seamless shopping experience.",
    },
    {
      id: 3,
      title: "HSF Foods",
      category: "Web Application",
      image: hsfFoods,
      description:
        "Food supply chain and order management web application for efficient business operations.",
    },
    {
      id: 4,
      title: "Vyaapak Information System",
      category: "E-commerce",
      image: vyaapak,
      description:
        "Advanced digital solution providing online services with secure payment and data management system.",
    },
    {
      id: 5,
      title: "Paryavaran Prerna",
      category: "Web Application",
      image: paryavaran,
      description:
        "Environmental awareness and reporting web application designed for community engagement.",
    },
  ];

  return (
    <div className="portfolio-page">

      {/* HERO */}

      <section
        className="hero"
        style={{
          minHeight: "60vh",
          paddingTop: "150px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="container">

          <h1 style={{ marginBottom: "20px" }}>
            Our Portfolio
          </h1>

          <p style={{ maxWidth: "700px", margin: "0 auto" }}>
            Explore some of the digital products and platforms we’ve created
            for our clients across different industries.
          </p>

        </div>
      </section>

      {/* PROJECTS */}

      <section className="section">
        <div className="container">

          <div className="section-title">
            <p className="subtitle">Our Work</p>
            <h2>Recent Projects We’ve Delivered</h2>
          </div>

          <div
            className="portfolio-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "35px",
              marginTop: "40px",
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="portfolio-overlay"
                  style={{
                    padding: "25px",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}

      <section
        className="section"
        style={{
          background: "var(--light-color)",
        }}
      >
        <div className="container">

         <div
  className="stats-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "30px",
  }}
>

  <div className="stat-item">
    <h4 style={{ fontSize: "2.8rem", color: "var(--primary-color)" }}>
      50+
    </h4>
    <p>Projects Completed</p>
  </div>

  <div className="stat-item">
    <h4 style={{ fontSize: "2.8rem", color: "var(--primary-color)" }}>
      30+
    </h4>
    <p>Happy Clients</p>
  </div>

  <div className="stat-item">
    <h4 style={{ fontSize: "2.8rem", color: "var(--primary-color)" }}>
      20+
    </h4>
    <p>Team Members</p>
  </div>

  <div className="stat-item">
    <h4 style={{ fontSize: "2.8rem", color: "var(--primary-color)" }}>
      10+
    </h4>
    <p>Years Experience</p>
  </div>

</div>

        </div>
      </section>

      {/* CTA */}

      <section className="section">
        <div className="container">

          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <h2>Want To Work With Us?</h2>

            <p>
              Let’s create something amazing together.
            </p>

            <div style={{ marginTop: "25px" }}>
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;