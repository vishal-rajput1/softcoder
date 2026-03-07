import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign,
  FaUsers,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

import aboutus from "../assets/images/aboutus.png";
import StudentTestimonials from "../components/StudentTestimonials";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO / PAGE HEADER */}

      <section
        className="hero"
        style={{
          minHeight: "55vh",
          paddingTop: "150px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div
            className="hero-content"
            data-aos="fade-up"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h1>About Softcoders</h1>

            <p>
              We design and build modern software solutions that help businesses
              grow faster, operate smarter, and scale globally.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY */}

      <section className="section">
        <div className="container">
          <div className="about-content">

            {/* TEXT */}

            <div className="about-text" data-aos="fade-right">

              <h6 className="subtitle">Who We Are</h6>

              <h2>
                A Trusted Web & Software Development Partner
              </h2>

              <p>
                Softcoders has been delivering professional IT services for
                several years. We specialize in creating high-performance
                websites, scalable software platforms, and innovative digital
                experiences that help businesses succeed online.
              </p>

              <p>
                Our experienced team focuses on quality, performance, and user
                experience. We collaborate closely with clients to turn ideas
                into reliable, secure, and scalable digital products.
              </p>

              {/* FEATURES */}

              <div className="about-features">

                <div className="feature-item">
                  <div className="icon">
                    <FaDollarSign />
                  </div>
                  <h5>Affordable Solutions</h5>
                </div>

                <div className="feature-item">
                  <div className="icon">
                    <FaCheckCircle />
                  </div>
                  <h5>Quality Assurance</h5>
                </div>

                <div className="feature-item">
                  <div className="icon">
                    <FaPalette />
                  </div>
                  <h5>Modern UI Design</h5>
                </div>

                <div className="feature-item">
                  <div className="icon">
                    <FaHeadset />
                  </div>
                  <h5>24×7 Support</h5>
                </div>

              </div>
            </div>

            {/* IMAGE */}

            <div
              className="about-image"
              data-aos="fade-left"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={aboutus}
                alt="Softcoders development team working on software solutions"
                style={{
                  maxWidth: "520px",
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}

      <section
        className="section"
        style={{
          background: "var(--light-color)",
        }}
      >
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <p className="subtitle">Our Core Values</p>
            <h2>What Makes Softcoders Different</h2>
            <p>
              We focus on building long-term relationships with our clients
              through innovation, reliability, and continuous improvement.
            </p>
          </div>

          <div
            className="services-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            }}
          >

            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <FaUsers />
              </div>
              <h3>Client Focused</h3>
              <p>
                We understand business goals and deliver solutions that create
                measurable value.
              </p>
            </div>

            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>
                Our team constantly explores new technologies to build smarter
                and more efficient products.
              </p>
            </div>

            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>
                From planning to deployment, we maintain the highest standards
                in every project.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="section">
        <div className="container">

          <div
            data-aos="fade-up"
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <h2>Start Your Next Project With Us</h2>

            <p>
              Tell us about your idea and our team will help you turn it into a
              powerful digital product.
            </p>

            <div
              style={{
                marginTop: "35px",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>

              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

        </div>
      </section>
<StudentTestimonials/>
    </div>
  
  );
};

export default About;