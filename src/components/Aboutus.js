import { 
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign
} from 'react-icons/fa';

import aboutus from '../assets/images/aboutusimg copy.avif';

const Aboutus = () => {
  return (

    <section className="about-section">

      <div className="container about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image" data-aos="fade-left">
          <img src={aboutus} alt="Client Meeting" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content" data-aos="fade-right">

          <span className="about-tag">ABOUT US</span>

          <h2>
            We Build Digital Products
            That Drive Business Growth
          </h2>

          <p className="about-desc">
            Softcoders helps businesses transform ideas into powerful
            software solutions. Our team builds modern web applications,
            mobile apps and scalable platforms designed for long-term
            business success.
          </p>

          <div className="about-highlights">

            <div className="highlight-item">
              <FaCheckCircle className="highlight-icon"/>
              <span>Modern Technologies</span>
            </div>

            <div className="highlight-item">
              <FaPalette className="highlight-icon"/>
              <span>Clean UI / UX Design</span>
            </div>

            <div className="highlight-item">
              <FaDollarSign className="highlight-icon"/>
              <span>Affordable Development</span>
            </div>

            <div className="highlight-item">
              <FaHeadset className="highlight-icon"/>
              <span>24/7 Client Support</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Aboutus;