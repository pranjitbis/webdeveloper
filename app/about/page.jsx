"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.css";
import Nav from "../home/component/Nav/page";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../home/footer/page";
import about from "../../public/about/sir-image.png";
import team from "../../public/about/team-image.jpg";
import Image from "next/image";
import {
  FaClock,
  FaMoneyBillWave,
  FaRegSmile,
  FaHandsHelping,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: false, // false = re-trigger animation on scroll up/down
    });
  }, []);

  const benefits = [
    {
      icon: <FaClock />,
      title: "Save Time",
      desc: "Automated workflows reduce manual work so you can focus on growth.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cost Effective",
      desc: "Affordable solutions designed to fit small businesses and startups.",
    },
    {
      icon: <FaRegSmile />,
      title: "Stress-Free",
      desc: "Easy-to-use tools that make business management simple and smooth.",
    },
    {
      icon: <FaHandsHelping />,
      title: "24/7 Support",
      desc: "Dedicated support team available around the clock for your needs.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security ensures your data stays protected.",
    },
    {
      icon: <FaRocket />,
      title: "Boost Productivity",
      desc: "Streamlined processes help your team achieve more in less time.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Insights",
      desc: "Real-time analytics help you make smarter business decisions.",
    },
    {
      icon: <FaUsers />,
      title: "Scalable",
      desc: "Our solutions grow with your business—no limitations, no stress.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Proven Results",
      desc: "Trusted by clients worldwide with measurable success stories.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      desc: "Expand your business and connect with customers everywhere.",
    },
  ];

  return (
    <div>
      <Nav />
      <div
        className={`${styles.aboutContainer} ${
          isVisible ? styles.visible : ""
        }`}
      >
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div data-aos="zoom-in-up" className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Aroliya</h1>
            <p className={styles.heroSubtitle}>
              Empowering businesses and individuals through innovative digital
              solutions
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitleCenter} data-aos="fade-down">
              About the Founder
            </h2>
            <div className={styles.founderGrid}>
              <div className={styles.founderContent} data-aos="fade-left">
                <h3 className={styles.founderName}>Neeraj Baghel</h3>
                <p className={styles.founderTitle}>Founder & CEO of Aroliya</p>
                <div className={styles.founderDescription}>
                  <p>
                    Neeraj Baghel, the Founder of Aroliya, is passionate about
                    using technology to solve real-world problems. With a
                    background in data science, artificial intelligence, and
                    digital innovation, Neeraj has been recognized for his
                    performance and creativity in professional roles. His vision
                    for Aroliya is not just about offering services—it's about
                    building a platform where businesses find solutions and
                    freelancers find opportunities. Neeraj's leadership combines
                    innovation, dedication, and strategic thinking, making
                    Aroliya a brand that stands for reliability and growth. His
                    belief is simple:
                    <em>
                      "Work should be smarter, not harder—and technology should
                      make life easier for everyone."
                    </em>
                  </p>
                </div>
              </div>
              <div className={styles.founderImageWrapper}>
                <div
                  className={styles.founderPlaceholder}
                  data-aos="fade-right"
                >
                  <Image src={about} alt="err" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div data-aos="fade-right" className={styles.content}>
              <h2 className={styles.sectionTitle}>About Aroliya</h2>

              <div className={styles.textContent}>
                <p>
                  A trusted digital solutions platform built on the vision of
                  simplifying work and empowering people. Founded by Neeraj
                  Baghel, Aroliya was created with a single goal in mind – to
                  make technology accessible, efficient, and meaningful for
                  businesses and individuals alike.
                </p>
                <p>
                  At Aroliya, we believe that the future belongs to those who
                  can harness the power of innovation and collaboration. Our
                  journey started with the idea of creating a platform that not
                  only delivers high-quality digital solutions but also builds a
                  strong community of freelancers, clients, and businesses
                  working together for growth.
                </p>
                <p>
                  We are driven by values of trust, transparency, and
                  excellence, ensuring that every service we provide adds
                  measurable value to our clients' lives and businesses. With a
                  focus on professionalism and reliability, Aroliya has been
                  growing steadily as a name that people can depend on for their
                  diverse digital needs.
                </p>
              </div>
              <div className={styles.imageWrapper} data-aos="fade-left">
                <div className={styles.placeholderImage}>
                  <Image src={team} alt="cc" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.accentSection}`}>
          <div className={styles.container}>
            <div className={styles.visionMissionGrid} data-aos="fade-up">
              <div className={styles.visionCard}>
                <div className={styles.cardIcon}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="#4facfe"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 5C7.58172 5 4 8.00161 4 12C4 15.9984 7.58172 19 12 19C16.4183 19 20 15.9984 20 12C20 8.00161 16.4183 5 12 5Z"
                      stroke="#4facfe"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 2V4"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 20V22"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 12H2"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 12H20"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a global leader in providing innovative, reliable,
                  and cost-effective digital solutions that empower individuals,
                  freelancers, and organizations to achieve their goals.
                </p>
              </div>

              <div className={styles.missionCard}>
                <div className={styles.cardIcon}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="#00f2fe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22V12H15V22"
                      stroke="#00f2fe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To create opportunities, simplify challenges, and bridge the
                  gap between businesses and digital transformation by offering
                  services that are efficient, impactful, and future-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={`${styles.section} ${styles.valuesSection}`}>
          <div className={styles.container} data-aos="fade-right">
            <h2 className={styles.sectionTitleCenter}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Trust</h3>
                <p>
                  Building reliable relationships with our clients and community
                  through transparency and integrity.
                </p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="#00f2fe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  Continuously evolving our solutions to stay ahead in the
                  rapidly changing digital landscape.
                </p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="#00f2fe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="#00f2fe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Collaboration</h3>
                <p>
                  Fostering a community where freelancers and businesses work
                  together for mutual growth.
                </p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15L12 18M12 21L12 18M12 18L15 15M12 18L9 21M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                      stroke="#4facfe"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>
                  Striving for the highest quality in every service we provide
                  and every interaction we have.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <div className={styles.sectionHead}>
            <h2>Why Choose Aroliya?</h2>
            <p>
              Using our platform means saving time, reducing costs, and focusing
              on what really matters—growing your business.
            </p>
          </div>

          <div className={styles.grids} data-aos="fade-up">
            {benefits.map((b, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
