import Link from "next/link";
import styles from "styles/Footer.module.css";
import quickLinks_1 from "Data/quickLinks_1.json";
import quickLinks_2 from "Data/quickLinks_2.json";
import quickLinks_3 from "Data/quickLinks_3.json";
import quickLinks_4 from "Data/quickLinks_4.json";
import ContactUs from "components/ContactUs";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <ContactUs />
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Company Info Section */}
          <div className={styles.footerSection}>
            <div className={styles.companyInfo}>
              <div className={styles.logo}>
                <h2>GSTSeva</h2>
                <p className={styles.tagline}>Your Trusted Business Partner</p>
              </div>
              <p className={styles.description}>
                Empowering businesses with comprehensive GST, taxation, and compliance services since 2015.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <span>F-30, C2/27 Amrapali Dream Valley Villas, Tech Zone 4, Greater Noida West, 201306</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <a href="tel:+919999310415">+91 99993 10415</a>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <a href="tel:+911143108573">+91 114 310 8573</a>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <a href="mailto:gstseva@gmail.com">gstseva@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                  <FaWhatsapp className={styles.icon} />
                  <a href="https://wa.me/919999310415">WhatsApp Support</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Start New Business</h3>
            <ul className={styles.linkList}>
              {quickLinks_1.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Registration Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Government Registration</h3>
            <ul className={styles.linkList}>
              {quickLinks_2.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IPR Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Intellectual Property Rights</h3>
            <ul className={styles.linkList}>
              {quickLinks_3.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tax & Compliance Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Tax & Compliance</h3>
            <ul className={styles.linkList}>
              {quickLinks_4.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContainer}>
            <div className={styles.copyright}>
              <p>&copy; 2024 GSTSeva. All rights reserved.</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
