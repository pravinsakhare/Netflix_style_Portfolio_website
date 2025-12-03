"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiAmazon,
  SiTypescript,
  SiTailwindcss,
  SiApache,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiMysql,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string; icon: any }[];
  liveDemo?: string;
  github?: string;
}

const projects = {
  "AWS Cloud Projects": [
    {
      title: "PixelFlare Photo Studio",
      description:
        "Full-stack photo studio website with responsive design. Implemented AWS DynamoDB for data storage, S3 for media hosting, CloudFront for CDN, and EC2 with Apache2 for deployment. Features modern UI/UX designed with Figma.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      technologies: [
        { name: "AWS", icon: SiAmazon },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      liveDemo: "https://gzzmonk.me/",
      github: "https://github.com/pravinsakhare",
    },
    {
      title: "Secure Static Website Deployment",
      description:
        "Production-ready static website deployment on AWS EC2 with automated SSL certificate management via Let's Encrypt. Configured Apache virtual hosts, HTTPS redirection, Route53 domain management, and implemented AWS security best practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      technologies: [
        { name: "AWS EC2", icon: SiAmazon },
        { name: "Apache", icon: SiApache },
      ],
      liveDemo: "https://github.com/pravinsakhare/aws-secure-website-deployment-guide",
      github: "https://github.com/pravinsakhare/aws-secure-website-deployment-guide",
    },
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Automated cloud infrastructure provisioning using AWS CloudFormation and Terraform. Implemented VPC configuration, security groups, load balancers, and auto-scaling groups for high availability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      technologies: [
        { name: "AWS", icon: SiAmazon },
        { name: "Python", icon: SiPython },
      ],
      github: "https://github.com/pravinsakhare",
    },
  ],
  "DevOps & Infrastructure": [
    {
      title: "Container Orchestration",
      description:
        "Kubernetes cluster setup and management for microservices deployment. Implemented CI/CD pipelines with automated testing, Docker containerization, and monitoring with CloudWatch.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      technologies: [
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Docker", icon: SiDocker },
      ],
      github: "https://github.com/pravinsakhare",
    },
    {
      title: "Database Management System",
      description:
        "Designed and implemented relational database solutions using MySQL and AWS RDS. Optimized queries, implemented backup strategies, and ensured data security with encryption.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      technologies: [
        { name: "MySQL", icon: SiMysql },
        { name: "AWS RDS", icon: SiAmazon },
      ],
      github: "https://github.com/pravinsakhare",
    },
    {
      title: "Network Security Implementation",
      description:
        "Implemented comprehensive network security using AWS VPC, security groups, NACLs, and VPN. Conducted security audits with Nmap and AWS Inspector for vulnerability assessment.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      technologies: [
        { name: "AWS", icon: SiAmazon },
        { name: "Python", icon: SiPython },
      ],
      github: "https://github.com/pravinsakhare",
    },
  ],
};

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[350px] h-[200px] rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Tech badges at bottom */}
      <div className="absolute bottom-3 left-3 flex gap-2">
        {project.technologies.map((tech, idx) => (
          <div
            key={idx}
            className="bg-black/70 px-2 py-1 rounded flex items-center gap-1"
          >
            <tech.icon className="text-sm text-[#E50914]" />
            <span className="text-xs text-white">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {project.title}
        </h3>
        <p className="text-sm text-[#b3b3b3] mb-4 text-center line-clamp-3">
          {project.description}
        </p>

        <div className="flex gap-3">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#E50914] text-white rounded-md text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] text-white rounded-md text-sm font-semibold border border-[#E50914]/30"
              whileHover={{ scale: 1.05, borderColor: "#E50914" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectRow({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
        {title}
      </h3>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 bg-[#141414] min-h-screen"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#b3b3b3]">
            Explore my cloud engineering and DevOps implementations
          </p>
        </motion.div>

        {Object.entries(projects).map(([category, categoryProjects]) => (
          <ProjectRow
            key={category}
            title={category}
            projects={categoryProjects}
          />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
