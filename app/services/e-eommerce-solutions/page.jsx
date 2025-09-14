"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaMobile,
  FaChartLine,
  FaShieldAlt,
  FaCog,
  FaHeadset,
  FaRocket,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaTruck,
  FaGlobe,
  FaUsers,
  FaMoneyBillAlt,
  FaHandsHelping,
} from "react-icons/fa";
import Footer from "@/app/home/footer/page";
import AOS from "aos";
import "aos/dist/aos.css";
import tick from "../../../public/icons/Mark-Tick.png";
import styles from "./EcommerceSolutions.module.css";
import Nav from "@/app/home/component/Nav/page";
import ecomarce from "../../../public/icons/ecommerce.gif";
import Image from "next/image";

const EcommerceSolutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      icon: <FaMobile />,
      title: "Mobile Commerce",
      desc: "Optimized shopping experience for mobile users with responsive design and blazing speed.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      desc: "Get deep insights into customer behavior and marketing ROI with advanced analytics.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payments",
      desc: "PCI-compliant, fraud-protected payment gateways for safe transactions worldwide.",
    },
    {
      icon: <FaCog />,
      title: "Customization",
      desc: "Flexible themes, layouts, and store functionality tailored for your brand.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated experts ready to assist you anytime, anywhere in the world.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Deployment",
      desc: "Get your online store live quickly with easy setup and reliable onboarding.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹500/mo",
      features: [
        { text: "Unlimited Products & Categories", included: false },
        { text: "Secure SSL Certificate", included: true },
        { text: "Basic Customer Support (Email Only)", included: true },
        { text: "1 Admin Account Access", included: true },
        { text: "Pre-built Themes", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "Basic SEO Tools", included: true },
        { text: "Abandoned Cart Recovery", included: false },
        { text: "Multi-Currency & Multi-Language Support", included: false },
        { text: "Inventory & Order Management", included: true },
        { text: "Automatic Backups", included: false },
      ],
      button: "Get Started",
      primary: false,
    },
    {
      name: "Business",
      price: "₹1,102/mo",
      features: [
        { text: "Unlimited Products & Categories", included: true },
        { text: "Secure SSL Certificate", included: true },
        { text: "Priority Support (Email & Chat)", included: true },
        { text: "Premium Store Themes", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "Advanced SEO Tools", included: true },
        { text: "Abandoned Cart Recovery", included: true },
        { text: "Up to 3 Admin Accounts", included: true },
        { text: "Multi-Currency & Multi-Language Support", included: false },
        { text: "Inventory & Order Management", included: false },
        { text: "Automatic Backups (Daily)", included: false },
      ],
      button: "Get Started",
      primary: true,
    },
    {
      name: "Enterprise",
      price: "₹2,300/mo",
      features: [
        { text: "Unlimited Products & Categories", included: true },
        { text: "Secure SSL Certificate", included: true },
        { text: "24/7 Dedicated Support", included: true },
        { text: "20+ Admin Accounts", included: true },
        { text: "Custom Themes & White-label", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "Advanced SEO & Marketing Tools", included: true },
        { text: "Abandoned Cart Recovery", included: true },
        { text: "Multi-Currency & Multi-Language Support", included: true },
        { text: "Inventory & Order Management", included: true },
        { text: "Automatic Backups (Hourly)", included: true },
      ],
      button: "Get Started",
      primary: false,
    },
  ];

  const testimonials = [
    {
      text: "“Our sales grew 40% within 3 months after adopting their platform.”",
      author: "Sarah Johnson – Fashion Boutique",
    },
    {
      text: "“The analytics helped us understand our customers better and scale fast.”",
      author: "Michael Chen – Tech Gadgets",
    },
    {
      text: "“Fantastic support and user-friendly tools. Highly recommend this team!”",
      author: "Emily Rodriguez – Home Decor",
    },
  ];

  const benefits = [
    {
      icon: <FaHandsHelping />,
      title: "End-to-End Support",
      description:
        "From product listing to customer care, we handle everything for your e-commerce business.",
    },
    {
      icon: <FaGlobe />,
      title: "Multi-Platform Expertise",
      description:
        "Amazon, Flipkart, Shopify, WooCommerce & more - we know all the major platforms inside out.",
    },
    {
      icon: <FaRocket />,
      title: "Scalable Solutions",
      description:
        "Our services grow with your business, suitable for startups, SMEs, and enterprises.",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Cost-Effective Plans",
      description:
        "Affordable packages without compromising quality, with transparent pricing.",
    },
    {
      icon: <FaUsers />,
      title: "Dedicated Team",
      description:
        "Experienced e-commerce professionals at your service, committed to your success.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description:
        "Robust security measures and reliable infrastructure to keep your store running smoothly.",
    },
  ];

  return (
    <>
      <Head>
        <title>E-commerce Solutions | Grow Your Business</title>
        <meta
          name="description"
          content="High-quality e-commerce solutions with professional features, secure payments, expert support, and flexible pricing."
        />
      </Head>
      <Nav />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container} data-aos="fade-up">
          <div className={styles.heroText}>
            <h1>E-Commerce Solutions by Aroliya</h1>
            <p>
              Aroliya delivers end-to-end E‑Commerce Solutions to build, manage,
              and scale online stores—covering catalog, orders, support, and
              marketing.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary}>Start Now</button>
              <button className={styles.btnOutline}>View Demo</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src={ecomarce} alt="E-commerce solutions" />
          </div>
        </div>
      </section>

      {/* Benefits Section - Professional Card Design */}
      <section className={styles.benefits}>
        <div className={styles.sectionHead}>
          <h2>Why Choose Aroliya for Your E-Commerce Business?</h2>
          <p>
            We provide comprehensive solutions that drive growth and success for
            your online store
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={styles.benefitCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.sectionHead}>
          <h2>Platform Features</h2>
          <p>
            Comprehensive tools to manage, grow, and secure your online store.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((f, index) => (
            <div key={index} data-aos="zoom-in" className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.sectionHead}>
          <h2>Pricing Plans</h2>
          <p>Flexible packages designed for every stage of your business.</p>
        </div>
        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <div
              data-aos="zoom-out-up"
              key={index}
              className={`${styles.priceCard} ${
                plan.primary ? styles.recommended : ""
              }`}
            >
              <h3>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>
              <button
                className={
                  plan.primary ? styles.btnPrimary : styles.btnSecondary
                }
              >
                {plan.button}
              </button>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature.included ? (
                      <Image src={tick} alt="Included" />
                    ) : (
                      <span className={styles.crossIcon}>✖</span>
                    )}
                    <p> {feature.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHead}>
          <h2>What Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.testimonial}>
              <p>{t.text}</p>
              <h4>{t.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent} data-aos="fade-up">
          <h2>📞 Get Started with Aroliya's E-Commerce Solutions</h2>
          <p>
            Don't let e-commerce management slow you down. Focus on growing your
            brand while we handle the back-end operations.
          </p>
          <p>
            <strong>Ready to scale your online business?</strong>
          </p>
          <button className={styles.ctaButton}>
            Contact Us Now for a free consultation
          </button>
          <p className={styles.ctaSubtext}>
            We'll create a custom package tailored to your needs.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EcommerceSolutions;
