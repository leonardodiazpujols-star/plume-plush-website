"use client";
import { useEffect } from "react";

export function AnimationsInit({ threshold = 0.12 }: { threshold?: number }) {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold]);

  return null;
}
