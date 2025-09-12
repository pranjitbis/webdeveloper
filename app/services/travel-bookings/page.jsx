"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./TravelBookings.module.css";
import travl from "../../../public/icons/travel-bookings1.jpg";
import Image from "next/image";
import Nav from "../../home/component/Nav/page";
import Footer from "@/app/home/footer/page";
import Flight from "../../../public/icons/Flight-Bookings.png";
import hotel from "../../../public/icons/hotel-booking.jpg";
import TourPackages from "../../../public/icons/free-call.png";
import Link from "next/link";
const TravelBookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tripType: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "1",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("flights");

  useEffect(() => {
    // Scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.fadeInUp}`);
      elements.forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.85) {
          el.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tripType: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        travelers: "1",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const travelServices = [
    {
      id: "flights",
      title: "Flight Bookings",
      icon: Flight,
      description:
        "Domestic and international flight bookings at the best prices",
      features: [
        "Best price guarantee",
        "Flexible date options",
        "Multi-city itineraries",
        "24/7 support",
        "Seat selection",
        "Flight status alerts",
      ],
    },
    {
      id: "hotels",
      title: "Hotel Reservations",
      icon: hotel,
      description: "Find the perfect accommodation for your travel needs",
      features: [
        "5,00,000+ properties worldwide",
        "Free cancellation options",
        "Best price guarantee",
        "Guest reviews & ratings",
        "Map-based search",
        "Special deals & discounts",
      ],
    },
    {
      id: "packages",
      title: "Tour Packages",
      icon: TourPackages,
      description: "All-inclusive packages for stress-free travel",
      features: [
        "Customizable itineraries",
        "Guided tours & activities",
        "Transportation included",
        "Meals & accommodation",
        "Local experiences",
        "Travel insurance options",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Plan Your Trip",
      description: "Tell us your travel preferences and requirements",
    },
    {
      step: 2,
      title: "Get Customized Options",
      description: "Receive tailored travel itineraries and quotes",
    },
    {
      step: 3,
      title: "Book & Confirm",
      description: "Secure your booking with easy payment options",
    },
    {
      step: 4,
      title: "Travel & Enjoy",
      description: "Enjoy your trip with 24/7 support during travel",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Professional Travel Booking Services | Your Travel Partner
        </title>
        <meta
          name="description"
          content="Expert travel booking services for flights, hotels, tour packages, and visa assistance. Plan your perfect trip with our professional travel consultants."
        />
      </Head>
      <Nav />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`}>
              Plan Your Perfect Getaway
            </h1>
            <p className={`${styles.heroDescription} ${styles.fadeInUp}`}>
              Expert travel planning services for flights, hotels, tours, and
              visa assistance. Your journey begins with us.
            </p>
            <div className={`${styles.heroCta} ${styles.fadeInUp}`}>
              <button className={styles.ctaButton}><Link href="https://expedia.com/affiliate/Taymxbh">Book Now</Link></button>
              <button className={styles.secondaryButton}>
                Explore Destinations
              </button>
            </div>
          </div>

          <div className={styles.graphicElement}>
            <Image src={travl} alt="ere" />
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Travel Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive travel solutions for all your needs
            </p>
          </div>

          <div className={styles.tabs}>
            {travelServices.map((service) => (
              <button
                key={service.id}
                className={`${styles.tab} ${
                  activeTab === service.id ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {travelServices.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceDetails} ${
                  activeTab === service.id ? styles.activeContent : ""
                }`}
              >
                <div className={styles.serviceInfo}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className={styles.serviceButton}>
                    <Link href="https://expedia.com/affiliate/Taymxbh">
                      Book Now
                    </Link>
                  </button>
                </div>
                <div className={styles.serviceVisual}>
                  <div className={styles.visualPlaceholder}>
                    <Image
                      src={service.icon}
                      alt="Travel Bookings"
                      className={styles.logo}
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Destinations */}

        {/* How It Works */}
        <section className={styles.process}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>
              Simple process to plan your perfect trip
            </p>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${styles.processStep} ${styles.fadeInUp}`}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TravelBookings;
