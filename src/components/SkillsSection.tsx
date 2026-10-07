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
  "Used in production": [
    {
      name: "AWS (EC2, S3, CloudWatch, IAM)",
      icon: SiAmazon,
      proficiency: "Used in production",
      color: "#FF9900",
    },
    {
      name: "Linux",
      icon: SiLinux,
      proficiency: "Used in production",
      color: "#FCC624",
    },
    {
      name: "Bash",
      icon: SiGnubash,
      proficiency: "Used in production",
      color: "#4EAA25",
    },
    {
      name: "Python",
      icon: SiPython,
      proficiency: "Used in production",
      color: "#3776AB",
    },
    {
      name: "Kubernetes (troubleshooting)",
      icon: SiKubernetes,
      proficiency: "Used in production",
      color: "#326CE5",
    },
  ],
  "Hands-on projects": [
    {
      name: "Docker",
      icon: SiDocker,
      proficiency: "Hands-on projects",
      color: "#2496ED",
    },
    {
      name: "GitHub Actions",
      icon: SiGithub,
      proficiency: "Hands-on projects",
      color: "#FFFFFF",
    },
    {
      name: "CloudFormation",
      icon: FaAws,
      proficiency: "Hands-on projects",
      color: "#FF9900",
    },
    {
      name: "Git/GitHub",
      icon: SiGit,
      proficiency: "Hands-on projects",
      color: "#F05032",
    },
  ],
  "Monitoring & Incident Management": [
    {
      name: "CloudWatch",
      icon: FaAws,
      proficiency: "Used in production",
      color: "#FF9900",
    },
    {
      name: "Grafana",
      icon: SiApache,
      proficiency: "Used in production",
      color: "#F04E23",
    },
    {
      name: "Loki",
      icon: SiLinux,
      proficiency: "Used in production",
      color: "#FCC624",
    },
    {
      name: "Datadog",
      icon: SiAmazon,
      proficiency: "Used in production",
      color: "#FF9900",
    },
    {
      name: "Icinga",
      icon: FaNetworkWired,
      proficiency: "Used in production",
      color: "#E50914",
    },
    {
      name: "Jira Service Management",
      icon: FaShieldAlt,
      proficiency: "Used in production",
      color: "#E50914",
    },
    {
      name: "Incident Response",
      icon: FaShieldAlt,
      proficiency: "Used in production",
      color: "#E50914",
    },
    {
      name: "RCA & SOP writing",
      icon: FaShieldAlt,
      proficiency: "Used in production",
      color: "#E50914",
    },
  ],
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-[#0f0f0f] rounded-lg p-6 border border-[#222] transition-all duration-300 cursor-pointer glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="relative z-10">
        <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
        <h4 className="text-white font-semibold text-center mb-2">
          {skill.name}
        </h4>

        <div className="mt-4">
          <div className="h-2 bg-[#111] rounded overflow-hidden">
            <div
              className="h-2 bg-brand-red"
              style={{ width: getProficiencyWidth(skill.proficiency), transition: "width 500ms" }}
            />
          </div>
          <div className="mt-2 text-sm text-[#b3b3b3]">{skill.proficiency}</div>
        </div>
      </div>
    </motion.div>
  );
}

function getProficiencyWidth(level: string) {
  switch (level) {
    case "Used in production":
      return "90%";
    case "Hands-on projects":
      return "70%";
    case "Monitoring & Incident Management":
      return "80%";
    default:
      return "60%";
  }
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
