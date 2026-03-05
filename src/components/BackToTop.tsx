"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => setEnabled(data.backToTop))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!enabled) return;
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#155dfc] text-white shadow-lg shadow-[#155dfc]/25 transition-all duration-300 hover:bg-[#1447e6] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
        <path d="M10 15V5m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
