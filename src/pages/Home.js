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
import aboutus from "../assets/images/aboutusimg.avif";
import whychooseus from "../assets/images/whychoosepic.avif";
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

{/* ABOUT SECTION */}

<section className="about-section">

<div className="container about-wrapper">

{/* LEFT CONTENT */}

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

<div className="highlight-item" data-aos="fade-up" data-aos-delay="100">
<FaCheckCircle className="highlight-icon"/>
<span>Modern Technologies</span>
</div>

<div className="highlight-item" data-aos="fade-up" data-aos-delay="200">
<FaPalette className="highlight-icon"/>
<span>Clean UI / UX Design</span>
</div>

<div className="highlight-item" data-aos="fade-up" data-aos-delay="300">
<FaDollarSign className="highlight-icon"/>
<span>Affordable Development</span>
</div>

<div className="highlight-item" data-aos="fade-up" data-aos-delay="400">
<FaHeadset className="highlight-icon"/>
<span>24/7 Client Support</span>
</div>

</div>

</div>


{/* RIGHT IMAGE */}

<div className="about-image" data-aos="fade-left">

<img src={aboutus} alt="Client Meeting"/>

</div>

</div>

</section>

      {/* Services Section */}
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
    {reviews.map((review, index) => (
      <div className="review-card" key={review.id} data-aos="fade-up" data-aos-delay={index * 120}>
        
        <div className="review-top">
          <div className="review-stars">
            {"★".repeat(review.rating)}
          </div>
        </div>

        <p className="review-text">{review.review}</p>

        <div className="review-user">
          <div className="review-avatar">
            {review.name.charAt(0)}
          </div>

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

    </div>
    
  );
};



export default Home;
