import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaChevronRight 
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919254147455'; // WhatsApp number without + and spaces
    const message = `Newsletter Subscription Request\nEmail: ${email}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>
              <FaMapMarkerAlt />Sector 15, Noida 201301 (U.P.)
            </p>
            <p>
              <FaPhone />
              +91-8295000455<br />
              
            </p>
            <p>
              <FaEnvelope /> Info@softcoders.in
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><FaChevronRight /> Home</Link></li>
              <li><Link to="/about"><FaChevronRight /> About Us</Link></li>
              <li><Link to="/services"><FaChevronRight /> Our Services</Link></li>
              <li><Link to="/portfolio"><FaChevronRight /> Our Projects</Link></li>
              <li><Link to="/contact"><FaChevronRight /> Contact Us</Link></li>
              <li><Link to="/career"><FaChevronRight /> Career</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services"><FaChevronRight /> Web Design & Development</Link></li>
              <li><Link to="/services"><FaChevronRight /> Mobile App Development</Link></li>
              <li><Link to="/services"><FaChevronRight /> Digital Marketing</Link></li>
              <li><Link to="/services"><FaChevronRight /> Logo Designing</Link></li>
              <li><Link to="/services"><FaChevronRight /> E-commerce Solutions</Link></li>
              <li><Link to="/services"><FaChevronRight /> Desktop Software</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for latest updates and offers.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2021-2026 SoftCoders. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
