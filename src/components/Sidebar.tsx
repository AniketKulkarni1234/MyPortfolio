"use client";

import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaBirthdayCake,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  const messages = [
    "Full Stack Web Developer",
    "Competitive Programmer",
    "Enthusiastic Learner",
    "Always Coding..!",
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentMessage.length) {
      timeout = setTimeout(() => {
        setText(currentMessage.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentMessage.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 60);
    } else if (!isDeleting && charIndex > currentMessage.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex, messages]);

  return (
    <div style={styles.container}>
      {/* NAVBAR with gradient */}
      <header style={styles.navbar}>
        <h1 style={styles.navTitle}>Aniket's Portfolio</h1>
      </header>

      {/* SIDEBAR normal scroll */}
      <aside style={styles.sidebar}>
        {/* PROFILE */}
        <div style={styles.profile}>
          <div style={styles.imageWrapper}>
            <img src="/image.png" alt="Profile" style={styles.image} />
          </div>
          <h2 style={styles.name}>Aniket Kulkarni</h2>

          {/* Animated typing text */}
          <p style={styles.role}>
            <span style={{ color: "#facc15" }}>{text}</span>
            <span style={{ opacity: blink ? 1 : 0 }}>|</span>
          </p>
        </div>

        {/* CONTACT INFO */}
        <div style={styles.contact}>
          <p style={styles.contactItem}>
            <FaMapMarkerAlt /> Chh.SambhajiNagar,Maharashtra
          </p>
          <p style={styles.contactItem}>
            <FaPhone /> +91 8788336486
          </p>
          <p style={styles.contactItem}>
            <FaEnvelope /> kulaniket55@gmail.com
          </p>
          <p style={styles.contactItem}>
            <FaBirthdayCake /> 28 June 2005
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div style={styles.socials}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaLinkedin size={24} color="#0A66C2" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaGithub size={24} color="#ffffff" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaInstagram size={24} color="#E4405F" />
          </a>
        </div>
      </aside>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    minHeight: "100vh",
    background: "#111",
  },

  navbar: {
    width: "100%",
    padding: "10px 20px",
    background: "#1b1b1b",
    fontWeight: 700,
    fontSize: "20px",
    position: "sticky" as const,
    top: 0,
    borderBottom: "1px solid #333",
    display: "flex",
    justifyContent: "center",
    zIndex: 10,
  },

  navTitle: {
    background: "linear-gradient(270deg, #facc15, #f97316, #facc15)",
    backgroundSize: "600% 600%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientMove 4s ease infinite",
    fontSize: "22px",
  },

  sidebar: {
    width: "250px",
    background: "#1b1b1b",
    padding: "20px",
    color: "#fff",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    marginTop: "15px",
    // Removed sticky/fixed, sidebar scrolls normally
  },

  profile: {
    textAlign: "center" as const,
    marginBottom: "30px",
  },

  imageWrapper: {
    width: "150px",
    height: "180px",
    margin: "0 auto 15px",
    borderRadius: "15px",
    overflow: "hidden" as const,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },

  name: { fontSize: "20px", fontWeight: 600, marginBottom: "5px" },

  role: {
    fontSize: "13px",
    color: "#ccc",
    minHeight: "22px",
    fontWeight: 500,
  },

  contact: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    gap: "15px",
    marginBottom: "30px",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    fontSize: "13px",
  },

  socials: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },

  socialLink: {
    transition: "transform 0.3s ease",
  },

  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};
