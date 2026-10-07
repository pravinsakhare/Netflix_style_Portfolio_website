"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => prev?.focus();
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        className="relative z-10 max-w-3xl w-full p-6 glass-card rounded-md outline-none"
        tabIndex={-1}
        ref={ref}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-[#b3b3b3] mt-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies?.map((t: any, i: number) => (
                <span key={i} className="px-3 py-1 bg-black/60 rounded text-xs flex items-center gap-2">
                  <t.icon className="text-[#E50914]" />
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-end gap-2">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-brand-red text-white rounded">
                <FaExternalLinkAlt />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="px-3 py-2 bg-[#0f0f0f] text-white rounded border border-[rgba(229,9,20,0.12)]">
                <FaGithub />
              </a>
            )}
            <button onClick={onClose} className="text-sm text-[#b3b3b3] hover:text-white mt-2">Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
