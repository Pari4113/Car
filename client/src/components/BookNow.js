import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookNow.css';

const BookNow = () => {
  const [services, setServices] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, timeSlotsResponse] = await Promise.all([
          axios.get('/api/services'),
          axios.get('/api/time-slots')
        ]);
        setServices(servicesResponse.data);
        setTimeSlots(timeSlotsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post('/api/book-appointment', formData);
      setMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } catch (error) {
      setMessage('Error booking appointment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="book-now-page">
        <div className="container">
          <div className="loading">Loading booking form...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-now-page">
      <div className="booking-hero">
        <div className="container">
          <h1 className="booking-title">Book Your Appointment</h1>
          <p className="booking-subtitle">
            Schedule your car service appointment with our professional team
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-form-container">
              <h2>Appointment Details</h2>
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="carModel" className="form-label">Car Model & Year *</label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., 2020 Toyota Camry"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="serviceType" className="form-label">Service Type *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime" className="form-label">Preferred Time *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Please describe any specific issues or concerns with your vehicle. If you selected 'Other' as service type, please provide detailed description of your issue here..."
                    rows="4"
                  ></textarea>
                </div>

                {message && (
                  <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
                    {message}
                  </div>
                )}

                <button type="submit" className="btn submit-btn" disabled={submitting}>
                  {submitting ? 'Booking Appointment...' : 'Book Appointment'}
                </button>
              </form>
            </div>

            <div className="booking-info">
              <h3>Booking Information</h3>
              <div className="info-item">
                <div className="info-icon">📅</div>
                <div>
                  <h4>Appointment Scheduling</h4>
                  <p>We offer flexible scheduling with same-day appointments available for urgent services.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">⏰</div>
                <div>
                  <h4>Service Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Contact Information</h4>
                  <p>Phone: (555) 123-4567<br />
                  Email: info@jehovahjirehservices.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;


