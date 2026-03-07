import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";


const ServiceDetails = () => {

  const { serviceName } = useParams();

  const service = servicesData.find(
  (s) => s.slug.toLowerCase() === serviceName?.toLowerCase()
);

  if (!service) {
    return (
      <div className="container" style={{ paddingTop: "150px" }}>
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "120px" }}>

      {/* HERO */}

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>{service.title}</h1>
          <p style={{ maxWidth: "700px", margin: "auto" }}>
            {service.heroText}
          </p>

          <div style={{ marginTop: "25px" }}>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>


      {/* DESCRIPTION */}

      <section className="section">
        <div className="container">

          <h2>About This Service</h2>

          <p style={{ maxWidth: "800px" }}>
            {service.description}
          </p>

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

      <section className="section" style={{ background: "var(--light-color)" }}>
        <div className="container">

          <h2>Benefits</h2>

          <ul style={{ marginTop: "20px" }}>
            {service.benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                ⭐ {benefit}
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* CTA */}

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>

          <h2>Ready To Build Your Project?</h2>

          <p>Talk with our experts and start your journey today.</p>

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