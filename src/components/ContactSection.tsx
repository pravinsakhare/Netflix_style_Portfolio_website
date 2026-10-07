"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pravinsakhare592@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      // Ignore clipboard errors in unsupported browsers.
    }
  };

  const contactRows = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "pravinsakhare592@gmail.com",
      href: "mailto:pravinsakhare592@gmail.com",
      actionLabel: emailCopied ? "Copied" : "Copy",
      action: copyEmail,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pravinsakhare",
      href: "https://linkedin.com/in/pravinsakhare",
      actionLabel: "Open",
      action: null,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/pravinsakhare",
      href: "https://github.com/pravinsakhare",
      actionLabel: "Open",
      action: null,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] py-20"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-base text-[#b3b3b3] md:text-lg">
            Open to Cloud Operations, DevOps and SRE roles.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-[#333] bg-[#111111] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm font-medium text-[#d1fae5]">
                  Available for opportunities
                </span>
              </div>
              <p className="text-sm leading-7 text-[#b3b3b3] sm:text-base">
                I help teams keep production systems stable, secure, and reliable across AWS, Kubernetes, automation, and incident response.
              </p>
            </div>

            <div className="space-y-3">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#333] bg-[#111111] p-3 transition-colors hover:border-[#E50914]"
                >
                  <a
                    href={row.href}
                    target={row.label === "Email" ? undefined : "_blank"}
                    rel={row.label === "Email" ? undefined : "noopener noreferrer"}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a] text-[#E50914]">
                      <row.icon className="text-lg" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.12em] text-[#b3b3b3]">
                        {row.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white sm:text-base">
                        {row.value}
                      </span>
                    </span>
                  </a>

                  {row.action ? (
                    <button
                      type="button"
                      onClick={row.action}
                      className="inline-flex min-w-[72px] items-center justify-center gap-2 rounded-md border border-[#333] bg-[#1b1b1b] px-3 py-2 text-xs font-medium text-white transition-colors hover:border-[#E50914]"
                    >
                      {emailCopied ? <FaCheck className="text-[#34d399]" /> : <FaCopy />}
                      {row.actionLabel}
                    </button>
                  ) : (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-[72px] items-center justify-center rounded-md border border-[#333] bg-[#1b1b1b] px-3 py-2 text-xs font-medium text-white transition-colors hover:border-[#E50914]"
                    >
                      {row.actionLabel}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[#333] bg-[#111111] p-5 sm:p-7"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#e8e8e8]">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-11 rounded-lg border-[#333] bg-[#1a1a1a] text-white placeholder:text-[#7a7a7a] focus-visible:ring-2 focus-visible:ring-[#E50914]"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-[#fca5a5]">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#e8e8e8]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11 rounded-lg border-[#333] bg-[#1a1a1a] text-white placeholder:text-[#7a7a7a] focus-visible:ring-2 focus-visible:ring-[#E50914]"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-[#fca5a5]">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#e8e8e8]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="resize-none rounded-lg border-[#333] bg-[#1a1a1a] text-white placeholder:text-[#7a7a7a] focus-visible:ring-2 focus-visible:ring-[#E50914]"
                  placeholder="Tell me about your project"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-[#fca5a5]">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full rounded-lg bg-[#E50914] text-base font-semibold text-white hover:bg-[#ff1d2d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </Button>

              {isSubmitted && (
                <p className="text-sm font-medium text-[#86efac]">
                  Thanks, I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
