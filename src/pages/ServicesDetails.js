import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";

const ServiceDetails = () => {

  const { serviceName } = useParams();

  const service = servicesData.find(
    (s) => s.slug === serviceName
  );

  if (!service) {
    return (
      <div className="container" style={{ paddingTop: "150px" }}>
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "110px" }}>

      {/* HERO */}

      <section style={{ padding: "50px 0", textAlign: "center" }}>
        <div className="container">

          <h1 style={{ marginBottom: "15px" }}>
            {service.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "#555",
              lineHeight: "1.7"
            }}
          >
            {service.heroText}
          </p>

          <div style={{ marginTop: "25px" }}>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>


      {/* DESCRIPTION + IMAGE */}

      <section style={{ padding: "60px 0" }}>
        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              alignItems: "center"
            }}
          >

            <div>

              <h2>About This Service</h2>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "1.8",
                  color: "#555"
                }}
              >
                {service.description}
              </p>

            </div>

            <div>

              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
              />

            </div>

          </div>

        </div>
      </section>


      {/* FEATURES */}

      <section className="section" style={{ background: "var(--light-color)" }}>
        <div className="container">

          <h2>What We Offer</h2>

          <ul style={{ marginTop: "20px" }}>
            {service.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                ✔ {feature}
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* TECHNOLOGIES */}

      <section className="section">
        <div className="container">

          <h2>Technologies We Use</h2>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "8px 15px",
                  background: "#eee",
                  borderRadius: "8px"
                }}
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>


      {/* BENEFITS */}

      <section style={{ background: "#f8f9fa", padding: "60px 0" }}>
        <div className="container">

          <h2>Benefits</h2>

          <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
            {service.benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                 {benefit}
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* CTA */}

      <section style={{ padding: "70px 0", textAlign: "center" }}>
        <div className="container">

          <h2>Ready To Build Your Project?</h2>

          <p style={{ marginTop: "10px", color: "#666" }}>
            Talk with our experts and start your journey today.
          </p>

          <div style={{ marginTop: "20px" }}>
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;