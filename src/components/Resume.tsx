"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReact,
} from "react-icons/si";

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const education = [
    {
      school: "Om Vidyalaya SSC Board",
      duration: "2019 – 2020",
      course: "10th | 97.20%",
    },
    {
      school: "Government Polytechnic College, CHH. SambhajiNagar",
      duration: "2021 – 2023",
      course: "Diploma-IT (CGPA: 9.00)",
    },
    {
      school: "Government College Of Engineering, CHH. SambhajiNagar",
      duration: "2024 – 2027",
      course: "B.Tech-CSE (CGPA: 8.5)",
    },
  ];

  const experience = [
    {
      role: "Web Development Intern – Mountreach Solution Pvt Ltd, Amravati",
      duration: "2023 – Aug 2023",
    },
  ];

  const skills = {
    Frontend: [
      { name: "HTML", level: 85, icon: <FaHtml5 color="#E34F26" />, color: "#E34F26" },
      { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss color="#38BDF8" />, color: "#38BDF8" },
      { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" />, color: "#F7DF1E" },
      { name: "React.js", level: 75, icon: <FaReact color="#61DAFB" />, color: "#61DAFB" },
      { name: "Next.js", level: 70, icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "TypeScript", level: 65, icon: <SiTypescript color="#3178C6" />, color: "#3178C6" },
    ],
    Backend: [
      { name: "Node.js", level: 70, icon: <FaNodeJs color="#68A063" />, color: "#68A063" },
      { name: "Express.js", level: 65, icon: <SiExpress />, color: "#ffffff" },
      { name: "MongoDB", level: 70, icon: <SiMongodb color="#4DB33D" />, color: "#4DB33D" },
      { name: "REST API", level: 65, icon: <SiPostman color="#FF6C37" />, color: "#FF6C37" },
    ],
    "Other Tools": [
      { name: "Git", level: 70, icon: <FaGitAlt color="#F05032" />, color: "#F05032" },
      { name: "GitHub", level: 75, icon: <FaGithub />, color: "#ffffff" },
      { name: "React Native", level: 60, icon: <SiReact color="#61DAFB" />, color: "#61DAFB" },
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      style={{
        position: "relative",
        paddingLeft: isMobile ? "20px" : "80px",
        paddingRight: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Resume</h1>
      <div style={{ width: "50px", height: "4px", background: "#facc15", marginBottom: "30px" }} />

      {/* TIMELINE (DESKTOP ONLY) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            left: "36px",
            top: "90px",
            bottom: "20px",
            width: "4px",
            background: "#facc15",
            borderRadius: "2px",
          }}
        />
      )}

      {/* EDUCATION */}
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Education</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {education.map((edu, idx) => (
          <motion.li
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              paddingLeft: isMobile ? "0px" : "40px",
            }}
          >
            {!isMobile && (
              <span
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "0",
                  width: "28px",
                  height: "28px",
                  background: "#facc15",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1b1b1b",
                }}
              >
                <FaGraduationCap size={14} />
              </span>
            )}
            <strong>{edu.school}</strong>
            <p style={{ fontSize: "14px" }}>
              {edu.duration} | {edu.course}
            </p>
          </motion.li>
        ))}
      </ul>

      {/* EXPERIENCE */}
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Experience</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {experience.map((exp, idx) => (
          <motion.li
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "40px",
              paddingLeft: isMobile ? "0px" : "40px",
            }}
          >
            {!isMobile && (
              <span
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "0",
                  width: "28px",
                  height: "28px",
                  background: "#facc15",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1b1b1b",
                }}
              >
                <FaBriefcase size={14} />
              </span>
            )}
            <strong>{exp.role}</strong>
            <p style={{ fontSize: "14px" }}>{exp.duration}</p>
          </motion.li>
        ))}
      </ul>

      {/* SKILLS */}
      <h2 style={{ fontSize: "22px", marginBottom: "25px" }}>My Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "35px" }}>
          <h3 style={{ marginBottom: "15px" }}>{category}</h3>

          {items.map((skill, idx) => (
            <div key={idx} style={{ marginBottom: "14px", maxWidth: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ display: "flex", gap: "8px" }}>
                  {skill.icon} {skill.name}
                </span>
                <span>{skill.level}%</span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#2a2a2a",
                  borderRadius: "4px",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background: skill.color,
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
