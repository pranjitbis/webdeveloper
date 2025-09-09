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

const Services = () => {
  const services = [
        {
      image: MachineLearningSolutions,
      title: "Freelancer Services",
      features: [
        "Access verified client projects",
       "Work across diverse categories",
        "Build long-term client relationships",
        "Secure, on-time payments"
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
      buttonText: "Submit Request",
    },
    {
      image: second,
      title: "Virtual Assistant Services",
      features: [
        "Calendar booking and management",
        "Email follow-ups and responses",
        "Document formatting and editing",
        "Data entry and organization",
      ],
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
      buttonText: "Book Now",
    },
    {
      image: DataVisualizationServices,
      title: "Data Visualization Services and AI sulition",
      features: [
        "Power BI, Tableau, Looker Studio dashboards",
        "Custom Data Visualizations",
        "Business Reporting",
        "Real-time Data Monitoring",
      ],
      buttonText: "Data Visualization Services",
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

              <button className={styles.ctaButton}>{service.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
