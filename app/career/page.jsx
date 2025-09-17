"use client";
import { useState } from "react";
import Head from "next/head";
import Nav from "../home/component/Nav/page";
import {
  FaBriefcase,
  FaPlane,
  FaChartLine,
  FaAssistiveListeningSystems,
  FaFileAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUserTie,
  FaLaptopCode,
  FaRobot,
  FaHeadset,
  FaGlobe,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import Footer from "../home/footer/page";
import { FaEarthAmericas } from "react-icons/fa6";

import styles from "./Careers.module.css";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description:
        "We're looking for a skilled React/Next.js developer to build responsive web applications.",
      category: "tech",
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Data & AI Solutions",
      type: "Full-time",
      location: "Remote",
      description:
        "Help us develop cutting-edge AI solutions for our clients across various industries.",
      category: "tech",
    },
    {
      id: 3,
      title: "Travel Consultant",
      department: "Travel & Hotel Booking",
      type: "Full-time",
      location: "Remote",
      description:
        "Assist clients with their travel plans and provide excellent hotel booking services.",
      category: "travel",
    },
    {
      id: 4,
      title: "Virtual Assistant",
      department: "Virtual Assistant Services",
      type: "Contract",
      location: "Remote",
      description:
        "Provide administrative support to clients worldwide with attention to detail.",
      category: "va",
    },
    {
      id: 5,
      title: "Data Analyst",
      department: "Data & AI Solutions",
      type: "Full-time",
      location: "Remote",
      description:
        "Analyze complex data sets and provide insights to drive business decisions.",
      category: "data",
    },
    {
      id: 6,
      title: "UX/UI Designer",
      department: "Technology",
      type: "Contract",
      location: "Remote",
      description:
        "Create intuitive and beautiful user interfaces for our digital solutions.",
      category: "tech",
    },
  ];

  const filteredJobs =
    activeTab === "all"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  return (
    <>
      <Head>
        <title>Careers at Aroliya | Join Our Innovative Team</title>
        <meta
          name="description"
          content="Build your career with Aroliya. We offer opportunities in freelancing, e-commerce, AI solutions, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Aroliya</span>
            </div>
            <h1 className={styles.heroTitle}>Build Your Future With Aroliya</h1>
            <p className={styles.heroSubtitle}>
              Join our team of experts delivering innovative solutions across
              multiple industries worldwide
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <FaUsers className={styles.statIcon} />
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Team Members</span>
              </div>
              <div className={styles.statItem}>
                <FaProjectDiagram className={styles.statIcon} />
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statItem}>
                <FaEarthAmericas className={styles.statIcon} />
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Countries Served</span>
              </div>
            </div>
            <button className={styles.ctaButton}>
              View Open Positions <FaArrowRight />
            </button>
          </div>
          <div className={styles.heroVisual}>
            <div
              className={styles.floatingIcon}
              style={{ top: "20%", left: "10%" }}
            >
              <FaLaptopCode />
            </div>
            <div
              className={styles.floatingIcon}
              style={{ top: "60%", left: "80%" }}
            >
              <FaGlobe />
            </div>
            <div
              className={styles.floatingIcon}
              style={{ top: "30%", left: "70%" }}
            >
              <FaRobot />
            </div>
            <div
              className={styles.floatingIcon}
              style={{ top: "70%", left: "20%" }}
            >
              <FaHeadset />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions for the digital age
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaBriefcase />
                </div>
                <h3>Freelancing Solutions</h3>
                <p>
                  Connecting businesses with top-tier freelance talent across
                  various domains and specialties.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaPlane />
                </div>
                <h3>Travel & Hotel Booking</h3>
                <p>
                  Comprehensive e-commerce solutions for the travel and
                  hospitality industry with global reach.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaChartLine />
                </div>
                <h3>Data & AI Solutions</h3>
                <p>
                  Cutting-edge data analytics, machine learning, and artificial
                  intelligence services.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaAssistiveListeningSystems />
                </div>
                <h3>Virtual Assistant Services</h3>
                <p>
                  Efficient virtual assistance for businesses and professionals
                  to enhance productivity.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaFileAlt />
                </div>
                <h3>Online Form Filling</h3>
                <p>
                  Streamlined digital form solutions for various applications
                  and documentation needs.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FaFileAlt />
                </div>
                <h3>E-Commerce Solutions</h3>
                <p>
                  E-Commerce Solutions – Build secure, scalable online stores
                  with seamless shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className={styles.culture}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Culture</h2>
            <p className={styles.sectionSubtitle}>Why join the Aroliya team?</p>

            <div className={styles.cultureGrid}>
              <div className={styles.cultureItem}>
                <div className={styles.cultureIcon}>
                  <FaGlobe />
                </div>
                <h3>Remote First</h3>
                <p>
                  Work from anywhere in the world with our flexible remote work
                  policy.
                </p>
              </div>

              <div className={styles.cultureItem}>
                <div className={styles.cultureIcon}>
                  <FaUserTie />
                </div>
                <h3>Professional Growth</h3>
                <p>
                  Continuous learning opportunities and career advancement
                  paths.
                </p>
              </div>

              <div className={styles.cultureItem}>
                <div className={styles.cultureIcon}>
                  <FaChartLine />
                </div>
                <h3>Impactful Work</h3>
                <p>
                  Work on projects that make a real difference for clients
                  across industries.
                </p>
              </div>

              <div className={styles.cultureItem}>
                <div className={styles.cultureIcon}>
                  <FaHeadset />
                </div>
                <h3>Collaborative Environment</h3>
                <p>
                  Join a supportive team that values collaboration and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section id="opportunities" className={styles.opportunities}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Career Opportunities</h2>
            <p className={styles.sectionSubtitle}>
              Join our dynamic team and grow with us
            </p>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "all" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("all")}
              >
                All Positions
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "tech" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("tech")}
              >
                Technology
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "data" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("data")}
              >
                Data & AI
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "travel" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("travel")}
              >
                Travel
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "va" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("va")}
              >
                Virtual Assistance
              </button>
            </div>

            <div className={styles.jobsGrid}>
              {filteredJobs.map((job) => (
                <div key={job.id} className={styles.jobCard}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobDept}>{job.department}</span>
                    <span className={styles.jobType}>{job.type}</span>
                  </div>
                  <p>{job.description}</p>
                  <div className={styles.jobLocation}>
                    <FaMapMarkerAlt />
                    <sapn>{job.location}</sapn>
                  </div>
                  <button className={styles.applyBtn}>
                    Apply Now <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </main>

      <Footer />
    </>
  );
}
