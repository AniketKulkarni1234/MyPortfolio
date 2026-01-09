"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  // ✅ TS-safe ref: array of HTMLDivElement | null
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Optional: intersection observer for fade-in
  useEffect(() => {
    cardsRef.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) observer.unobserve(entry.target);
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
      demo: "#",
      github: "https://github.com/AniketKulkarni1234/Job-Portal",
    },
    {
      title: "Smart E-Commerce Recommender System",
      description:
        "Built a full-stack e-commerce application with product recommendation, user authentication, REST APIs, and managed data using MongoDB. Deployed on AWS & Vercel.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AWS", "Vercel"],
      date: "May 2025",
      demo: "#",
      github: "https://github.com/AniketKulkarni1234/Ecommerce-Recommender",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing skills, projects & achievements with smooth animations and responsive design.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      date: "Jan 2026",
      demo: "#",
      github: "https://github.com/AniketKulkarni1234/Portfolio",
    },
    {
      title: "AlgoVision Visualizer",
      description:
        "Algorithm visualizer for searching, sorting, and pathfinding with step-by-step animations.",
      tech: ["React.js", "JavaScript", "CSS", "HTML", "Algorithms"],
      date: "Dec 2025",
      demo: "#",
      github: "https://github.com/AniketKulkarni1234/AlgoVision",
    },
  ];

  return (
    <section style={{ padding: isMobile ? "20px 0" : "40px 0" }}>
      <h1 style={{ fontSize: isMobile ? "24px" : "30px", marginBottom: "8px" }}>Projects</h1>

      <div style={{ width: "50px", height: "4px", background: "#facc15", marginBottom: "30px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: isMobile ? "20px" : "30px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            // ✅ TS-safe ref: explicit void
            ref={(el) => {
              cardsRef.current[index] = el; // assign element
              return; // ensure void
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            style={{
              background: "#161616",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ fontSize: isMobile ? "18px" : "20px", marginBottom: "6px", color: "#facc15" }}>
                {project.title}
              </h3>
              <span style={{ fontSize: "12px", color: "#aaa" }}>{project.date}</span>
              <p style={{ fontSize: isMobile ? "14px" : "15px", margin: "12px 0", lineHeight: 1.6, color: "#ccc" }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
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

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px" }}>
              <a
                href={project.demo}
                target="_blank"
                style={{
                  textAlign: "center",
                  padding: "8px",
                  backgroundColor: "#facc15",
                  color: "#000",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                style={{
                  textAlign: "center",
                  padding: "8px",
                  backgroundColor: "#1b1b1b",
                  border: "1px solid #facc15",
                  color: "#facc15",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
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
