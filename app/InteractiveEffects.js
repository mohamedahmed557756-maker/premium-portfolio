"use client";

import { useEffect } from "react";

export default function InteractiveEffects() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section, .service-card, .project, .process-grid > div, .workflow-node"
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-element");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const cursorDot = document.createElement("div");
    cursorDot.className = "custom-cursor-dot";
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    animateCursor();

    const interactiveElements = document.querySelectorAll(
      "a, button, .service-card, .project, .workflow-node"
    );

    const addCursorHover = () => {
      cursor.classList.add("cursor-hover");
    };

    const removeCursorHover = () => {
      cursor.classList.remove("cursor-hover");
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addCursorHover);
      element.addEventListener("mouseleave", removeCursorHover);
    });

    const magneticButtons = document.querySelectorAll(
      ".hero-button, .nav-cta, .contact-button"
    );

    const magneticMove = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    };

    const magneticLeave = (event) => {
      event.currentTarget.style.transform = "";
    };

    magneticButtons.forEach((button) => {
      button.addEventListener("mousemove", magneticMove);
      button.addEventListener("mouseleave", magneticLeave);
    });

    const hero = document.querySelector(".hero");
    const visual = document.querySelector(".hero-visual");

    const handleParallax = () => {
      if (!hero || !visual) return;

      const scrollY = window.scrollY;

      visual.style.transform = `
        translateY(${scrollY * 0.12}px)
        rotate(${scrollY * 0.015}deg)
      `;
    };

    window.addEventListener("scroll", handleParallax);

    const cards = document.querySelectorAll(
      ".service-card, .project, .floating-card"
    );

    cards.forEach((card) => {
      const handleCardMove = (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-6px)
        `;
      };

      const handleCardLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", handleCardMove);
      card.addEventListener("mouseleave", handleCardLeave);
    });

    return () => {
      observer.disconnect();

      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleParallax);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addCursorHover);
        element.removeEventListener("mouseleave", removeCursorHover);
      });

      magneticButtons.forEach((button) => {
        button.removeEventListener("mousemove", magneticMove);
        button.removeEventListener("mouseleave", magneticLeave);
      });

      cards.forEach((card) => {
        card.style.transform = "";
      });

      cursor.remove();
      cursorDot.remove();
    };
  }, []);

  return null;
}
