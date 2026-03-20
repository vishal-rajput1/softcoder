
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobile,
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaPaintBrush,
  FaTools,
  FaRocket,
  FaCheckCircle,
  FaCogs,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";
import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "High-performance websites and custom web applications built using modern technologies.",
      features: [
        "Custom Web Applications",
        "Enterprise Solutions",
        "API Development",
        "Cloud Integration"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description:
        "Scalable mobile applications for iOS and Android platforms.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross Platform Apps",
        "Maintenance"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Result-driven marketing strategies to grow your brand online.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Paid Advertising"
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description:
        "Online stores designed for conversion and scalability.",
      features: [
        "Shopify / Magento",
        "Payment Integration",
        "Inventory Management",
        "Custom Checkout"
      ]
    },
    {
      icon: <FaPaintBrush />,
      title: "Brand & Logo Design",
      description:
        "Unique visual identities that build brand trust and recognition.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Business Kits",
        "Brand Guidelines"
      ]
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description:
        "Powerful custom desktop software solutions for businesses.",
      features: [
        "Custom Software",
        "System Integration",
        "Automation",
        "Maintenance"
      ]
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description:
        "Reliable technical support to keep systems running smoothly.",
      features: [
        "Bug Fixing",
        "Security Updates",
        "Performance Optimization",
        "Monitoring"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Online Advertising",
      description:
        "High ROI digital campaigns to grow your customer base.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Retargeting",
        "Campaign Strategy"
      ]
    }
  ];

  return (
    <div className="services-page">

      {/* HERO */}

      <section
        className="hero"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "150px"
        }}
      >
        <div className="container">

          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Premium Digital Services
          </h1>

          <p style={{ maxWidth: "750px", margin: "0 auto" }}>
            We help businesses build powerful digital products,
            improve online presence, and scale faster with modern technology.
          </p>

          <div style={{ marginTop: "30px" }}>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="section">
        <div className="container">

          <div className="section-title">
            <p className="subtitle">Our Expertise</p>
            <h2>Services Designed For Business Growth</h2>
          </div>

          <div
            className="services-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px"
            }}
          >

            {services.map((service, index) => (

              <div
                 key={index}
                 className="service-card"
                    style={{
                    padding: "35px",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                         }}
                   >

                <div
                  style={{
                    fontSize: "34px",
                    marginBottom: "15px",
                    color: "var(--primary-color)"
                  }}
                >
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p style={{ marginTop: "10px" }}>
                  {service.description}
                </p>

                {/* FEATURES */}

                <ul style={{ listStyle: "none", padding: 0, marginTop: "18px" }}>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        padding: "6px 0",
                        fontSize: "0.95rem"
                      }}
                    >
                      <FaCheckCircle color="var(--primary-color)" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* KNOW MORE BUTTON */}

                <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                  <Link
                   to={`/services/${service.title
  .toLowerCase()
  .replace(/&/g, "")
  .replace(/\s+/g, "-")}`}
                    className="btn btn-primary"
                  >
                    Know More
                  </Link>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* PROCESS SECTION */}

      <section
        className="section"
        style={{ background: "var(--light-color)" }}
      >

        <div className="container">

          <div className="section-title">
            <p className="subtitle">Our Process</p>
            <h2>How We Build Successful Products</h2>
          </div>

          <div
            className="services-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))"
            }}
          >

            <div className="service-card">
              <FaLightbulb size={30} />
              <h3>Research</h3>
              <p>
                We understand your business, users, and goals before building anything.
              </p>
            </div>

            <div className="service-card">
              <FaCogs size={30} />
              <h3>Development</h3>
              <p>
                Using modern technologies we build secure and scalable systems.
              </p>
            </div>

            <div className="service-card">
              <FaChartLine size={30} />
              <h3>Growth</h3>
              <p>
                We optimize performance and marketing to grow your business.
              </p>
            </div>

          </div>

        </div>

      </section>


      


      {/* CTA */}

      <section className="section">

        <div className="container">

          <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>

            <h2>Let’s Build Something Amazing</h2>

            <p>
              Talk to our experts and discover how we can help grow your business.
            </p>

            <div style={{ marginTop: "25px" }}>
              <Link to="/contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;