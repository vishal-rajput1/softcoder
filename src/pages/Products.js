import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import schoolERP1 from "../assets/images/gurukulerp.png";
import schoolERP2 from "../assets/images/gurukulerp2.png";
import schoolERPlogo from "../assets/images/Gurukul erp img logo.jpg.jpeg";

import billing1 from "../assets/images/billingsoftware1.jpeg";
import billing2 from "../assets/images/billingsoftware2.jpeg";
import billinglogo from "../assets/images/bt erp img logo.jpg.jpeg" 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero from "../pages/Hero";
import heroimg from "../assets/images/herobg.jpg";

const Products = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const [activeFilter] = useState("All");
const navigate = useNavigate();
  const products = [
  {
    id: 1,
    title: "GuruKul School ERP",
    category: "School ERP",
    images: [schoolERPlogo ,schoolERP1, schoolERP2],
    link: "http://www.gurukulerp.in/",
    description: `A complete school management ERP...`
  },
  {
    id: 2,
    title: "ShopKeeper Billing Software",
    category: "Billing Software",
    images: [billinglogo, billing1, billing2],
    link: "https://billingsoftware-iskt.onrender.com", // or external link if you have one
    description: `Simple and powerful billing system...`
  }
];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="products-page">

      {/* HERO */}

     {/*  <section
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
      </section> */}

      <Hero
  title="Our Products"
  subtitle="Powerful software solutions built to simplify school management
            and business operations."
  image={heroimg}
  initial={{ scale: 1.1 }}
animate={{ scale: 1 }}
/>

{/* PRODUCTS */}

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "60px"
  }}
>

{filteredProducts.map((product, index) => (

<div
  key={product.id}
  data-aos="fade-up"
  data-aos-delay={index * 100}
  style={{
    display: "grid",
    gridTemplateColumns: "40% 60%",
    gap: "40px",
    alignItems: "center",
    padding: "40px",
    borderRadius: "18px",
    background: "#fff",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)"
  }}
>

{/* IMAGE LEFT */}

<div>

<Swiper
modules={[Autoplay, Pagination]}
pagination={{ clickable: true }}
autoplay={{ delay: 2500 }}
spaceBetween={10}
slidesPerView={1}
>

{product.images.map((img, index) => (

<SwiperSlide key={index}>

<img
  src={img}
  alt={product.title}
  style={{
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "12px"
  }}
/>

</SwiperSlide>

))}

</Swiper>

</div>


{/* CONTENT RIGHT */}

<div>

<h2 style={{ margin: "15px 0" }}>
{product.title}
</h2>

<p
style={{
lineHeight:"1.8",
marginBottom:"20px"
}}
>
{product.description}
</p>


{/* FEATURES */}

<ul style={{
lineHeight:"1.9",
marginBottom:"25px",
paddingLeft:"18px"
}}>
<li>Cloud Based System</li>
<li>Role Based Access Control</li>
<li>Detailed Reports & Analytics</li>
<li>Secure Database Management</li>
</ul>


{/* BUTTON */}

<button
  onClick={() => {
    if (product.link.startsWith("http")) {
      window.open(product.link, "_blank"); // external link
    } else {
      navigate(product.link); // internal page
    }
  }}
  style={{
    padding: "12px 26px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  View More
</button>

</div>

</div>

))}

</div>


      

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