"use client";

import { useEffect, useState } from "react";
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

  // NAVIGATION
  const navItems = ["about", "resume", "projects", "contact"];
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // SHOW TYPING INTRO
  if (showIntro) return <TypingIntro />;

  // MAIN PAGE
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.appLayout}>
        <Sidebar />

        <div style={styles.mainContent}>
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

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

// ----------------------------
// TYPING INTRO COMPONENT
// ----------------------------
function TypingIntro() {
  const fullText = "Hii, I’m Aniket..!"; // Correct text
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="introPage">
      <h1 className="introName">
        {typedText}
        {showCursor && <span className="cursor">|</span>}
      </h1>
      <h2 className="introSubtitle">Turning Ideas into Interactive Web Experiences...</h2>

      <style jsx>{`
        .introPage {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          background-color: #0f0f0f;
          color: #facc15;
          text-align: center;
          padding: 0 20px;
        }

        .introName {
          font-size: 6vw;
          font-weight: 900;
          margin: 0;
          line-height: 1;
        }

        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 0.7s infinite;
          color: #facc15;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .introSubtitle {
          font-size: 2vw;
          margin-top: 20px;
          color: #fff;
        }

        @media (max-width: 768px) {
          .introName { font-size: 12vw; }
          .introSubtitle { font-size: 4vw; }
        }
      `}</style>
    </div>
  );
}

// ----------------------------
// STYLES
// ----------------------------
const styles = {
  pageWrapper: { display: "flex", justifyContent: "center", padding: "40px 20px" },
  appLayout: { display: "flex", gap: "30px", maxWidth: "1200px", width: "100%" },
  mainContent: { flex: 1, background: "#161616", borderRadius: "20px", padding: "30px" },
  navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" },
};
