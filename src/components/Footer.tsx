"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "50px 20px",
        borderTop: "1px solid #333",
        color: "#fff",
        backgroundColor: "#111",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "30px" }}>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "5px",
              color: "#FFD700", // yellow
            }}
          >
            Aniket Kulkarni
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "15px",
              color: "#ccc",
              lineHeight: "1.5",
            }}
          >
            Full Stack Developer focused on building modern, responsive, and user-friendly web applications.
          </p>
          <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <a
              href="https://github.com/AniketKulkarni1234"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s, color 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.color = "#6e5494";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-kulkarni-85350b2a9/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s, color 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.color = "#0e76a8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/aniket_kulkarni_001/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s, color 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.color = "#e1306c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Get in Touch */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "5px",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
            Get in Touch
          </h3>
          <span style={{ color: "#ccc" }}>📞 +91 8788336486</span>
          <span style={{ color: "#ccc" }}>✉️ kulaniket55@gmail.com</span>
          <span style={{ color: "#ccc" }}>📍 Chh.SambhajiNagar</span>
        </div>
      </div>

      {/* Bottom Center */}
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Aniket Kulkarni. All rights reserved.
      </p>
    </footer>
  );
}
