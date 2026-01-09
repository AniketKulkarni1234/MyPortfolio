"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer
      style={{
        marginTop: "80px",
        padding: isMobile ? "40px 15px" : "60px 20px",
        borderTop: "1px solid #333",
        color: "#fff",
        backgroundColor: "#111",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "24px" : "28px",
              marginBottom: "8px",
              color: "#facc15",
            }}
          >
            Aniket Kulkarni
          </h2>

          <p
            style={{
              fontSize: isMobile ? "15px" : "16px",
              marginBottom: "18px",
              color: "#ccc",
              lineHeight: "1.6",
              maxWidth: "420px",
            }}
          >
            Full Stack Developer focused on building modern, responsive, and
            user-friendly web applications.
          </p>

          {/* SOCIAL ICONS */}
          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "22px",
            }}
          >
            {[
              {
                icon: <FaGithub size={24} />,
                link: "https://github.com/AniketKulkarni1234",
                color: "#6e5494",
              },
              {
                icon: <FaLinkedin size={24} />,
                link: "https://www.linkedin.com/in/aniket-kulkarni-85350b2a9/",
                color: "#0e76a8",
              },
              {
                icon: <FaInstagram size={24} />,
                link: "https://www.instagram.com/aniket_kulkarni_001/?hl=en",
                color: "#e1306c",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  transition: "transform 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "scale(1.25)";
                    e.currentTarget.style.color = item.color;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: 1,
            textAlign: isMobile ? "center" : "right",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              marginBottom: "12px",
            }}
          >
            Get in Touch
          </h3>

          <p style={{ color: "#ccc", marginBottom: "6px" }}>
            📞 +91 8788336486
          </p>
          <p style={{ color: "#ccc", marginBottom: "6px" }}>
            ✉️ kulaniket55@gmail.com
          </p>
          <p style={{ color: "#ccc" }}>📍 Chh. Sambhaji Nagar</p>
        </div>
      </div>

      {/* BOTTOM */}
      <p
        style={{
          textAlign: "center",
          marginTop: "45px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Aniket Kulkarni. All rights reserved.
      </p>
    </footer>
  );
}
