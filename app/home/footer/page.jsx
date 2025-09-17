import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <h3 className={styles.logo}>Aroliya</h3>
            <p className={styles.description}>
              Providing exceptional services and solutions to businesses
              worldwide. We help you achieve your goals with innovation and
              excellence.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <FaFacebookF size={16} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <FaTwitter size={16} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.link}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className={styles.link}>
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              <li>
                <Link
                  href="/services/virtual-assistant"
                  className={styles.link}
                >
                  Virtual Assistant
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className={styles.link}>
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/travel-booking" className={styles.link}>
                  Travel Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-visualization"
                  className={styles.link}
                >
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link href="/services/machine-learning" className={styles.link}>
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className={styles.link}>
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>

            <div className={styles.contactItem}>
              <FaPhone size={16} className={styles.contactIcon} />
              <a href="tel:+919870519002" className={styles.contactLink}>
                +91 9870519002
              </a>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope size={16} className={styles.contactIcon} />
              <a href="mailto:info@aroliya.com" className={styles.contactLink}>
                info@aroliya.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Aroliya. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms-of-service" className={styles.legalLink}>
              Terms of Service
            </Link>
            <span className={styles.separator}>|</span>
            <Link href="/cookie-policy" className={styles.legalLink}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
