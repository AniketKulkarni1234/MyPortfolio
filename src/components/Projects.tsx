"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    });
  }, []);

  const projects = [
    {
      title: "Full Stack Job Portal Application",
      description:
        "Developed a full-stack job portal with authentication, CRUD operations for job postings, job application functionality, and secured REST APIs using JWT.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      date: "Feb 2024",
      demo: "#", // replace with live demo URL
      github: "https://github.com/AniketKulkarni1234/Job-Portal",
    },
    {
      title: "Smart E-Commerce Recommender System",
      description:
        "Built a full-stack e-commerce application with product recommendation, user authentication, REST APIs, and managed data using MongoDB. Deployed on AWS & Vercel.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AWS", "Vercel"],
      date: "May 2025",
      demo: "#", // replace with live demo URL
      github: "https://github.com/AniketKulkarni1234/Ecommerce-Recommender",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and achievements. Features smooth animations, responsive design, dark mode, and interactive sections.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      date: "Jan 2026",
      demo: "#", // replace with live demo URL
      github: "https://github.com/AniketKulkarni1234/Portfolio",
    },
    {
      title: "AlgoVision Visualizer",
      description:
        "Visualizer for algorithms: searching, sorting, and pathfinding algorithms with step-by-step animation. Allows changing array size, animation speed, and supports multiple algorithms.",
      tech: ["React.js", "JavaScript", "CSS", "HTML", "Algorithms"],
      date: "Dec 2025",
      demo: "#", // replace with live demo URL
      github: "https://github.com/AniketKulkarni1234/AlgoVision",
    },
  ];

  return (
    <section style={{ padding: "30px 0" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Projects</h1>
      <div
        className="line"
        style={{ width: "50px", height: "4px", background: "#facc15", margin: "10px 0 30px 0" }}
      ></div>

      <div
        className="project-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el!)}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(250, 204, 21, 0.4)" }}
            style={{
              background: "#161616",
              padding: "25px",
              borderRadius: "16px",
              minHeight: "250px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px", marginBottom: "6px", color: "#facc15" }}>
                {project.title}
              </h3>
              <span style={{ fontSize: "13px", color: "#aaa", marginBottom: "12px", display: "block" }}>
                {project.date}
              </span>
              <p style={{ fontSize: "15px", marginBottom: "15px", lineHeight: 1.6, color: "#ccc" }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "#2a2a2a",
                    color: "#facc15",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
              <a
                href={project.demo}
                target="_blank"
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#facc15",
                  color: "#000",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#1b1b1b",
                  border: "1px solid #facc15",
                  color: "#facc15",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "transform 0.3s, background 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.background = "#facc15";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "#1b1b1b";
                  e.currentTarget.style.color = "#facc15";
                }}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
