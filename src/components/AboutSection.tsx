"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAws, FaCloud, FaCode, FaServer } from "react-icons/fa";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: FaAws,
      title: "AWS Certified",
      description: "Cloud Practitioner with hands-on AWS experience",
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure",
      description: "Expert in EC2, S3, VPC, Lambda, and CloudFormation",
    },
    {
      icon: FaCode,
      title: "DevOps Practices",
      description: "CI/CD, Docker, Kubernetes, and automation",
    },
    {
      icon: FaServer,
      title: "System Administration",
      description: "Linux, networking, and security implementation",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#141414] min-h-screen"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-[#b3b3b3] max-w-3xl mx-auto">
            AWS re/Start graduate with hands-on experience in cloud
            infrastructure and DevOps practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E50914] to-transparent opacity-20 rounded-lg blur-xl" />
              <div className="relative bg-[#1f1f1f] p-8 rounded-lg border border-[#333]">
                <p className="text-[#b3b3b3] text-lg leading-relaxed mb-6">
                  I'm a passionate Cloud and DevOps Engineer with expertise in
                  AWS services and modern infrastructure practices. As an AWS
                  Certified Cloud Practitioner and re/Start graduate, I bring
                  practical knowledge in cloud deployment, automation, and
                  system administration.
                </p>
                <p className="text-[#b3b3b3] text-lg leading-relaxed mb-6">
                  My experience spans from building full-stack applications with
                  cloud-native architectures to implementing secure,
                  production-ready infrastructure. I'm skilled in containerization,
                  CI/CD pipelines, and infrastructure as code.
                </p>
                <p className="text-[#b3b3b3] text-lg leading-relaxed">
                  I'm always eager to learn new technologies and contribute to
                  innovative cloud solutions that drive business value.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333] hover:border-[#E50914] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="bg-[#E50914]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-2xl text-[#E50914]" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#b3b3b3]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "2", label: "AWS Certifications" },
            { number: "500+", label: "Professionals Engaged" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333] text-center"
              whileHover={{
                scale: 1.05,
                borderColor: "#E50914",
                boxShadow: "0 0 20px rgba(229, 9, 20, 0.3)",
              }}
            >
              <div className="text-4xl font-bold text-[#E50914] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#b3b3b3]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
