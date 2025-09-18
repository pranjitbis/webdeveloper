"use client";
import { useState } from "react";
import styles from "./JobApplicationForm.module.css";
import Nav from "../home/component/Nav/page";
import Footer from "../home/footer/page";
export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobId: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    { id: 1, title: "Senior Frontend Developer (React/Next.js)" },
    { id: 2, title: "AI/ML Engineer – Data & Predictive Analytics" },
    { id: 3, title: "Senior Travel Consultant – Global Bookings" },
    { id: 4, title: "Virtual Executive Assistant" },
    { id: 5, title: "Data Analyst – Business Intelligence" },
    { id: 6, title: "UX/UI Designer – Digital Solutions" },
    { id: 7, title: "Travel Itinerary Specialist" },
    { id: 8, title: "Virtual Customer Support Agent" },
    { id: 9, title: "Backend Developer – Node.js & Express" },
    { id: 10, title: "Virtual Marketing Assistant" },
    { id: 11, title: "Travel Booking Coordinator" },
    { id: 12, title: "Full Stack Developer – React & Node" },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Application Submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        jobId: "",
        experience: "",
        resume: null,
        coverLetter: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Nav />
      <div className={styles.applicationForm}>
        <h2>Job Application Form</h2>

        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h3>Thank you for applying!</h3>
            <p>Our HR team will review your application and get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Job Selection */}
            <div className={styles.formGroup}>
              <label htmlFor="jobId">Select Job *</label>
              <select
                id="jobId"
                name="jobId"
                value={formData.jobId}
                onChange={handleChange}
                required
              >
                <option value="">Choose a job</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className={styles.formGroup}>
              <label htmlFor="experience">Relevant Experience (Years) *</label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            {/* Resume Upload */}
            <div className={styles.formGroup}>
              <label htmlFor="resume">Upload Resume *</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>

            {/* Cover Letter */}
            <div className={styles.formGroup}>
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="5"
                value={formData.coverLetter}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Application
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
