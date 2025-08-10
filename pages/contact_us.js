import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/Contact.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const services = [
    "GST Registration",
    "Company Registration",
    "Trademark Registration",
    "Income Tax Filing",
    "Import Export Code",
    "FSSAI Registration",
    "ISO Certification",
    "Other Services"
  ];

  return (
    <Layout header footer notification>
      <div className={styles.contactContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              Ready to start your business journey? We&apos;re here to help you every step of the way.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <i className="fas fa-rocket"></i>
              <span>Fast & Reliable</span>
            </div>
            <div className={styles.floatingCard}>
              <i className="fas fa-shield-alt"></i>
              <span>100% Secure</span>
            </div>
            <div className={styles.floatingCard}>
              <i className="fas fa-clock"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className={styles.inputField}
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 99999 99999"
                      className={styles.inputField}
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={styles.selectField}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements..."
                    rows="5"
                    className={styles.textareaField}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <h3>Contact Information</h3>
                  <p>Multiple ways to reach us</p>
                </div>

                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}>
                    <div className={styles.iconWrapper}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className={styles.methodDetails}>
                      <h4>Phone Support</h4>
                      <p>Available 9 AM - 6 PM</p>
                      <a href="tel:+919999310415" className={styles.contactLink}>
                        +91 99993 10415
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.iconWrapper}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.methodDetails}>
                      <h4>Email Support</h4>
                      <p>Response within 2 hours</p>
                      <a href="mailto:taxmainder@gmail.com" className={styles.contactLink}>
                        taxmainder@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.iconWrapper}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className={styles.methodDetails}>
                      <h4>WhatsApp</h4>
                      <p>Instant messaging support</p>
                      <a href="https://wa.me/919999310415" className={styles.contactLink}>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.iconWrapper}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.methodDetails}>
                      <h4>Office Address</h4>
                      <p>Visit us for consultation</p>
                      <span className={styles.address}>
                        Delhi, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className={styles.businessHours}>
                  <h4>Business Hours</h4>
                  <div className={styles.hoursGrid}>
                    <div className={styles.day}>
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className={styles.day}>
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className={styles.day}>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className={styles.trustSection}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <i className="fas fa-users"></i>
              <h3>5000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.trustItem}>
              <i className="fas fa-award"></i>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.trustItem}>
              <i className="fas fa-clock"></i>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className={styles.trustItem}>
              <i className="fas fa-shield-alt"></i>
              <h3>100%</h3>
              <p>Secure & Confidential</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
