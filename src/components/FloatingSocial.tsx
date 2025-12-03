"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FloatingSocial() {
  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/pravinsakhare",
      label: "GitHub",
      color: "#FFFFFF",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/pravinsakhare",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaEnvelope,
      link: "mailto:pravinsakhare592@gmail.com",
      label: "Email",
      color: "#E50914",
    },
  ];

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 flex flex-col gap-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1f1f1f] p-3 rounded-full border border-[#333] hover:border-[#E50914] transition-all duration-300 group"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          title={social.label}
        >
          <social.icon
            className="text-xl"
            style={{ color: social.color }}
          />
          
          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1f1f1f] px-3 py-1 rounded-md border border-[#E50914] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            initial={{ opacity: 0 }}
          >
            <span className="text-white text-sm">{social.label}</span>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
}
