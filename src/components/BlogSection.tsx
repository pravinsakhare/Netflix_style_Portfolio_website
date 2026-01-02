"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, Eye, ChevronRight, ExternalLink } from "lucide-react";
import { BlogPost, BLOG_CATEGORIES } from "@/types/blog";

// Author avatar constant
const AUTHOR_AVATAR = "/pravin-avatar.png";

// Sample blog posts for display (will be replaced with MongoDB data)
const SAMPLE_POSTS: Omit<BlogPost, '_id'>[] = [
  {
    title: "Getting Started with Kubernetes: A DevOps Engineer's Guide",
    slug: "getting-started-kubernetes-devops-guide",
    excerpt: "Learn the fundamentals of Kubernetes orchestration and how to deploy your first containerized application in a production-ready cluster.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "Kubernetes",
    tags: ["Kubernetes", "Docker", "DevOps", "Containers"],
    readingTime: 8,
    publishedAt: new Date("2024-01-15"),
    featured: true,
    views: 1245,
  },
  {
    title: "CI/CD Pipeline Best Practices with GitHub Actions",
    slug: "cicd-pipeline-best-practices-github-actions",
    excerpt: "Discover how to build efficient and secure CI/CD pipelines using GitHub Actions for automated testing, building, and deployment.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "CI/CD",
    tags: ["GitHub Actions", "CI/CD", "Automation", "DevOps"],
    readingTime: 6,
    publishedAt: new Date("2024-01-10"),
    featured: true,
    views: 892,
  },
  {
    title: "AWS EKS vs Self-Managed Kubernetes: Which One to Choose?",
    slug: "aws-eks-vs-self-managed-kubernetes",
    excerpt: "A comprehensive comparison between AWS EKS and self-managed Kubernetes clusters to help you make the right decision for your infrastructure.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "AWS",
    tags: ["AWS", "EKS", "Kubernetes", "Cloud Computing"],
    readingTime: 10,
    publishedAt: new Date("2024-01-05"),
    featured: false,
    views: 654,
  },
  {
    title: "Docker Security Best Practices for Production",
    slug: "docker-security-best-practices-production",
    excerpt: "Essential security practices every DevOps engineer should implement when running Docker containers in production environments.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "Docker",
    tags: ["Docker", "Security", "Containers", "DevOps"],
    readingTime: 7,
    publishedAt: new Date("2024-01-01"),
    featured: false,
    views: 432,
  },
  {
    title: "Infrastructure as Code with Terraform: Complete Tutorial",
    slug: "infrastructure-as-code-terraform-tutorial",
    excerpt: "Master Terraform from basics to advanced concepts. Learn how to manage your cloud infrastructure as code efficiently.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "Infrastructure",
    tags: ["Terraform", "IaC", "AWS", "Cloud Computing"],
    readingTime: 12,
    publishedAt: new Date("2023-12-28"),
    featured: true,
    views: 1089,
  },
  {
    title: "Monitoring Kubernetes with Prometheus and Grafana",
    slug: "monitoring-kubernetes-prometheus-grafana",
    excerpt: "Set up a complete monitoring stack for your Kubernetes cluster using Prometheus for metrics collection and Grafana for visualization.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    author: {
      name: "Pravin Sakhare",
      avatar: AUTHOR_AVATAR,
    },
    category: "DevOps",
    tags: ["Prometheus", "Grafana", "Kubernetes", "Monitoring"],
    readingTime: 9,
    publishedAt: new Date("2023-12-20"),
    featured: false,
    views: 756,
  },
];

function BlogCard({ post, index }: { post: Omit<BlogPost, '_id'>; index: number }) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.article
      className="group bg-[#1f1f1f] rounded-lg border border-[#333] overflow-hidden hover:border-[#E50914] transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Cover Image */}
      <div className="relative h-36 sm:h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent" />
        {post.featured && (
          <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#E50914] text-white text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            Featured
          </span>
        )}
        <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#141414]/80 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#b3b3b3] text-[10px] sm:text-sm mb-2 sm:mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {post.readingTime} min
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            {post.views}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-[#E50914] transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#b3b3b3] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs bg-[#141414] text-[#b3b3b3] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#333] hover:border-[#E50914] transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-[#E50914]/30"
            />
            <span className="text-[#b3b3b3] text-xs sm:text-sm">{post.author.name}</span>
          </div>
          <a 
            href={`https://pravinsakhare.hashnode.dev/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#E50914] text-xs sm:text-sm font-medium hover:gap-2 transition-all"
          >
            Read More
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [posts] = useState<Omit<BlogPost, '_id'>[]>(SAMPLE_POSTS);

  const categories = ["All", ...BLOG_CATEGORIES];

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="blog"
      className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a] min-h-screen"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Author intro with image */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <motion.img
              src={AUTHOR_AVATAR}
              alt="Pravin Sakhare"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#E50914]/50 shadow-lg shadow-[#E50914]/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                Technical <span className="text-[#E50914]">Blog</span>
              </h2>
              <p className="text-[#b3b3b3] text-xs sm:text-sm md:text-base">
                by <span className="text-white font-medium">Pravin Sakhare</span>
              </p>
            </div>
          </div>
          
          <p className="text-[#b3b3b3] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4">
            Articles and tutorials on DevOps, Cloud Computing, and Infrastructure
          </p>
          
          {/* Hashnode Link */}
          <motion.a
            href="https://pravinsakhare.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E50914] hover:text-white transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            <span>View all articles on Hashnode</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#E50914] text-white"
                  : "bg-[#1f1f1f] text-[#b3b3b3] border border-[#333] hover:border-[#E50914]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://pravinsakhare.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#E50914] text-[#E50914] px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#E50914] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
