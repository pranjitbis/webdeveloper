import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";
import first from "../../../../public/icons/online-form-filling.png";
import second from "../../../../public/icons/virtual-assistant.png";
import third from "../../../../public/icons/Ecommerce.png";
import fourth from "../../../../public/icons/online-booking.png";
import DataVisualizationServices from "../../../../public/icons/data-analytics.png";
import onlineBooking from "../../../../public/icons/online-booking.png";
import MachineLearningSolutions from "../../../../public/icons/freelancer-3d.png";
import Link from "next/link";
const Services = () => {
  const services = [
    {
      image: MachineLearningSolutions,
      title: "Freelancer Services",
      features: [
        "Access verified client projects",
        "Work across diverse categories",
        "Build long-term client relationships",
        "Secure, on-time payments",
      ],
      buttonText: "Resgister",
    },
    {
      image: first,
      title: "Online Form Filling",
      features: [
        "Government Exam & Job Applications",
        "Education & Admission Forms",
        "Banking & Financial Forms",
        "Travel & Other Services",
      ],
      link: "/services/form-filling",
      buttonText: "Submit Request",
    },
    {
      image: second,
      title: "Virtual Assistant",
      features: [
        "Calendar booking and management",
        "Email follow-ups and responses",
        "Document formatting and editing",
        "Data entry and organization",
      ],
      link: "/services/virtual-assistance",
      buttonText: "Hire a VA",
    },
    {
      image: third,
      title: "E-Commerce Solutions",
      features: [
        "Managing Catalogs and Products Easily and Efficiently",
        "Managing Orders and Inventory Smoothly and Effectively",
        "Helping Sellers Grow Sales with Digital Marketing Strategies",
        "Customer Support Outsourcing",
      ],
      link: "/services/e-eommerce-solutions",
      buttonText: "Get Started",
    },
    {
      image: fourth,
      title: "Travel & Hotel Booking",
      features: [
        "Domestic & International flights",
        "Train Tickets — Instant PNR updates and seat preferences",
        "Bus Tickets — Verified operators and easy reschedules",
        "Hotel Stays — Curated properties with secure booking",
      ],
      link: "/services/travel-bookings",
      buttonText: "Book Now",
    },
    {
      image: DataVisualizationServices,
      title: "Data & AI Solution",
      features: [
        "Power BI, Tableau, Looker Studio dashboards",
        "Custom Data Visualizations",
        "Analyzing and presenting data for informed business decisions.",
        "AI dashboards turn raw data into clear insights.",
      ],
      link: "/services/data-visualization",
      buttonText: "Get Started ",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Our Services</h1>

        <div className={styles.divider}></div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" className={styles.serviceCard}>
              <Image src={service.image} alt="err" />
              <h2 className={styles.serviceTitle}>{service.title}</h2>

              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.link || "#"}>
                <button className={styles.ctaButton}>
                  {service.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
