"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiKubernetes, SiDocker } from "react-icons/si";
import { useState, useEffect } from "react";

// Static particle positions - defined outside component to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 50, top: 66 }, { left: 87, top: 25 }, { left: 24, top: 84 }, { left: 61, top: 43 }, { left: 98, top: 2 },
  { left: 35, top: 61 }, { left: 72, top: 20 }, { left: 9, top: 79 }, { left: 46, top: 38 }, { left: 83, top: 97 },
  { left: 20, top: 56 }, { left: 57, top: 15 }, { left: 94, top: 74 }, { left: 31, top: 33 }, { left: 68, top: 92 },
  { left: 5, top: 51 }, { left: 42, top: 10 }, { left: 79, top: 69 }, { left: 16, top: 28 }, { left: 53, top: 87 },
  { left: 90, top: 46 }, { left: 27, top: 5 }, { left: 64, top: 64 }, { left: 1, top: 23 }, { left: 38, top: 82 },
  { left: 75, top: 41 }, { left: 12, top: 0 }, { left: 49, top: 59 }, { left: 86, top: 18 }, { left: 23, top: 77 },
  { left: 60, top: 36 }, { left: 97, top: 95 }, { left: 34, top: 54 }, { left: 71, top: 13 }, { left: 8, top: 72 },
  { left: 45, top: 31 }, { left: 82, top: 90 }, { left: 19, top: 49 }, { left: 56, top: 8 }, { left: 93, top: 67 },
  { left: 30, top: 26 }, { left: 67, top: 85 }, { left: 4, top: 44 }, { left: 41, top: 3 }, { left: 78, top: 62 },
  { left: 15, top: 21 }, { left: 52, top: 80 }, { left: 89, top: 39 }, { left: 26, top: 98 }, { left: 63, top: 57 },
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:py-0 bg-near-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-red-gradient opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 film-grain opacity-30" />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 sm:mb-6 break-words tracking-tight" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Pravin Sakhare</span>
          </motion.h1>

          <motion.p
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-soft-gray mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cloud Operations Engineer | DevOps | SRE
          </motion.p>

          {/* Certification badges */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-[#0f0f0f] px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[rgba(229,9,20,0.18)] w-full sm:w-auto max-w-[280px]"
              whileHover={{ scale: 1.03 }}
            >
              <FaAws className="text-2xl sm:text-3xl text-[#FF9900] flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-[#b3b3b3]">AWS Certified</p>
                <p className="text-sm font-semibold text-white">Cloud Practitioner</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-[#0f0f0f] px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[rgba(229,9,20,0.12)] w-full sm:w-auto max-w-[280px]"
              whileHover={{ scale: 1.03 }}
            >
              <FaAws className="text-2xl sm:text-3xl text-[#FF9900] flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-[#b3b3b3]">AWS</p>
                <p className="text-sm font-semibold text-white">re/Start Graduate</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 sm:gap-3 bg-[#0f0f0f] px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[rgba(229,9,20,0.06)] w-full sm:w-auto max-w-[280px]"
              whileHover={{ scale: 1.03 }}
            >
              <SiDocker className="text-xl sm:text-2xl text-[#2496ED] flex-shrink-0" />
              <SiKubernetes className="text-xl sm:text-2xl text-[#326CE5] flex-shrink-0" />
              <p className="text-sm font-semibold text-white">DevOps</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToProjects}
            className="relative px-8 sm:px-12 py-3 sm:py-4 bg-brand-red text-white text-base sm:text-lg font-semibold rounded-md overflow-hidden group red-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[rgba(229,9,20,0.9)] to-[rgba(255,26,36,0.9)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.35 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
