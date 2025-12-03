"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";

interface TimelineItem {
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  icon: any;
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Growth Associate",
    organization: "Talenlio International Pvt. Ltd.",
    location: "Pune",
    period: "May 2025 - Jul 2025",
    description: [
      "Collaborated with IT team to understand platform architecture, technical stack, and cloud infrastructure",
      "Coordinated recruitment for 15+ cloud and software engineering positions with international clients",
      "Engaged with 500+ HR professionals for technical talent sourcing across India",
    ],
    icon: FaBriefcase,
  },
  {
    type: "certification",
    title: "AWS re/Start Graduate",
    organization: "Amazon Web Services School",
    location: "Pune",
    period: "2025",
    description: [
      "Completed intensive cloud computing training covering AWS services, fundamentals, and best practices",
      "Hands-on experience with EC2, S3, VPC, Lambda, RDS, and CloudFormation",
      "Learned DevOps practices, automation, and infrastructure as code",
    ],
    icon: FaAward,
  },
  {
    type: "certification",
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    location: "Valid: 2025-2028",
    period: "2025",
    description: [
      "Validated foundational knowledge of AWS Cloud concepts, security, pricing, and support",
      "Demonstrated understanding of AWS architectural principles and best practices",
      "Certified expertise in cloud computing fundamentals",
    ],
    icon: FaAward,
  },
  {
    type: "education",
    title: "Bachelor's Degree",
    organization: "DY Patil International University",
    location: "Pune",
    period: "2022 - 2025",
    description: [
      "GPA: 8.64/10.0",
      "Focused on cloud computing, networking, and software development",
      "Completed multiple cloud infrastructure and DevOps projects",
    ],
    icon: FaGraduationCap,
  },
  {
    type: "education",
    title: "Class 12th Board Examination",
    organization: "Higher Secondary Education",
    location: "India",
    period: "2022",
    description: [
      "Scored 80.67%",
      "Strong foundation in mathematics and computer science",
    ],
    icon: FaGraduationCap,
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "#E50914";
      case "certification":
        return "#FF9900";
      case "education":
        return "#326CE5";
      default:
        return "#E50914";
    }
  };

  return (
    <motion.div
      className={`flex items-center mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333] hover:border-[#E50914] transition-all duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{
            boxShadow: `0 0 20px ${getTypeColor(item.type)}40`,
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${getTypeColor(item.type)}20` }}
            >
              <item.icon
                className="text-2xl"
                style={{ color: getTypeColor(item.type) }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-[#b3b3b3]">{item.organization}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 text-sm text-[#b3b3b3]">
            <span>{item.location}</span>
            <span>•</span>
            <span>{item.period}</span>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mt-4">
              {item.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[#b3b3b3] flex items-start gap-2"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mt-3 text-sm font-semibold"
            style={{ color: getTypeColor(item.type) }}
          >
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline dot */}
      <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            className="w-6 h-6 rounded-full border-4 z-10 relative"
            style={{
              backgroundColor: getTypeColor(item.type),
              borderColor: "#141414",
            }}
            whileHover={{ scale: 1.5 }}
            animate={{
              boxShadow: [
                `0 0 0 ${getTypeColor(item.type)}00`,
                `0 0 20px ${getTypeColor(item.type)}80`,
                `0 0 0 ${getTypeColor(item.type)}00`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 bg-[#141414] min-h-screen relative"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-[#b3b3b3]">
            My professional journey and achievements
          </p>
        </motion.div>

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#E50914] h-[calc(100%-200px)] top-[150px] hidden md:block" />

        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
