"use client";

import { FaLaptopCode, FaServer, FaProjectDiagram, FaLightbulb } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "Frontend Development",
      desc: "Crafting modern and responsive user interfaces using HTML, CSS, JavaScript, React, and Next.js.",
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      desc: "Building secure and scalable server-side applications with Node.js, Express, MongoDB, and REST APIs.",
    },
    {
      icon: <FaProjectDiagram size={28} />,
      title: "Full Stack Development",
      desc: "Developing complete MERN stack projects from scratch including deployment and performance optimization.",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Problem Solving",
      desc: "Improving logic and data structures skills using Java, DSA, and competitive programming techniques.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <div style={lineStyle} />

      <p style={paragraphStyle}>
        Hello! I'm <strong>Aniket Kulkarni</strong>, currently pursuing B.Tech in Computer Science and Engineering.
        I am passionate about web development and love creating beautiful, functional, and user-friendly websites
        and applications. I have experience in both frontend and backend development, and I enjoy tackling challenging
        problems and learning new technologies. I am proficient in Java, JavaScript, MERN stack, REST APIs, and database
        management. My goal is to build scalable, performant, and innovative solutions that make a difference.
      </p>

      <h2 style={subHeadingStyle}>What I'm Doing</h2>
      <div style={cardsContainer}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el!)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(250, 204, 21, 0.5)",
              background: "linear-gradient(135deg, #1f1f1f, #2a2a2a)",
            }}
            style={{ ...cardStyle, background: "linear-gradient(135deg, #161616, #1e1e1e)" }}
          >
            <motion.div
              style={{ marginBottom: "12px" }}
              whileHover={{ rotate: [0, 15, -15, 0], scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {card.icon}
            </motion.div>
            <h3 style={cardTitle}>{card.title}</h3>
            <p style={cardText}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   STYLES (Responsive + Mobile-Friendly)
========================= */

const sectionStyle = {
  marginBottom: "60px",
  padding: "0 16px",
};

const headingStyle = {
  fontSize: "clamp(24px, 5vw, 32px)",
  fontWeight: 700,
  marginBottom: "10px",
  textAlign: "center" as const,
  color: "#facc15",
};

const subHeadingStyle = {
  fontSize: "clamp(18px, 4vw, 22px)",
  fontWeight: 600,
  margin: "30px 0 15px",
  textAlign: "center" as const,
};

const lineStyle = {
  width: "60px",
  height: "4px",
  background: "#facc15",
  margin: "0 auto 20px",
  borderRadius: "2px",
};

const paragraphStyle = {
  fontSize: "clamp(14px, 3vw, 16px)",
  lineHeight: 1.7,
  color: "#ccc",
  marginBottom: "30px",
  maxWidth: "720px",
  marginLeft: "auto",
  marginRight: "auto",
};

const cardsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "linear-gradient(135deg, #161616, #1e1e1e)",
  color: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const cardTitle = {
  fontSize: "16px",
  fontWeight: 600,
  marginBottom: "6px",
};

const cardText = {
  fontSize: "14px",
  color: "#ccc",
  lineHeight: 1.6,
};
