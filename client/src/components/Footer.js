import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jehovah Jireh Car Services</h3>
            <p>Professional car maintenance and repair services to keep your vehicle running smoothly. We provide quality service with years of experience.</p>
            <div className="social-links">
              <button type="button" className="social-link" aria-label="Facebook">📘</button>
              <button type="button" className="social-link" aria-label="Instagram">📷</button>
              <button type="button" className="social-link" aria-label="Twitter">🐦</button>
              <button type="button" className="social-link" aria-label="LinkedIn">💼</button>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>Brake Services</li>
              <li>Oil Change</li>
              <li>A/C Service</li>
              <li>Engine Repair</li>
              <li>Transmission</li>
              <li>Car Detailing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Auto Service Lane<br />
              Car City, CC 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@jehovahjirehservices.com</p>
            </div>
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Mon-Fri: 9:00 AM - 6:00 PM<br />
              Sat: 9:00 AM - 4:00 PM<br />
              Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Jehovah Jireh Car Services. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
