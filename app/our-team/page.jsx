"use client";
import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaMediumM,
  FaLightbulb,
  FaCode,
  FaUsers,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import styles from "./Team.module.css";
import Navs from "../home/component/Nav/page";
import Footer from "../home/footer/page";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team");

  const teamMembers = [
    {
      id: 1,
      name: "Neeraj Baghel",
      role: "CEO & Founder",
      image: "/about/sir-image.png",
      bio: "Leading Aroliya with a mission to bridge the gap between freelancers and businesses.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Chintan Rabadiya",
      role: "Web Developer",
      image: "/team/Chintan.png",
      bio: "Building secure, scalable, and user-friendly digital solutions.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Sela Pawestri",
      role: "Social Media Manager",
      image: "/team/Sela.png",
      bio: "Growing followers, boosting engagement, and increasing brand visibility.",
      social: {
        behance: "#",
        dribbble: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Pranjit Biswas",
      role: "Project Manager & Full Stack Developer",
      image: "/team/pranjit.jpeg",
      bio: "Creating useful websites and guiding teams successfully.",
      social: {
        github: "https://github.com/pranjitbis/",
        linkedin: "https://www.linkedin.com/in/pranjit-biswas-42066526b/",
      },
    },
    {
      id: 5,
      name: "Nidhi Hongal",
      role: "Executive and Personal assistant",
      image: "/team/Nidhi.png",
      bio: "Organized Executive and Personal Assistant, managing schedules, communication, and tasks with efficiency and professionalism.",
      social: {
        github: "https://github.com/pranjitbis/",
        linkedin: "https://www.linkedin.com/in/pranjit-biswas-42066526b/",
      },
    },
    {
      id: 6,
      name: "Jay Sikar",
      role: "Virtual Assistant",
      image: "/team/Jay.png",
      bio: "Virtual Assistant with 6 years’ experience supporting US, UK, and Australia clients in operations, admin, SMM, marketing, content, and customer support.",
      social: {
        github: "https://github.com/pranjitbis/",
        linkedin: "https://www.linkedin.com/in/pranjit-biswas-42066526b/",
      },
    },
  ];

  const teamRoles = [
    {
      icon: <FaLightbulb />,
      title: "Founder & Visionary",
      description:
        "Leading Aroliya with a mission to bridge the gap between freelancers and businesses.",
    },
    {
      icon: <FaCode />,
      title: "Tech & Development Team",
      description:
        "Building secure, scalable, and user-friendly digital solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Operations & Support Team",
      description:
        "Ensuring smooth bookings, services, and client satisfaction.",
    },
    {
      icon: <FaRocket />,
      title: "Creative & Marketing Team",
      description: "Spreading the word and connecting Aroliya to the world.",
    },
  ];

  const values = [
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description:
        "We believe in working together to achieve extraordinary results.",
    },
    {
      icon: <FaLightbulb />,
      title: "Transparency",
      description: "Open communication and honesty in everything we do.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "Constantly improving and evolving our services and processes.",
    },
    {
      icon: <FaHeart />,
      title: "Respect",
      description: "Valuing every team member, client, and freelancer equally.",
    },
  ];

  // Social icon mapping
  const socialIcons = {
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    github: FaGithub,
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebookF,
    medium: FaMediumM,
  };

  return (
    <div>
      <Navs />
      <section className={styles.teamSection} id="team">
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Our Team – The Heart of Aroliya</h2>
            <p className={styles.subtitle}>
              At Aroliya, our strength lies in our people. Behind every service,
              every solution, and every client success story is a passionate
              team committed to making work simpler and opportunities accessible
              for everyone.
            </p>
            <div className={styles.divider}></div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "team" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("team")}
            >
              Meet the Team
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "culture" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("culture")}
            >
              Our Culture
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "values" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("values")}
            >
              Our Values
            </button>
          </div>

          {/* Team Members */}
          {activeTab === "team" && (
            <>
              <div className={styles.sectionIntro}>
                <p>
                  We are dreamers, doers, and problem-solvers — united by a
                  vision to empower freelancers and businesses alike.
                </p>
              </div>

              <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={styles.teamCard}
                    data-aos="fade-up"
                  >
                    <div className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.memberImage}
                        />
                        <div className={styles.imageOverlay}></div>
                      </div>
                      <div className={styles.socialLinks}>
                        {Object.entries(member.social).map(
                          ([platform, url]) => {
                            const IconComponent = socialIcons[platform];
                            return (
                              <a
                                key={platform}
                                href={url}
                                className={styles.socialIcon}
                                aria-label={`${member.name}'s ${platform}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <IconComponent />
                              </a>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                      <p className={styles.memberBio}>{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.rolesSection}>
                <h3 className={styles.sectionTitle}>Our Team Structure</h3>
                <div className={styles.rolesGrid}>
                  {teamRoles.map((role, index) => (
                    <div key={index} className={styles.roleCard}>
                      <div className={styles.roleIcon}>{role.icon}</div>
                      <h4>{role.title}</h4>
                      <p>{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Culture Section */}
          {activeTab === "culture" && (
            <div className={styles.cultureSection}>
              <div className={styles.cultureContent}>
                <h3 className={styles.sectionTitle}>
                  Our Culture & Philosophy
                </h3>
                <div className={styles.cultureStatement}>
                  <p>
                    "We believe in collaboration, transparency, and innovation.
                    Every idea counts, every client matters, and every
                    freelancer is valued. Our team culture is built on respect
                    and the belief that growth happens when we work together."
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "culture" && (
            <div className={styles.differenceSection}>
              <h4>Why Our Team Makes the Difference</h4>
              <div className={styles.differenceGrid}>
                <div className={styles.differenceItem}>
                  <div className={styles.checkmark}>✓</div>
                  <div>
                    <h5>Dedicated Experts</h5>
                    <p>Focused on solving client needs</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <div className={styles.checkmark}>✓</div>
                  <div>
                    <h5>Passionate Problem Solvers</h5>
                    <p>Going beyond tasks to deliver value</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <div className={styles.checkmark}>✓</div>
                  <div>
                    <h5>Always Evolving</h5>
                    <p>Constantly improving services and processes</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <div className={styles.checkmark}>✓</div>
                  <div>
                    <h5>Client & Freelancer First</h5>
                    <p>Every decision is made with our users in mind</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values Section */}
          {activeTab === "values" && (
            <div className={styles.valuesSection}>
              <h3 className={styles.sectionTitle}>Our Core Values</h3>
              <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                  <div key={index} className={styles.valueCard}>
                    <div className={styles.valueIcon}>{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Closing Statement */}
          <div className={styles.closingSection}>
            <div className={styles.closingContent}>
              <h3>Together, we are Aroliya</h3>
              <p>
                A team committed to transforming the way people work and
                businesses grow. And this is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
