"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PROFILES = [
  { key: "recruiter", label: "Recruiter", target: "experience" },
  { key: "hiring", label: "Hiring Manager", target: "projects" },
  { key: "dev", label: "Developer", target: "skills" },
];

export default function IntroPicker() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("intro_seen");
      if (!seen) setVisible(true);
    } catch (e) {
      // sessionStorage may be unavailable — silently skip
    }
  }, []);

  const choose = (target: string) => {
    try {
      sessionStorage.setItem("intro_seen", "1");
    } catch {}
    setVisible(false);
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        className="relative z-10 max-w-2xl w-full p-6 glass-card rounded-lg"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-4">Who's watching?</h3>
        <p className="text-sm text-soft-gray mb-4">Choose a profile to personalize the experience.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PROFILES.map((p) => (
            <button
              key={p.key}
              onClick={() => choose(p.target)}
              className="p-4 rounded-md bg-[#0f0f0f] hover:bg-[#121212] text-left"
            >
              <div className="text-lg font-semibold">{p.label}</div>
              <div className="text-xs text-[#b3b3b3] mt-1">Quick jump to {p.target}</div>
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => { try { sessionStorage.setItem("intro_seen", "1"); } catch {} setVisible(false); }}
            className="text-sm text-[#b3b3b3] hover:text-white"
          >
            Skip
          </button>
        </div>
      </motion.div>
    </div>
  );
}
