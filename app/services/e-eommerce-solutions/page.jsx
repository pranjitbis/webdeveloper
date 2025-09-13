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
} from "react-icons/fa";
import Footer from "@/app/home/footer/page";
import AOS from "aos";
import "aos/dist/aos.css";
import tick from "../../../public/icons/Mark-Tick.png";
import styles from "./EcommerceSolutions.module.css";
import Nav from "@/app/home/component/Nav/page";
import ecomarce from "../../../public/icons/ecommerce.gif"
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

  const experts = [
    {
      img: "/images/expert1.jpg",
      icon: <FaLightbulb />,
      name: "Priya Sharma",
      role: "E-commerce Strategist",
    },
    {
      img: "/images/expert2.jpg",
      icon: <FaPencilRuler />,
      name: "Rahul Verma",
      role: "UI/UX Designer",
    },
    {
      img: "/images/expert3.jpg",
      icon: <FaCode />,
      name: "Ananya Patel",
      role: "Full Stack Developer",
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
            <h1>Transform Your Online Business</h1>
            <p>
              Powerful, scalable, and user-friendly e-commerce solutions trusted
              by businesses worldwide.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary}>Start Free Trial</button>
              <button className={styles.btnOutline}>View Demo</button>
            </div>
          </div>
          <div className={styles.heroImage}>
           <Image src={ecomarce} alt="ss"/>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.sectionHead}>
          <h2>Why Choose Us?</h2>
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
                    <Image src={tick} alt="err"/>
                    ) : (
                      <span className={styles.crossIcon}>✖</span>
                    )}
                    {feature.text}
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
      <Footer />
    </>
  );
};

export default EcommerceSolutions;
