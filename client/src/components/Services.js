import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Professional car maintenance and repair services to keep your vehicle running smoothly
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="services-cta">
            <h2>Ready to Schedule Your Service?</h2>
            <p>Contact us today to book your appointment and get your vehicle back on the road</p>
            <div className="cta-buttons">
              <a href="/book-now" className="btn">Book Appointment</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


