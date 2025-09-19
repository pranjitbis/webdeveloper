"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import styles from "./TrustedCompanies.module.css";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  },
  {
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
  },
  
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo_blue_2016.svg",
  },
];

export default function TrustedCompanies() {
  const ref = useRef(null);

  // Track scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to horizontal movement
  const rawX = useTransform(scrollYProgress, [0, 2], ["0%", "-80%"]);

  // Make movement smooth with spring
  const x = useSpring(rawX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <section ref={ref} className={styles.trustedSection}>
      <div className={styles.trustedContainer}>
        <h2 className={styles.trustedTitle}>Brands Our Freelancers Get Inspired
By </h2>
      </div>

      {/* Smooth Scroll-driven horizontal slider */}
      <div className={styles.trustedSliderContainer}>
        <motion.div style={{ x }} className={styles.trustedSlider}>
          {companies.map((company, index) => (
            <div key={index} className={styles.trustedLogoWrapper}>
              <img
                src={company.logo}
                alt={company.name}
                className={styles.trustedLogo}
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
