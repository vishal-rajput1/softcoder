import React, { useEffect, useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  // FaClock
} from 'react-icons/fa';

import Hero from "../pages/Hero";
import heroimg from "../assets/images/herobg.jpg";


const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '9254147455';

    const message = `Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">

      {/* LOCAL CSS (Same style as Career page) */}
      <style>{`

      .contact-wrapper{
      display:grid;
      grid-template-columns:1fr 1.3fr;
      gap:50px;
      margin-top:40px;
      }

      .contact-card{
      background:#fff;
      padding:30px;
      border-radius:16px;
      box-shadow:0 15px 35px rgba(0,0,0,0.08);
      transition:0.3s;
      }

      .contact-card:hover{
      transform:translateY(-4px);
      }

      .contact-item{
      display:flex;
      gap:15px;
      margin-bottom:20px;
      }

      .contact-item .icon{
      font-size:20px;
      color:var(--primary-color);
      }

      .contact-form-box{
      background:#fff;
      padding:40px;
      border-radius:18px;
      box-shadow:0 20px 45px rgba(0,0,0,0.08);
      }

      /* SAME FORM STYLE AS CAREER */

      .form-group{
      display:flex;
      flex-direction:column;
      gap:6px;
      margin-bottom:16px;
      }

      .form-group label{
      font-weight:500;
      }

      .form-group input,
      .form-group textarea,
      .form-group select{
      padding:12px 14px;
      border-radius:8px;
      border:1px solid #d1d5db;
      font-size:14px;
      transition:0.2s;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus{
      outline:none;
      border-color:var(--primary-color);
      box-shadow:0 0 0 3px rgba(79,70,229,0.1);
      }

      @media(max-width:900px){
      .contact-wrapper{
      grid-template-columns:1fr;
      }
      }

      .whatsapp-btn{
background:#25D366;
color:white;
border:none;
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 22px;
border-radius:30px;
font-weight:600;
transition:0.3s;
}

.whatsapp-btn:hover{
background:#1ebe5d;
transform:translateY(-2px);
box-shadow:0 8px 18px rgba(0,0,0,0.15);
}

      `}</style>


      {/* HERO */}

{/*       <section className="hero" style={{ minHeight: '50vh', paddingTop: '140px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Contact Us</h1>
            <p>Get in touch with us for any inquiries or project discussions</p>
          </div>
        </div>
      </section> */}

<Hero
  title="Contact Us"
  subtitle="Get in touch with us for any inquiries or project discussions."
  image={heroimg}
  initial={{ scale: 1.1 }}
animate={{ scale: 1 }}

/>

      {/* CONTACT SECTION */}

      <section className="section">
        <div className="container">

          <div className="contact-wrapper">

            {/* CONTACT INFO */}

            <div className="contact-card">

              <h3 style={{ marginBottom: "25px" }}>Get In Touch</h3>

              <div className="contact-item">
                <div className="icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Office</h4>
                  <p>Sector 15, Noida 201301 (U.P.)<br/>India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><FaPhone /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+918295000455">+91-8295000455</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:Info@softcoders.in">Info@softcoders.in</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><FaWhatsapp /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/919254147455" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

            </div>


            {/* CONTACT FORM */}

            <div className="contact-form-box">

              <h3 style={{ marginBottom: '25px' }}>Send Us a Message</h3>

              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Your Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Your Phone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn whatsapp-btn">
                  <FaWhatsapp /> Send Message via WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;