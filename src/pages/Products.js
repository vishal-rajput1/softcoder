import React, { useState } from "react";

import schoolERP1 from "../assets/images/gurukulerp.png";
import schoolERP2 from "../assets/images/gurukulerp2.png";
import billing1 from "../assets/images/billingsoftware1.jpeg";
import billing2 from "../assets/images/billingsoftware2.jpeg";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: 1,
      title: "GuruKul School ERP",
      category: "School ERP",
      images: [schoolERP1, schoolERP2],
      description: `A complete school management ERP with Admin, Teacher, and Student panels. 
      Manage attendance, exams, report cards, homework, notifications and more.`
    },
    {
      id: 2,
      title: "ShopKeeper Billing Software",
      category: "Billing Software",
      images: [billing1, billing2],
      description: `Simple and powerful billing and inventory system designed for retail shops. 
      Generate bills, manage stock, track sales and analyze reports easily.`
    }
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="products-page">

      {/* HERO */}

      <section
        className="hero"
        style={{
          minHeight: "60vh",
          paddingTop: "150px",
          display: "flex",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <div className="container">

          <h1>Our Products</h1>

          <p style={{ maxWidth: "720px", margin: "0 auto" }}>
            Powerful software solutions built to simplify school management
            and business operations.
          </p>

        </div>
      </section>


      {/* FILTER */}

      <section className="section">
        <div className="container">

          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >
            {["All", "School ERP", "Billing Software"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "30px"
                }}
              >
                {filter}
              </button>
            ))}
          </div>


          {/* PRODUCTS */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "80px"
            }}
          >

            {filteredProducts.map((product, index) => (

              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  alignItems: "center",
                  padding: "40px",
                  borderRadius: "18px",
                  background: "#fff",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)"
                }}
              >

                {/* IMAGES */}

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap"
                  }}
                >
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.title} ${idx}`}
                      style={{
                        width: "100%",
                        maxWidth: "280px",
                        borderRadius: "12px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
                      }}
                    />
                  ))}
                </div>


                {/* INFO */}

                <div>

                  <h2
                    style={{
                      color: "var(--primary-color)",
                      marginBottom: "15px"
                    }}
                  >
                    {product.title}
                  </h2>

                  <p
                    style={{
                      lineHeight: "1.8",
                      fontSize: "1rem"
                    }}
                  >
                    {product.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* TRUST SECTION */}

      <section
        className="section"
        style={{
          background: "var(--light-color)"
        }}
      >
        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "40px",
              textAlign: "center"
            }}
          >

            <div>
              <h3 style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}>
                50+
              </h3>
              <p>Projects Delivered</p>
            </div>

            <div>
              <h3 style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}>
                30+
              </h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3 style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}>
                20+
              </h3>
              <p>Team Members</p>
            </div>

            <div>
              <h3 style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}>
                10+
              </h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="section">
        <div className="container">

          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>

            <h2>Need a Custom Software Solution?</h2>

            <p>
              Our team can build tailored solutions to fit your exact business needs.
            </p>

            <div style={{ marginTop: "25px" }}>
              <a href="/contact" className="btn btn-primary">
                Contact Our Team
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Products;