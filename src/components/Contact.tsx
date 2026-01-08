"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kulaniet55@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <section style={{ marginBottom: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={headingStyle}>Let's Work Together</h1>
      <p style={subHeadingStyle}>
        Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Let's create something amazing together.
      </p>
      <div style={lineStyle} />

      <div style={contactCard} className="hover-scale">
        <p style={contactInfo}>Email: kulaniket55@gmail.com</p>
        <p style={contactInfo}>Phone: +91 8788336486</p>
        <p style={contactInfo}>Location: Chh.SambhajiNagar, India</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
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
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

// Styles
const headingStyle = { fontSize: "32px", fontWeight: 700, marginBottom: "8px", textAlign: "center", color: "#facc15" };
const subHeadingStyle = { fontSize: "16px", color: "#ccc", textAlign: "center", maxWidth: "500px", marginBottom: "20px", lineHeight: "1.6" };
const lineStyle = { width: "60px", height: "4px", background: "#facc15", marginBottom: "30px", borderRadius: "2px" };
const contactCard = {
  background: "#161616",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
  maxWidth: "500px",
  width: "100%",
};
const contactInfo = { fontSize: "16px", marginBottom: "12px", color: "#ccc" };
const formStyle = { display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" };
const inputStyle = {
  padding: "14px 16px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#1b1b1b",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "all 0.3s",
};
const textareaStyle = { ...inputStyle, resize: "none", minHeight: "140px" };
const buttonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  background: "#facc15",
  color: "#000",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s",
  marginTop: "10px",
};
