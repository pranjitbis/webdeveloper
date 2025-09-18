"use client";
import { useState } from "react";
import Head from "next/head";
import Nav from "../home/component/Nav/page";
import {
  FaBriefcase,
  FaPlane,
  FaChartLine,
  FaAssistiveListeningSystems,
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
  FaUserGraduate,
  FaFileAlt,
  FaPhoneAlt,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import Footer from "../home/footer/page";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";
import styles from "./Careers.module.css";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer (React/Next.js)",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description:
        "Lead the development of high-performance, scalable web applications using React and Next.js, ensuring responsive design and optimal user experience.",
      category: "technology",
      experience: "3 years",
    },
    {
      id: 2,
      title: "AI/ML Engineer – Data & Predictive Analytics",
      department: "Data & AI Solutions",
      type: "Full-time",
      location: "Remote",
      description:
        "Design and implement innovative AI and machine learning models, providing actionable insights and predictive solutions for diverse business challenges.",
      category: "technology",
      experience: "2 years",
    },
    {
      id: 3,
      title: "Senior Travel Consultant – Global Bookings",
      department: "Travel & Hotel Booking",
      type: "Full-time",
      location: "Remote",
      description:
        "Provide expert guidance on travel itineraries, hotel accommodations, and booking management, ensuring seamless and memorable travel experiences for clients worldwide.",
      category: "travel",
      experience: "2 years",
    },
    {
      id: 4,
      title: "Virtual Executive Assistant",
      department: "Virtual Assistant Services",
      type: "Contract",
      location: "Remote",
      description:
        "Deliver professional administrative and executive support to clients globally, managing schedules, correspondence, and operational tasks efficiently.",
      category: "virtual-assistant",
      experience: "1 year",
    },
    {
      id: 5,
      title: "Data Analyst – Business Intelligence",
      department: "Data & AI Solutions",
      type: "Full-time",
      location: "Remote",
      description:
        "Analyze complex datasets to extract insights, create dashboards, and provide actionable recommendations that drive strategic business decisions.",
      category: "technology",
      experience: "2 years",
    },
    {
      id: 6,
      title: "UX/UI Designer – Digital Solutions",
      department: "Technology",
      type: "Contract",
      location: "Remote",
      description:
        "Design user-centric interfaces and experiences for web and mobile applications, focusing on usability, accessibility, and modern design standards.",
      category: "technology",
      experience: "2 years",
    },
    {
      id: 7,
      title: "Travel Itinerary Specialist",
      department: "Travel & Hotel Booking",
      type: "Full-time",
      location: "Remote",
      description:
        "Create personalized travel itineraries for clients, optimizing for time, budget, and experience while ensuring smooth travel logistics.",
      category: "travel",
      experience: "1-2 years",
    },
    {
      id: 8,
      title: "Virtual Customer Support Agent",
      department: "Virtual Assistant Services",
      type: "Full-time",
      location: "Remote",
      description:
        "Handle client inquiries and support requests professionally via email, chat, and calls, maintaining high customer satisfaction.",
      category: "virtual-assistant",
      experience: "1 year",
    },
    {
      id: 9,
      title: "Backend Developer – Node.js & Express",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description:
        "Develop and maintain scalable backend systems, RESTful APIs, and database structures using Node.js and Express for high-performance applications.",
      category: "technology",
      experience: "3 years",
    },
    {
      id: 10,
      title: "Virtual Marketing Assistant",
      department: "Virtual Assistant Services",
      type: "Contract",
      location: "Remote",
      description:
        "Support marketing campaigns by managing social media content, email campaigns, and client engagement tasks efficiently.",
      category: "virtual-assistant",
      experience: "2 years",
    },
    {
      id: 11,
      title: "Travel Booking Coordinator",
      department: "Travel & Hotel Booking",
      type: "Full-time",
      location: "Remote",
      description:
        "Coordinate flight, hotel, and tour bookings for clients, ensuring timely confirmations, best rates, and smooth customer experiences.",
      category: "travel",
      experience: "2 years",
    },
    {
      id: 12,
      title: "Full Stack Developer – React & Node",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description:
        "Build and maintain end-to-end web applications using React for frontend and Node.js for backend with high scalability and performance.",
      category: "technology",
      experience: "3 years",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Choose a Job",
      description:
        "Browse through our available job openings and select the one that fits your skills.",
      icon: <FaUserGraduate className={styles.stepIcon} />,
    },
    {
      id: 2,
      title: "Fill the Application",
      description:
        "Click 'Apply Now' and complete the application form with your details and resume.",
      icon: <FaFileAlt className={styles.stepIcon} />,
    },
    {
      id: 3,
      title: "HR Call",
      description:
        "Our HR team will review your application and call you within 24 hours for further discussion.",
      icon: <FaPhoneAlt className={styles.stepIcon} />,
    },
    {
      id: 4,
      title: "Get Hired",
      description: "If selected, join our team and start your journey with us!",
      icon: <FaCheck className={styles.stepIcon} />,
    },
  ];
  const jobReviews = [
    {
      name: "Rohan Sharma",
      role: "Frontend Developer",
      review:
        "Working here has been a fantastic experience! The projects are challenging and rewarding, and the team is supportive.",
      rating: 5,
      image:
        "https://pbs.twimg.com/profile_images/1107493705261502464/syjHAMsv_400x400.jpg",
    },
    {
      name: "Priya Verma",
      role: "AI/ML Engineer",
      review:
        "Amazing work culture and learning opportunities. Mentorship here helped me grow professionally.",
      rating: 4.5,
      image:
        "https://photosmint.com/wp-content/uploads/beautiful-cute-simple-girl-pic-12-years-indian.jpeg",
    },
    {
      name: "Ankit Singh",
      role: "Travel Consultant",
      review:
        "Great environment for travel professionals. The company encourages innovation and client satisfaction.",
      rating: 5,
      image:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Fankitsingh.jpg&h=570&w=855&q=100&v=20250320&c=1",
    },
    {
      name: "Neha Gupta",
      role: "UX/UI Designer",
      review:
        "Creative freedom and excellent teamwork. The leadership values employee input and ideas.",
      rating: 4,
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQH3UlkZJ0vK2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1547947057672?e=2147483647&v=beta&t=w2mdRRicbVfwhVn66niheD1aXkWs8cds6n4wJcv6UWA",
    },
    {
      name: "Vikram Patel",
      role: "Virtual Assistant",
      review:
        "Flexible remote work and great support from management. Highly recommend for aspiring virtual assistants.",
      rating: 5,
      image:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/09/normal-people-0.jpg",
    },
    {
      name: "Sanya Reddy",
      role: "Data Analyst",
      review:
        "Learning new tools and solving real business problems has been an exciting journey.",
      rating: 4.5,
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQEIvFxq2zqBmw/profile-displayphoto-shrink_200_200/B4EZPv8thvGcAc-/0/1734897491314?e=2147483647&v=beta&t=zQiXOdNmd-er0vikMYHbMhrVb4XkPOf8Jm_YnuPYzDs",
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
                  activeTab === "technology" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("technology")}
              >
                technology
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
                  activeTab === "virtual-assistant" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("virtual-assistant")}
              >
                Virtual Assistance
              </button>
            </div>

            <div className={styles.jobsGrid}>
              {filteredJobs.map((job) => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobDept}>{job.department}</span>
                      <span className={styles.jobType}>{job.type}</span>
                      <span className={styles.jobExperience}>
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className={styles.jobDescription}>{job.description}</p>

                  <div className={styles.jobFooter}>
                    <div className={styles.jobLocation}>
                      <FaMapMarkerAlt className={styles.locationIcon} />
                      <span>{job.location}</span>
                    </div>
                    <Link href="/job-apply">
                      <button className={styles.applyBtn}>
                        Apply Now <FaArrowRight className={styles.arrowIcon} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="howItWorks" className={styles.howItWorksSection}>
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
            <p>Simple 4-step process to apply and get hired</p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.id} className={styles.stepCard}>
                <div className={styles.iconContainer}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.jobReviewsSection}>
          <div className={styles.sectionHeader}>
            <h2>What Our Employees Say</h2>
            <p>Hear from our talented team members across different domains</p>
          </div>

          {/* Slider Wrapper */}
          <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
              {[...jobReviews, ...jobReviews].map(
                (
                  review,
                  index // duplicate for infinite loop
                ) => (
                  <div key={index} className={styles.reviewCard}>
                    <div className={styles.reviewRating}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(review.rating)
                              ? styles.starFilled
                              : styles.starEmpty
                          }
                        />
                      ))}
                      <span>{review.rating}</span>
                    </div>
                    <p className={styles.reviewText}>"{review.review}"</p>
                    <div className={styles.reviewAuthor}>
                      <img
                        src={review.image}
                        alt={review.name}
                        className={styles.authorImage}
                      />
                      <div className={styles.authorInfo}>
                        <h4>{review.name}</h4>
                        <p>{review.role}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
