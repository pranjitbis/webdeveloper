"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./ServiceDetail.module.css";
import Nav from "../../home/component/Nav/page";
import Footer from "../../home/footer/page";
import Expert from "../../../public/icons/ExpertIcons.png";
import shild from "../../../public/icons/shild.png";
import saveTime from "../../../public/icons/save-time.png";
import HeroImage from "../../../public/icons/wmremove.gif";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
const ServiceDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "",
    specificService: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    // Scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.fadeInUp}`);
      elements.forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.85) {
          el.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceCategory: "",
        specificService: "",
        message: "",
      });
    }, 3000);
  };

  const serviceCategories = [
    {
      id: "government-exams",
      title: "Government Exam & Job Applications",
      services: [
        "SSC (CGL, CHSL, GD, MTS, etc.)",
        "UPSC (IAS, IPS, etc.)",
        "State PSC exams (MPPSC, UPPSC, etc.)",
        "Railway Recruitment (RRB NTPC, Group D, etc.)",
        "Banking exams (IBPS, SBI, RBI)",
        "Defense (Army, Navy, Air Force Agniveer)",
        "Police recruitment",
      ],
    },
    {
      id: "education",
      title: "Education & Admission Forms",
      services: [
        "College admission forms (Delhi University, Mumbai University, etc.)",
        "Entrance exams (JEE, NEET, CLAT, CAT, GATE, etc.)",
        "Scholarship forms (National Scholarship Portal, state-level scholarships)",
        "IGNOU / NIOS admission & exam forms",
      ],
    },
    {
      id: "government-schemes",
      title: "Government Schemes & Services",
      services: [
        "Aadhaar update / correction requests",
        "PAN card application",
        "Voter ID registration / correction",
        "Passport application",
        "Ration card application",
        "PM Kisan Samman Nidhi Yojana",
        "Ayushman Bharat (PMJAY) health card",
        "E-Shram card registration",
        "State-specific schemes (e.g., Ladli Laxmi, Kanyadan, etc.)",
      ],
    },
    {
      id: "banking",
      title: "Banking & Financial Forms",
      services: [
        "Opening online bank accounts (SBI, HDFC, etc.)",
        "Loan applications (education, housing, personal loan forms)",
        "Insurance applications (LIC, Health, Vehicle insurance renewal)",
        "Mutual fund / Demat account opening",
      ],
    },
    {
      id: "travel",
      title: "Travel & Other Services",
      services: [
        "Visa application forms",
        "IRCTC ticket booking registration",
        "Travel insurance forms",
        "Hotel/airline membership forms",
      ],
    },
    {
      id: "business",
      title: "Business & Startup Registrations",
      services: [
        "GST registration",
        "MSME / Udyam registration",
        "FSSAI food license application",
        "Trademark registration support",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Nav />

      <Head>
        <title>Form Filling Services | Professional Assistance</title>
        <meta
          name="description"
          content="Professional form filling services for government exams, schemes, education forms, and more. Get expert assistance with all your application needs."
        />
      </Head>

      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.title} ${styles.fadeInUp}`}>
              Professional Form Filling Services
            </h1>

            <p className={`${styles.description} ${styles.fadeInUp}`}>
              Expert assistance with government forms, exam applications, and
              official documentation. Save time and avoid errors with our
              professional services.
            </p>
            <button className={`${styles.ctaButton} ${styles.fadeInUp}`}>
              Get Started Today
            </button>
          </div>

          <div className={styles.placeholderImage} data-aos="fade-left">
            <Image src={HeroImage} alt="err" />
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.servicesOverview}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
            Our Form Filling Services
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeInUp}`}>
            We provide expert assistance with a wide range of government and
            official forms
          </p>

          <div className={styles.categoriesContainer}>
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                className={`${styles.categoryCard} ${styles.fadeInUp} ${
                  index === activeCategory ? styles.activeCategory : ""
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <h3>{category.title}</h3>
                <div className={styles.servicesCount}>
                  {category.services.length} services
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Details */}
        <section className={styles.servicesDetail}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
            {serviceCategories[activeCategory].title}
          </h2>

          <div className={styles.servicesList}>
            {serviceCategories[activeCategory].services.map(
              (service, index) => (
                <div
                  key={index}
                  className={`${styles.serviceItem} ${styles.fadeInUp}`}
                >
                  <div className={styles.serviceIcon}>✓</div>
                  <div className={styles.serviceText}>{service}</div>
                </div>
              )
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.process}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
            How Our Service Works
          </h2>

          <div className={styles.processSteps}>
            <div className={`${styles.processStep} ${styles.fadeInUp}`}>
              <div className={styles.stepNumber}>1</div>
              <h4>Select Service</h4>
              <p>Choose from our wide range of form filling services</p>
            </div>

            <div className={`${styles.processStep} ${styles.fadeInUp}`}>
              <div className={styles.stepNumber}>2</div>
              <h4>Provide Details</h4>
              <p>Share your information and documents securely</p>
            </div>

            <div className={`${styles.processStep} ${styles.fadeInUp}`}>
              <div className={styles.stepNumber}>3</div>
              <h4>Expert Assistance</h4>
              <p>Our professionals handle the form filling process</p>
            </div>

            <div className={`${styles.processStep} ${styles.fadeInUp}`}>
              <div className={styles.stepNumber}>4</div>
              <h4>Review & Submit</h4>
              <p>You review and submit the completed forms</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
            Why Choose Our Services
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={`${styles.benefitCard} ${styles.fadeInUp}`}>
              <div className={styles.benefitIcon}>
                <Image src={saveTime} alt="err" />
              </div>
              <h4>Save Time</h4>
              <p>
                Avoid spending hours figuring out complex forms and procedures
              </p>
            </div>

            <div className={`${styles.benefitCard} ${styles.fadeInUp}`}>
              <div className={styles.benefitIcon}>
                <Image src={shild} alt="err" />
              </div>
              <h4>Secure</h4>
              <p>
                Your personal information is handled with utmost confidentiality
              </p>
            </div>

            <div className={`${styles.benefitCard} ${styles.fadeInUp}`}>
              <div className={styles.benefitIcon}>
                <Image src={Expert} alt="err" />
              </div>
              <h4>Expert Guidance</h4>
              <p>
                Get advice from professionals who understand the requirements
              </p>
            </div>
          </div>
        </section>
        <section className={styles.contactFormSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2 className={styles.sectionTitle}>
                Get Professional Assistance
              </h2>
              <p>
                Fill out the form below and we'll help you with your form
                filling needs
              </p>
            </div>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>
                  Your inquiry has been received. We'll contact you shortly to
                  assist with your form filling needs.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="serviceCategory">Service Category *</label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category</option>
                      {serviceCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="specificService">
                    Specific Service Needed *
                  </label>
                  <select
                    id="specificService"
                    name="specificService"
                    value={formData.specificService}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {formData.serviceCategory &&
                      serviceCategories
                        .find((cat) => cat.id === formData.serviceCategory)
                        ?.services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional information about your requirements"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Get Assistance Now
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
