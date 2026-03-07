import React from "react";

import amazon from "../assets/images/amazone.webp"
import google from "../assets/images/google.webp";
import microsoft from "../assets/images/microsoft.webp";
import paypal from "../assets/images/PayPal-Logo.png";
import samsung from "../assets/images/samsung.png";
import jio from "../assets/images/jio.webp"
import bmw from "../assets/images/bmw-logo-2.webp"
import benz from "../assets/images/mercedes-benz.jpg"
import hitachi from "../assets/images/Hitachi-Logo.jpg"
import dell from "../assets/images/dell.jpg"
import deloitte from "../assets/images/deloitte.webp"
import lenevo from "../assets/images/lenevo.webp"


const CompanyLogos = () => {
  const companies = [
    amazon,
    google,
    microsoft,
    paypal,
    samsung,
    jio,
    bmw,
    benz,
    hitachi,
    dell,
    deloitte,
    lenevo
  
  ];

  return (
    <section className="company-section">
      <div className="container">

        <h2 className="company-title">
          Thousands of students achieved their <span>dream job</span> at
        </h2>

        <div className="company-logos">
          {companies.map((logo, index) => (
            <div className="company-logo" key={index}>
              <img src={logo} alt="company" />
            </div>
          ))}
        </div>

        <p className="more-text">+ many more</p>

      </div>
    </section>
  );
};

export default CompanyLogos;