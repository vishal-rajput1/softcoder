
import whychooseus from "../assets/images/whychooseus.png";
import { 
  FaCode, 
  FaMobile, 
  FaLaptopCode, 
  FaBullhorn, 
  FaShoppingCart,
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign,
  FaFilter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';


import { Link } from "react-router-dom";
import { COLORS, BUTTON } from "../theme/theme";
const WhyChooseUs = () => {
return(

<section className="why-choose-section">
  <div className="container why-choose-wrapper">

    {/* LEFT IMAGE */}

    <div className="why-image" data-aos="fade-right">
      <img src={whychooseus} alt="Why Choose Us" />
    </div>


    {/* RIGHT CONTENT */}

    <div className="why-content" data-aos="fade-left">

      <p className="subtitle">Why Choose Us</p>

      <h2>
        Managed IT Services Built
        <br/> For Your Business Growth
      </h2>

      <p className="why-desc">
        Softcoders delivers reliable web, mobile and software
        development services helping businesses scale faster
        using modern technology and powerful digital platforms.
      </p>


      <div className="why-features">

        <div className="why-item">
          <div className="why-icon"><FaCheckCircle/></div>
          <div>
            <h4>Experienced Developers</h4>
            <p>Professional engineers delivering scalable digital solutions.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon"><FaPalette/></div>
          <div>
            <h4>Modern UI / UX Design</h4>
            <p>Clean, responsive and high-performance interfaces.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="why-icon"><FaHeadset/></div>
          <div>
            <h4>Dedicated Support</h4>
            <p>Reliable support and long-term technology partnership.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
);
}
export default WhyChooseUs;