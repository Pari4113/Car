import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/images/garage.jpg" alt="Car garage" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jehovah Jireh Car Services</h1>
            <p className="hero-subtitle">
              Professional car maintenance and repair services to keep your vehicle running smoothly
            </p>
            <Link to="/book-now" className="btn hero-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Your trusted partner in automotive care since 2010</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Jehovah Jireh Car Services has been serving the community for over 14 years, providing 
                reliable and professional automotive maintenance and repair services. Our team of certified 
                technicians brings decades of combined experience to every job, ensuring your vehicle 
                receives the highest quality care.
              </p>
              <p>
                We believe in honest pricing, transparent communication, and exceptional customer service. 
                Whether you need routine maintenance, emergency repairs, or major overhauls, we treat 
                every vehicle as if it were our own. Our commitment to quality and customer satisfaction 
                has made us the preferred choice for car owners who value reliability and peace of mind.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">14+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We provide professional, reliable, and affordable car services with years of experience
          </p>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Expert Technicians</h3>
              <p>Our certified mechanics have years of experience working on all types of vehicles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>We offer fair and transparent pricing with no hidden fees or surprises.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Quick Service</h3>
              <p>Most services completed same day with minimal disruption to your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From routine maintenance to major repairs, we've got you covered
          </p>
          <div className="grid grid-4">
            <div className="service-preview">
              <div className="service-icon">🔧</div>
              <h4>Brake Services</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">🛢️</div>
              <h4>Oil Change</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">🌡️</div>
              <h4>Coolant Flush</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">❄️</div>
              <h4>A/C Service</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">🔧</div>
              <h4>Exhaust Repair</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">⚙️</div>
              <h4>Engine Swap</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">⚙️</div>
              <h4>Transmission</h4>
            </div>
            <div className="service-preview">
              <div className="service-icon">✨</div>
              <h4>Car Detailing</h4>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Service?</h2>
            <p>Schedule your appointment today and experience professional car care</p>
            <Link to="/book-now" className="btn">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

