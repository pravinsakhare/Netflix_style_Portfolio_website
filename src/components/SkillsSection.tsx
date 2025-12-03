"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiMysql,
  SiLinux,
  SiGit,
  SiGithub,
  SiTerraform,
  SiJenkins,
  SiNginx,
  SiApache,
  SiGnubash,
  SiUbuntu,
  SiCentos,
} from "react-icons/si";
import { FaAws, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

interface Skill {
  name: string;
  icon: any;
  proficiency: string;
  color: string;
}

const skillCategories = {
  "Cloud Platforms": [
    {
      name: "AWS Compute Services",
      icon: SiAmazon,
      proficiency: "Advanced",
      color: "#FF9900",
    },
    {
      name: "AWS Storage Services",
      icon: SiAmazon,
      proficiency: "Advanced",
      color: "#FF9900",
    },
    {
      name: "AWS Database Services",
      icon: SiAmazon,
      proficiency: "Advanced",
      color: "#FF9900",
    },
    {
      name: "Amazon Serverless",
      icon: SiAmazon,
      proficiency: "Intermediate",
      color: "#FF9900",
    },
    {
      name: "AWS Networking Services",
      icon: SiAmazon,
      proficiency: "Advanced",
      color: "#FF9900",
    },
    {
      name: "CloudFormation",
      icon: FaAws,
      proficiency: "Intermediate",
      color: "#FF9900",
    },
  ],
  "DevOps & Containers": [
    {
      name: "Docker",
      icon: SiDocker,
      proficiency: "Advanced",
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      proficiency: "Intermediate",
      color: "#326CE5",
    },
    {
      name: "Git",
      icon: SiGit,
      proficiency: "Advanced",
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      proficiency: "Advanced",
      color: "#FFFFFF",
    },
    {
      name: "Terraform",
      icon: SiTerraform,
      proficiency: "Intermediate",
      color: "#7B42BC",
    },
    {
      name: "Jenkins",
      icon: SiJenkins,
      proficiency: "Intermediate",
      color: "#D24939",
    },
  ],
  "Programming & Scripting": [
    {
      name: "Python",
      icon: SiPython,
      proficiency: "Advanced",
      color: "#3776AB",
    },
    {
      name: "Bash",
      icon: SiGnubash,
      proficiency: "Advanced",
      color: "#4EAA25",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      proficiency: "Intermediate",
      color: "#4479A1",
    },
  ],
  "Operating Systems": [
    {
      name: "Linux",
      icon: SiLinux,
      proficiency: "Advanced",
      color: "#FCC624",
    },
    {
      name: "Ubuntu",
      icon: SiUbuntu,
      proficiency: "Advanced",
      color: "#E95420",
    },
    {
      name: "CentOS",
      icon: SiCentos,
      proficiency: "Intermediate",
      color: "#262577",
    },
  ],
  "Web Servers & Security": [
    {
      name: "Apache",
      icon: SiApache,
      proficiency: "Advanced",
      color: "#D22128",
    },
    {
      name: "Nginx",
      icon: SiNginx,
      proficiency: "Intermediate",
      color: "#009639",
    },
    {
      name: "Networking",
      icon: FaNetworkWired,
      proficiency: "Advanced",
      color: "#E50914",
    },
    {
      name: "Security",
      icon: FaShieldAlt,
      proficiency: "Intermediate",
      color: "#E50914",
    },
  ],
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-[#1f1f1f] rounded-lg p-6 border border-[#333] hover:border-[#E50914] transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
        <h4 className="text-white font-semibold text-center mb-2">
          {skill.name}
        </h4>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#E50914]/20 to-transparent rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-black/90 px-4 py-2 rounded-md">
            <p className="text-[#E50914] font-semibold text-sm">
              {skill.proficiency}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={
          isHovered
            ? {
                boxShadow: [
                  "0 0 0 rgba(229, 9, 20, 0)",
                  "0 0 20px rgba(229, 9, 20, 0.5)",
                  "0 0 0 rgba(229, 9, 20, 0)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-[#b3b3b3]">
            Technologies and tools I work with
          </p>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#E50914] mr-3 rounded"></span>
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
