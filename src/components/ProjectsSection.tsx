"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiAmazon,
  SiTypescript,
  SiTailwindcss,
  SiApache,
  SiDocker,
  SiKubernetes,
  SiGithub,
} from "react-icons/si";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string; icon: any }[];
  liveDemo?: string;
  github?: string;
}

const fallbackImage =
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80";

const projects = {
  "AWS Cloud Projects": [
    {
      title: "PixelFlare Photo Studio",
      description:
        "Full-stack photo studio website with responsive design. Implemented AWS DynamoDB for data storage, S3 for media hosting, CloudFront for CDN, and EC2 with Apache2 for deployment. Features modern UI/UX designed with Figma.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80",
      technologies: [
        { name: "AWS", icon: SiAmazon },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      liveDemo: "https://gzzmonk.me/",
      github: "https://github.com/pravinsakhare/pixelflare-photo-studio",
    },
    {
      title: "Secure Static Website Deployment",
      description:
        "Production-ready static website deployment on AWS EC2 with automated SSL certificate management via Let's Encrypt. Configured Apache virtual hosts, HTTPS redirection, Route53 domain management, and implemented AWS security best practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      technologies: [
        { name: "AWS EC2", icon: SiAmazon },
        { name: "Apache", icon: SiApache },
      ],
      liveDemo: "https://gzzmonk.me/",
      github: "https://github.com/pravinsakhare/aws-secure-website-deployment-guide",
    },
    {
      title: "Kubernetes CI/CD Platform Lab",
      description: "// TODO: one-line description from repo README",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
      technologies: [
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Docker", icon: SiDocker },
        { name: "GitHub Actions", icon: SiGithub },
      ],
      github: "https://github.com/pravinsakhare/platform-engineering-lab",
    },
    {
      title: "3-Tier AWS Web Application",
      description: "// TODO: repo URL and one-line description",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      technologies: [{ name: "AWS", icon: SiAmazon }],
      github: "https://github.com/pravinsakhare/3-tier-aws-webapp",
    },
  ],
  "DevOps & Infrastructure": [
    {
      title: "PixelFlare Photo Studio",
      description:
        "Full-stack photo studio website with responsive design. Implemented AWS DynamoDB for data storage, S3 for media hosting, CloudFront for CDN, and EC2 with Apache2 for deployment. Features modern UI/UX designed with Figma.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80",
      technologies: [
        { name: "AWS", icon: SiAmazon },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      liveDemo: "https://gzzmonk.me/",
      github: "https://github.com/pravinsakhare/pixelflare-photo-studio",
    },
    {
      title: "Secure Static Website Deployment",
      description:
        "Production-ready static website deployment on AWS EC2 with automated SSL certificate management via Let's Encrypt. Configured Apache virtual hosts, HTTPS redirection, Route53 domain management, and implemented AWS security best practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      technologies: [
        { name: "AWS EC2", icon: SiAmazon },
        { name: "Apache", icon: SiApache },
      ],
      github: "https://github.com/pravinsakhare/aws-secure-website-deployment-guide",
    },
  ],
};

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const reveal = isHovered || isFocused;

  const openProject = (event?: React.MouseEvent | React.KeyboardEvent) => {
    event?.stopPropagation();
    onOpen(project);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(event);
    }
  };

  return (
    <motion.div
      tabIndex={0}
      role="button"
      aria-label={`Open project details for ${project.title}`}
      onKeyDown={onKeyDown}
      onClick={openProject}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={{ scale: 1.03, y: -4, zIndex: 10 }}
      transition={{ duration: 0.25 }}
      className="group relative snap-start flex-shrink-0 w-[85vw] sm:w-[350px] h-[220px] sm:h-[200px] rounded-xl overflow-visible cursor-pointer select-none outline-none"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#333] bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <img
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          loading="lazy"
          onError={(event) => {
            const target = event.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = fallbackImage;
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="rounded-md border border-[#333] bg-black/70 px-2 py-1 text-[10px] text-white sm:text-xs"
            >
              <span className="flex items-center gap-1">
                <tech.icon className="text-[10px] text-[#E50914] sm:text-xs" />
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: reveal ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-6 text-center md:pointer-events-auto md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
        >
          <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
          <p className="mb-4 max-w-full text-sm text-[#b3b3b3]">{project.description}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {project.liveDemo && !project.liveDemo.includes("github.com") && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#E50914] px-3 py-2 text-xs font-semibold text-white"
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
                className="inline-flex items-center gap-2 rounded-md border border-[#E50914]/30 bg-[#1f1f1f] px-3 py-2 text-xs font-semibold text-white"
                whileHover={{ scale: 1.05, borderColor: "#E50914" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                GitHub
              </motion.a>
            )}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen(project);
              }}
              className="rounded-md border border-[rgba(229,9,20,0.18)] bg-[#0f0f0f] px-3 py-2 text-xs font-semibold text-white"
            >
              Details
            </button>
          </div>
        </motion.div>
      </div>
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
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollProjects = (direction: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      ref={ref}
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Scroll projects left"
            onClick={() => scrollProjects("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#333] bg-[#1f1f1f] text-[#E50914] transition-colors hover:border-[#E50914]"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Scroll projects right"
            onClick={() => scrollProjects("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#333] bg-[#1f1f1f] text-[#E50914] transition-colors hover:border-[#E50914]"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, idx) => (
            <ProjectCard key={`${title}-${idx}`} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
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
    </section>
  );
}
