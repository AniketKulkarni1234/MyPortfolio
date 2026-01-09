"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.location.href = `mailto:kulaniket55@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Let's Work Together</h1>

      <p style={subHeadingStyle}>
        Ready to bring your ideas to life? I'm always excited to discuss new
        projects and opportunities. Let's create something amazing together.
      </p>

      <div style={lineStyle} />

      <div style={contactCard}>
        {/* CONTACT INFO */}
        <div style={infoWrapper}>
          <p style={contactInfo}>📧 kulaniket55@gmail.com</p>
          <p style={contactInfo}>📞 +91 8788336486</p>
          <p style={contactInfo}>📍 Chh. SambhajiNagar, India</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="yourname@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="subject"
            placeholder="Collaboration / Project Inquiry"
            required
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={textareaStyle}
          />

          <button type="submit" style={buttonStyle}>
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}

/* =========================
   STYLES (Responsive)
========================= */

const sectionStyle = {
  marginBottom: "60px",
  padding: "0 16px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
};

const headingStyle = {
  fontSize: "clamp(24px, 5vw, 34px)",
  fontWeight: 700,
  marginBottom: "10px",
  textAlign: "center" as const,
  color: "#facc15",
};

const subHeadingStyle = {
  fontSize: "14px",
  color: "#ccc",
  textAlign: "center" as const,
  maxWidth: "520px",
  marginBottom: "22px",
  lineHeight: "1.6",
};

const lineStyle = {
  width: "60px",
  height: "4px",
  background: "#facc15",
  marginBottom: "30px",
  borderRadius: "2px",
};

const contactCard = {
  background: "#161616",
  padding: "24px",
  borderRadius: "14px",
  boxShadow: "0 6px 25px rgba(0,0,0,0.35)",
  maxWidth: "520px",
  width: "100%",
};

const infoWrapper = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};

const contactInfo = {
  fontSize: "14px",
  color: "#ccc",
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "14px",
};

const inputStyle = {
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#1b1b1b",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none" as const,
  minHeight: "130px",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#facc15",
  color: "#000",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "15px",
  marginTop: "8px",
};
