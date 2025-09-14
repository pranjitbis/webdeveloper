"use client";
import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaMediumM,
} from "react-icons/fa";
import styles from "./Team.module.css";
import Navs from "../home/component/Nav/page";
import Footer from "../home/footer/page";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Neeraj Baghel",
      role: "CEO",
      image: "/about/sir-image.png",
      bio: "10+ years of experience in e-commerce and digital transformation. Passionate about helping businesses grow online.",
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
      bio: "Expert in full-stack development and e-commerce platforms. Leads our technical strategy and innovation.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Sela Pawestri",
      role: "Social Media Management",
      image: "/team/Sela.png",
      bio: "Social Media Management – Grow followers, boost engagement, and increase brand visibility.",
      social: {
        behance: "#",
        dribbble: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Pranjit Biswas",
      role: "Project manager & Full stack developer",
      image: "/team/pranjit.jpeg",
      bio: "Project Manager & Full Stack Developer creating useful websites and guiding teams successfully.",
      social: {
        twitter: "https://github.com/pranjitbis/",
        github: "https://www.linkedin.com/in/pranjit-biswas-42066526b/",
      },
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
            <h2 className={styles.title}>Meet Our Expert Team</h2>
            <p className={styles.subtitle}>
              The talented professionals behind Aroliya's success
            </p>
            <div className={styles.divider}></div>
          </div>

          {/* Team Grid */}
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamCard}>
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
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = socialIcons[platform];
                      return (
                        <a
                          key={platform}
                          href={url}
                          className={styles.socialIcon}
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <IconComponent />
                        </a>
                      );
                    })}
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
