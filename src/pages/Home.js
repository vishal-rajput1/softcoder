import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  // FaLaptopCode, 
  FaBullhorn, 
  FaShoppingCart,
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign,
  // FaFilter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  // FaWhatsapp
} from 'react-icons/fa';
import aboutus from "../assets/images/aboutus.png";
import whychooseus from "../assets/images/whychooseus.png";
import kingsprinter from "../assets/images/kingsprinter.png";
import hsfFoods from "../assets/images/hsffoods.png";
import vyaapak from "../assets/images/vyaapak.png";
import paryavaran from "../assets/images/paryavaran.png";
import budTulips from "../assets/images/budtulips.png";
import gurukulERPImg from "../assets/images/gurukulerp.png";
import billingSoftImg from "../assets/images/billingsoftware1.jpeg";
import AIFeatures from '../components/AIFeatures';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "Kings Printer",
    review:
      "Softcoders built an amazing e-commerce website for us. Their team delivered on time and the design is outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Anita Verma",
    company: "Bud & Tulips",
    review:
      "Excellent support and professional work. Our online flower store is now running smoothly.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Singh",
    company: "HSF Foods",
    review:
      "The web application they built helped us manage orders and operations efficiently.",
    rating: 4
  },
  {
    id: 4,
    name: "Ajay Rajput",
    company: "Shanmukha Agro",
    review:
      "Excellent support and professional work. Our online Products store is now running smoothly.",
    rating: 5
  },
];

  const portfolioItems = [
  { 
    id: 1, 
    title: 'Kings Printer', 
    category: 'E-commerce', 
    image: kingsprinter,
    description: 'Custom printing and online ordering e-commerce platform with modern UI and secure checkout system.'
  },
  { 
    id: 2, 
    title: 'Bud & Tulips', 
    category: 'E-commerce', 
    image: budTulips,
    description: 'Online flower delivery platform with elegant design and seamless shopping experience.'
  },
  { 
    id: 3, 
    title: 'HSF Foods', 
    category: 'Web Application', 
    image: hsfFoods,
    description: 'Food supply chain and order management web application for efficient business operations.'
  },
  { 
    id: 4, 
    title: 'Vyaapak Information System', 
    category: 'E-commerce', 
    image: vyaapak,
    description: 'Advanced digital solution providing online services with secure payment and data management system.'
  },
  { 
    id: 5, 
    title: 'Paryavaran Prerna', 
    category: 'Websites', 
    image: paryavaran,
    description: 'Environmental awareness and reporting web application designed for community engagement and sustainability tracking.'
  }
];


const products = [
  {
    id: 1,
    title: "Gurukul ERP – Complete School Management System",
    description:
      "A full-fledged school ERP solution to manage academic, administrative, and financial operations efficiently.",
    features: [
      "Admin Dashboard",
      "Teacher Panel",
      "Student & Parent Portal",
      "Attendance & Examination System",
      "Fee & Billing Management",
      "Reports & Analytics"
    ],
    image: gurukulERPImg,
    website: "https://www.gurukulerp.in",
    demoLink: "/contact"
  },
  {
    id: 2,
    title: "Billing Software for Shopkeepers",
    description:
      "Simple, secure, and fast billing software designed for retail shops, small businesses, and shopkeepers to manage sales, stock, and invoices.",
    features: [
      "Generate Bills & Invoices",
      "Track Sales & Inventory",
      "Customer Management",
      "Daily/Monthly Reports",
      "Secure Data Backup",
      "Multi-user Support"
    ],
    image: billingSoftImg,
    website: "#", // replace with real link if available
    demoLink: "/contact"
  }
];


  const filteredPortfolio = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919254147455'; // WhatsApp number without + and spaces
    const message = `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="home">
     {/* Hero Section */}
<section className="hero">
  {/* Background Video */}
  <video autoPlay loop muted playsInline className="hero-video">
    <source src={require("../assets/images/Coding.gif")} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="hero-overlay"></div>

  <div className="container">
    <div className="hero-slide single">
      <div className="hero-content" data-aos="fade-up">
        <h4>AI • Web • Mobile • Cloud</h4>
        <h1>
          We Build <span className="gradient-text">Smart Digital Products</span>
        </h1>
        <p>
          Transform your ideas into scalable software solutions with modern
          technologies and innovative thinking.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get Free Consultation
          </Link>
        </div>

        {/* Floating Tech Stack */}
        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>AI</span>
          <span>Cloud</span>
          <span>DevOps</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Info Cards */}
      <section className="section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><FaEnvelope /></div>
              <h5>Email Us</h5>
              <p>Info@softcoders.in</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><FaPhone /></div>
              <h5>Call Us</h5>
              <p>+91-8295000455</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><FaMapMarkerAlt /></div>
              <h5>Office</h5>
              <p>Sector 15, Noida 201301 (U.P.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h6>Learn About Us</h6>
              <h2>We Are The Best Web & Software Development Company</h2>
              <p>
                Softcoders has worked in the IT industry for many years. At Softcoders we provide the absolute best web design, 
                software applications, and development solutions. We assist our clients with their business by offering the right 
                solutions to raise global business inquiries from the web.We focus on building long-term relationships with our clients
                through innovation, reliability, and continuous improvement.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="icon"><FaDollarSign /></div>
                  <h5>Reasonable Cost</h5>
                </div>
                <div className="feature-item">
                  <div className="icon"><FaCheckCircle /></div>
                  <h5>Quality Ensured</h5>
                </div>
                <div className="feature-item">
                  <div className="icon"><FaPalette /></div>
                  <h5>Responsive Design</h5>
                </div>
                <div className="feature-item">
                  <div className="icon"><FaHeadset /></div>
                  <h5>24X7 Support</h5>
                </div>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left">
              <img src={aboutus} alt="About Us" style={{ width: "400px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p className="subtitle">Our Awesome Services</p>
            <h2>Awesome Web & Software Designing Services For You</h2>
            <p>
              Softcoders is a Software and Web development company. We here at Softcoders, provide customized solutions 
              for many industries like Field delivery, Field Service, Security, Online Commerce, Hospitality, Real-estate, 
              Media Management, and many more.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><FaCode /></div>
              <h3>Web Development</h3>
              <p>Java App/Web Development, ASP.NET Development/SQL, Open Source Development, Internet Of Things, SAAS Applications</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><FaMobile /></div>
              <h3>Mobile App Development</h3>
              <p>Native & Hybrid App Development, iPhone & Android App Development, Enterprise Mobility Services</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><FaBullhorn /></div>
              <h3>Digital Marketing</h3>
              <p>Search Engine Optimization, Social Media Management, Online Reputation Management, Facebook Advertising</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><FaShoppingCart /></div>
              <h3>E-commerce Platform</h3>
              <p>Custom E-commerce Development, Extension/Plug-in and Module Development, Spree Commerce, Magento, Shopify</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} data-aos="fade-up">
            <Link to="/services" className="btn btn-primary">View More Services</Link>
          </div>
          
        </div>
      </section>
      {/* Reviews Section */}
<section className="reviews-section">
  <div className="container">

    <div className="reviews-title">
      <h2>What Clients Are Saying About Us</h2>
      <p>
        We've served more than 350+ clients globally in the last 8+ years
        and retained 95% of them.
      </p>
    </div>

    <div className="reviews-grid">
      {reviews.map((review) => (
        <div className="review-card" key={review.id}>

          <div className="quote-icon">❝</div>

          <div className="stars">
            {"⭐".repeat(review.rating)}
          </div>

          <p className="review-text">{review.review}</p>

          <div className="review-footer">
            <div>
              <h4>{review.name}</h4>
              <span>{review.company}</span>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
<AIFeatures/>

      {/* Why Choose Us Section */}
      <section className="section why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-image" data-aos="fade-right">
              <img src={whychooseus} alt="Why Choose Us" />
            </div>
            <div className="why-text" data-aos="fade-left">
              <h6 className="subtitle">Why Choose Us?</h6>
              <h2>Experience In The IT Industry</h2>
              <p>
                Our team consists of experienced professionals who are working passionately towards the goal of delivering 
                the best solutions. We are the partner you can count on for results-driven digital products and platforms. 
                We're consulting, designing, and developing your business for tomorrow's success today.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="icon"><FaCheckCircle /></div>
                  <h4>Years of Experience</h4>
                </div>
                <div className="stat-item">
                  <div className="icon"><FaPalette /></div>
                  <h4>Best Responsive Design</h4>
                </div>
                <div className="stat-item">
                  <div className="icon"><FaHeadset /></div>
                  <h4>Customer Satisfaction</h4>
                </div>
              </div>
              <div style={{ marginTop: '30px' }}>
                <Link to="/about" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};



export default Home;
