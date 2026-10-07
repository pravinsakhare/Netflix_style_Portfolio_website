"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, Clock3 } from "lucide-react";

const article = {
  title: "// TODO: add article title",
  summary: "// TODO: add a short summary for the featured article",
  date: "// TODO: add article date",
  readTime: "// TODO: add read time",
  url: "// TODO: add article URL",
  image: "// TODO: add article image URL",
  tag: "Cloud Operations",
};

export default function BlogSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
      className="bg-[#0a0a0a] py-20"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Featured Article
          </h2>
          <p className="mt-3 text-base text-[#b3b3b3] md:text-lg">
            Practical notes on Cloud Operations, DevOps, and infrastructure.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group overflow-hidden rounded-2xl border border-[#333] bg-[#111111] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[#E50914]"
        >
          <div className="grid gap-0 md:grid-cols-[1.2fr_2fr]">
            <div className="relative min-h-[220px] overflow-hidden border-b border-[#333] md:min-h-full md:border-b-0 md:border-r">
              <img
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="mb-4 inline-flex w-fit rounded-full border border-[#333] bg-[#1f1f1f] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[#E50914]">
                {article.tag}
              </span>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {article.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#b3b3b3] sm:text-base line-clamp-3">
                {article.summary}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#d3d3d3]">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#E50914]" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#E50914]" />
                  {article.readTime}
                </span>
              </div>

              <div className="mt-8">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#E50914] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff1d2d]"
                >
                  Read article
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
