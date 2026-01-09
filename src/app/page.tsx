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
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Hide intro
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = ["about", "resume", "projects", "contact"];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ---------------- INTRO ----------------
  if (showIntro) {
    const name = "Hi , I’m Aniket..!";
    return (
      <div style={styles.introPage}>
        <h1 style={{ ...styles.introName, fontSize: isMobile ? "42px" : "80px" }}>
          {name.split("").map((letter, index) => (
            <span
              key={index}
              style={{
                ...styles.letter,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h2
          style={{
            ...styles.introSubtitle,
            fontSize: isMobile ? "18px" : "28px",
          }}
        >
          Turning Ideas into Interactive Web Experiences....
        </h2>
      </div>
    );
  }

  // ---------------- MAIN ----------------
  return (
    <div
      style={{
        ...styles.page,
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "10px" : "20px",
      }}
    >
      <Sidebar />

      <div
        style={{
          ...styles.main,
          padding: isMobile ? "20px" : "40px",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            ...styles.navbar,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "15px" : "0",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
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
                  fontSize: isMobile ? "14px" : "16px",
                }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CV */}
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
              fontSize: isMobile ? "14px" : "16px",
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

        <Footer />
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------
const styles = {
  introPage: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0f0f0f",
    color: "#facc15",
    textAlign: "center" as const,
  },
  introName: {
    fontWeight: "900",
    margin: 0,
  },
  letter: {
    display: "inline-block",
    opacity: 0,
    transform: "translateY(-40px)",
    animation: "fadeSlide 0.6s forwards",
  },
  introSubtitle: {
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
  },
  main: {
    flex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
};
