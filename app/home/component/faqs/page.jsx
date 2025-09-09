"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("client");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const clientFAQs = [
    {
      question: "Can I track the status of my form request?",
      answer:
        "Yes. After submission, you'll receive a Request ID. You can use it to check your status via email/WhatsApp updates.",
    },
    {
      question: "What e-commerce services do you provide?",
      answer:
        "We provide product listing, store setup (Shopify, WooCommerce, Amazon, Flipkart), order management, and marketing support.",
    },
    {
      question: "How can I contact for support?",
      answer:
        "You can reach us via email, phone, or WhatsApp. Visit our Contact Us page for details.",
    },
    {
      question: "Do you provide customer support after service completion?",
      answer:
        "Yes, we provide limited post-service support for corrections, clarifications, or follow-ups.",
    },
    {
      question: "What types of forms can you help with?",
      answer:
        "We assist with job applications, government forms, admission forms, exam registrations, and more.",
    },
    {
      question: "How long does it take to complete a form request?",
      answer:
        "Most requests are completed within 24–48 hours, depending on the complexity and documents provided.",
    },
  ];

  const freelancerFAQs = [
    {
      question: "How do I join as a freelancer?",
      answer:
        "Click on the Freelancer tab and complete our registration process with your skills and portfolio.",
    },
    {
      question: "What skills are you looking for in freelancers?",
      answer:
        "We're looking for experts in form filling, data entry, e-commerce management, virtual assistance, and more.",
    },
    {
      question: "How does the payment work for freelancers?",
      answer:
        "Freelancers receive payments based on completed projects, with transparent pricing and regular payouts.",
    },
    {
      question: "What support do you provide to freelancers?",
      answer:
        "We offer training, client matching, project management tools, and continuous support.",
    },
    {
      question: "Can I work remotely as a freelancer?",
      answer: "Yes, all our freelance opportunities are remote and flexible.",
    },
    {
      question: "How quickly will I get projects after registration?",
      answer:
        "Most freelancers start receiving projects within 1-2 weeks after profile verification.",
    },
  ];

  const currentFAQs = activeTab === "client" ? clientFAQs : freelancerFAQs;

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our services and freelance
            opportunities
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "client" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("client")}
          >
            For Clients
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "freelancer" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("freelancer")}
          >
            For Freelancers
          </button>
        </div>

        {/* Freelancer Registration CTA */}
        {activeTab === "freelancer" && (
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>Ready to Join Our Team?</h3>
              <p>
                Register as a freelancer and start working on exciting projects
              </p>
              <Link
                href="/freelancer-registration"
                className={styles.ctaButton}
              >
                Register as Freelancer
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Items */}
        <div className={styles.faqGrid}>
          {currentFAQs.map((faq, index) => (
            <div
              data-aos="zoom-out-up"
              key={index}
              className={`${styles.faqItem} ${
                openQuestion === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.icon}>
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={styles.answer}
                aria-hidden={openQuestion !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
