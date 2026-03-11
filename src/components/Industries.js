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

const Industries = () => {

return (



<section className="industries-section">
  <div className="container industries-wrapper">

    {/* LEFT TEXT */}

    <div className="industries-left" data-aos="fade-right">

      <p className="subtitle">Industries We Serve</p>

      <h2>
        Smart IT Solutions
        <br/> For Every Industry
      </h2>

      <p className="industry-desc">
       Softcoders is a Software and Web development company. We here at Softcoders, provide customized solutions for many industries like Field delivery, Field Service, Security, Online Commerce, Hospitality, Real-estate, Media Management, and many more.
      </p>

    </div>


    {/* RIGHT CARDS */}

    <div className="industries-grid">

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="100">
        <div className="industry-icon"><FaShoppingCart/></div>
        <h4>E-commerce</h4>
        <p>Online stores and digital selling platforms.</p>
      </div>

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="200">
        <div className="industry-icon"><FaCode/></div>
        <h4>Technology</h4>
        <p>SaaS apps and modern software platforms.</p>
      </div>

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="300">
        <div className="industry-icon"><FaMobile/></div>
        <h4>Mobile Apps</h4>
        <p>Android and iOS apps with smooth UX.</p>
      </div>

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="400">
        <div className="industry-icon"><FaBullhorn/></div>
        <h4>Marketing</h4>
        <p>SEO and digital marketing solutions.</p>
      </div>

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="500">
        <div className="industry-icon"><FaShoppingCart/></div>
        <h4>Retail</h4>
        <p>Billing software and inventory systems.</p>
      </div>

      <div className="industry-card" data-aos="zoom-in" data-aos-delay="600">
        <div className="industry-icon"><FaCode/></div>
        <h4>Enterprise</h4>
        <p>ERP systems and business automation.</p>
      </div>

    </div>

  </div>
</section>
);
}
export default Industries;