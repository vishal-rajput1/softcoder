import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import { COLORS } from "../theme/theme";

const Info = () => {
  return (
   <section className="services-section">
  <div className="container">

    <div className="services-grid">

      <div className="service-card">
        <div className="service-icon">
          <FaEnvelope />
        </div>

        <h5>Email Us</h5>

        <p>
          Have questions about our services or need support?
          Send us an email and our team will respond quickly.
        </p>

        <a href="mailto:Info@softcoders.in" className="service-link">
          Info@softcoders.in
        </a>
      </div>


      <div className="service-card">
        <div className="service-icon">
          <FaPhoneAlt />
        </div>

        <h5>Call Us</h5>

        <p>
          Speak directly with our experts for project discussions,
          service inquiries, or technical assistance.
        </p>

        <a href="tel:+918295000455" className="service-link">
          +91-8295000455
        </a>
      </div>


      <div className="service-card">
        <div className="service-icon">
          <FaMapMarkerAlt />
        </div>

        <h5>Visit Our Office</h5>

        <p>
          Meet our team in person to discuss your business needs
          and explore our software solutions.
        </p>

        <span className="service-link">
          Sector 15, Noida 201301 (U.P.)
        </span>
      </div>

    </div>

  </div>
</section>
  );
};

export default Info;