"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/pravinsakhare",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/pravinsakhare",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      link: "mailto:pravinsakhare592@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            className="text-3xl font-bold text-[#E50914]"
            whileHover={{ scale: 1.05 }}
          >
            PS
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3b3b3] hover:text-[#E50914] transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["About", "Projects", "Skills", "Experience", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-[#b3b3b3] hover:text-[#E50914] transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-[#b3b3b3]">
            <p className="flex items-center gap-2 justify-center">
              Made with <FaHeart className="text-[#E50914]" /> by Pravin Sakhare
            </p>
            <p className="mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
