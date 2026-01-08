"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const outline = document.querySelector(".cursor-outline") as HTMLElement;
    const text = document.querySelector(".cursor-text") as HTMLElement;

    let outlineX = 0;
    let outlineY = 0;

    // -----------------------------
    // MOUSE MOVE
    // -----------------------------
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;

      outlineX += (clientX - outlineX) * 0.15;
      outlineY += (clientY - outlineY) * 0.15;

      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;

      text.style.left = `${clientX}px`;
      text.style.top = `${clientY}px`;
    };

    // -----------------------------
    // AUTO HOVER DETECTION
    // -----------------------------
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("button, a, input, textarea, [role='button']")
      ) {
        outline.classList.add("hover");
        text.classList.add("show");

        if (target.closest("a")) text.innerText = "OPEN";
        else if (target.closest("button")) text.innerText = "CLICK";
        else text.innerText = "INTERACT";
      } else {
        outline.classList.remove("hover");
        text.classList.remove("show");
      }
    };

    // -----------------------------
    // AUTO MAGNETIC EFFECT
    // -----------------------------
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button, a, input, textarea"
      ) as HTMLElement;

      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      target.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetMagnetic = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button, a, input, textarea"
      ) as HTMLElement;

      if (target) target.style.transform = "translate(0px, 0px)";
    };

    // -----------------------------
    // CLICK RIPPLE
    // -----------------------------
    const click = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", handleMouseOver);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetMagnetic);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", handleMouseOver);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetMagnetic);
      window.removeEventListener("click", click);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
      <div className="cursor-text">CLICK</div>
    </>
  );
}
