import styles from "./LeftToRight.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import formFilling from "../../../../public/icons/wmremove.gif";
import travelHotel from "../../../../public/icons/travel-bookings1.jpg";

export default function FileUpload() {
  return (
    <section className={styles.uploadSection}>
      {/* Section Header */}
      <div className={styles.sectionHead}>
        <h2>Our Best Services</h2>
        <p>
          We provide reliable solutions to save your time and simplify your work.
          From online form filling to travel bookings, we make processes faster,
          easier, and stress-free.
        </p>
      </div>

      {/* Row 1: Content Left, Image Right */}
      <div className={styles.row}>
        <div className={styles.content}>
          <h2>Professional Form Filling Services</h2>
          <ul className={styles.features}>
            <li>
              <FaCheckCircle className={styles.icon} /> Accurate government form submissions
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Exam & application assistance
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Save time & avoid costly mistakes
            </li>
          </ul>
          <button className={styles.btn}>Submit Request</button>
        </div>
        <div className={styles.image}>
          <Image src={formFilling} alt="Form Filling Services" priority />
        </div>
      </div>

      {/* Row 2: Image Left, Content Right */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.content}>
          <h2>Travel & Hotel Booking</h2>
          <ul className={styles.features}>
            <li>
              <FaCheckCircle className={styles.icon} /> Best price guaranteed hotels
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Easy flight & train bookings
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> 24/7 travel support
            </li>
          </ul>
          <button className={styles.btn}>Book Now</button>
        </div>
        <div className={styles.image}>
          <Image src={travelHotel} alt="Travel & Hotel Booking" priority />
        </div>
      </div>
    </section>
  );
}
