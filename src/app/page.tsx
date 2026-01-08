"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  // Hide intro after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = ["about", "resume", "projects", "contact"];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // -----------------------------------
  // INTRO SCREEN
  // -----------------------------------
  if (showIntro) {
    const name = "Hello..!";
    return (
      <div style={styles.introPage}>
        <h1 style={styles.introName}>
          {name.split("").map((letter, index) => (
            <span
              key={index}
              style={{
                ...styles.letter,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h2 style={styles.introSubtitle}>Welcome To My Portfolio...</h2>
      </div>
    );
  }

  // -----------------------------------
  // MAIN PAGE
  // -----------------------------------
  return (
    <div style={styles.page}>
      <Sidebar />

      <div style={styles.main}>
        {/* NAVBAR */}
        <div style={styles.navbar}>
          <div style={{ display: "flex", gap: "20px" }}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                style={{
                  background: "none",
                  border: "none",
                  color: activeSection === item ? "#facc15" : "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Download CV */}
          <a
            href="/Aniket_Kulkarni_CV.pdf"
            download
            style={{
              padding: "8px 16px",
              backgroundColor: "#facc15",
              color: "#000",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>

        {/* SECTIONS */}
        <section id="about">{activeSection === "about" && <About />}</section>
        <section id="resume">{activeSection === "resume" && <Resume />}</section>
        <section id="projects">{activeSection === "projects" && <Projects />}</section>
        <section id="contact">{activeSection === "contact" && <Contact />}</section>

        {/* ✅ FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

// -----------------------------------
// STYLES
// -----------------------------------
const styles = {
  introPage: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#0f0f0f",
    color: "#facc15",
    textAlign: "center" as const,
  },
  introName: {
    fontSize: "80px",
    fontWeight: "900",
    margin: 0,
  },
  letter: {
    display: "inline-block",
    opacity: 0,
    transform: "translateY(-50px)",
    animation: "fadeSlide 0.6s forwards",
  },
  introSubtitle: {
    fontSize: "28px",
    marginTop: "20px",
    opacity: 0,
    animation: "fadeSlide 1s forwards",
    animationDelay: "1.5s",
    color: "#fff",
  },
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f0f0f",
    padding: "20px",
  },
  main: {
    flex: 1,
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
}; 