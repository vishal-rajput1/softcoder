import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";

const ServiceDetails = () => {

  const { serviceName } = useParams();

const service = servicesData.find(
  (s) => s.slug === serviceName
) || null;

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


<section className="offer-section">
  <div className="container offer-wrapper">

    {/* LEFT SIDE */}

    <div className="offer-left" data-aos="fade-right">
      <h2>What We Offer</h2>

      <p>
        We deliver powerful digital solutions designed to help
        businesses grow, scale and operate more efficiently.
      </p>
    </div>


    {/* RIGHT SIDE */}

    <div className="offer-right">

      {service.features.map((feature, index) => (

        <div
          className="offer-item"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          ✔ {feature}
        </div>

      ))}

    </div>

  </div>
</section>


      {/* TECHNOLOGIES */}

      <section style={{ padding: "70px 0" }}>
        <div className="container">

          {/* Title */}

          <div style={{ textAlign: "center", marginBottom: "40px" }}>

            <p
              style={{
                color: "#6c63ff",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}
            >
              Our Stack
            </p>

            <h2>Technologies That Power Our Solutions</h2>

            <p
              style={{
                maxWidth: "600px",
                margin: "10px auto",
                color: "#666"
              }}
            >
              We use modern technologies to build scalable, secure
              and high-performance applications.
            </p>

          </div>


          {/* Scrollable Cards */}

          <div
            style={{
              display: "flex",
              gap: "25px",
              overflowX: "auto",
              paddingBottom: "15px",
              scrollSnapType: "x mandatory"
            }}
          >

            {service.technologies.map((tech, index) => (

              <div
                key={index}
                style={{
                  width: "280px",
                  flexShrink: 0,
                  background: "#fff",
                  padding: "35px",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  scrollSnapAlign: "start",
                  transition: "0.3s",
                  cursor: "pointer"
                }}

                onMouseEnter={(e)=>{
                  e.currentTarget.style.transform="translateY(-8px)"
                  e.currentTarget.style.boxShadow="0 20px 50px rgba(0,0,0,0.15)"
                }}

                onMouseLeave={(e)=>{
                  e.currentTarget.style.transform="translateY(0)"
                  e.currentTarget.style.boxShadow="0 10px 30px rgba(0,0,0,0.08)"
                }}
              >

                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{
                    width: "60px",
                    marginBottom: "15px"
                  }}
                />

                <h3
                    style={{
                    marginBottom: "10px",
                    fontSize: "1.1rem",
                    wordBreak: "break-word",
                    whiteSpace: "normal"
                          }}
                  >
                       {tech.name}
                </h3>

                <p
                  style={{
                           fontSize: "0.95rem",
                           color: "#555",
                           lineHeight: "1.6",
                           wordBreak: "break-word"
                         }}
                  >
                    {tech.description}
                </p>
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* BENEFITS */}
<section className="benefits-section">
  <div className="container benefits-wrapper">

    {/* LEFT SIDE */}

    <div className="benefits-left" data-aos="fade-right">
      <h2>Benefits</h2>

      <p>
        Our solutions are designed to improve efficiency,
        enhance performance and help your business scale
        with modern technology.
      </p>
    </div>


    {/* RIGHT SIDE */}

    <div className="benefits-right">

      {service.benefits.map((benefit, index) => (

        <div
          className="benefit-item"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          ✔ {benefit}
        </div>

      ))}

    </div>

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