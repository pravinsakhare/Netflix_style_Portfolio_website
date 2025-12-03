"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiKubernetes, SiDocker } from "react-icons/si";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#1a0a0a] to-[#141414]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E50914] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Pravin Sakhare</span>
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-[#b3b3b3] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cloud & DevOps Engineer
          </motion.p>

          {/* Certification badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-[#1f1f1f] px-6 py-3 rounded-lg border border-[#E50914]/30"
              whileHover={{ scale: 1.05, borderColor: "#E50914" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(229, 9, 20, 0)",
                  "0 0 20px rgba(229, 9, 20, 0.3)",
                  "0 0 0 rgba(229, 9, 20, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaAws className="text-3xl text-[#FF9900]" />
              <div className="text-left">
                <p className="text-xs text-[#b3b3b3]">AWS Certified</p>
                <p className="text-sm font-semibold text-white">
                  Cloud Practitioner
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-[#1f1f1f] px-6 py-3 rounded-lg border border-[#E50914]/30"
              whileHover={{ scale: 1.05, borderColor: "#E50914" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(229, 9, 20, 0)",
                  "0 0 20px rgba(229, 9, 20, 0.3)",
                  "0 0 0 rgba(229, 9, 20, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <FaAws className="text-3xl text-[#FF9900]" />
              <div className="text-left">
                <p className="text-xs text-[#b3b3b3]">AWS</p>
                <p className="text-sm font-semibold text-white">
                  re/Start Graduate
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-[#1f1f1f] px-6 py-3 rounded-lg border border-[#E50914]/30"
              whileHover={{ scale: 1.05, borderColor: "#E50914" }}
            >
              <SiDocker className="text-2xl text-[#2496ED]" />
              <SiKubernetes className="text-2xl text-[#326CE5]" />
              <p className="text-sm font-semibold text-white">DevOps</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToProjects}
            className="relative px-12 py-4 bg-[#E50914] text-white text-lg font-semibold rounded-md overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#ff1a24]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(229, 9, 20, 0)",
                  "0 0 30px rgba(229, 9, 20, 0.6)",
                  "0 0 0 rgba(229, 9, 20, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#E50914] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#E50914] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
