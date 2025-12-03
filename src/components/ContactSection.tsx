"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
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
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "pravinsakhare592@gmail.com",
      link: "mailto:pravinsakhare592@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+80.10.567.522",
      link: "tel:+8010567522",
    },
    {
      icon: FaGlobe,
      label: "Website",
      value: "pravinsakhare.in",
      link: "https://pravinsakhare.in",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/pravinsakhare",
      color: "#FFFFFF",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/pravinsakhare",
      color: "#0A66C2",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#0a0a0a] min-h-screen"
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
            Get In Touch
          </h2>
          <p className="text-lg text-[#b3b3b3]">
            Let's discuss your next cloud project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1f1f1f] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#141414] border-[#333] text-white focus:border-[#E50914] focus:ring-[#E50914]"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-[#E50914] text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#141414] border-[#333] text-white focus:border-[#E50914] focus:ring-[#E50914]"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-[#E50914] text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-[#141414] border-[#333] text-white focus:border-[#E50914] focus:ring-[#E50914] resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-[#E50914] text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E50914] hover:bg-[#ff1a24] text-white font-semibold py-6 text-lg relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : isSubmitted ? (
                      "Message Sent! ✓"
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#1f1f1f] p-4 rounded-lg border border-[#333] hover:border-[#E50914] transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="bg-[#E50914]/20 p-3 rounded-lg">
                      <method.icon className="text-2xl text-[#E50914]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#b3b3b3]">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1f1f1f] p-4 rounded-lg border border-[#333] hover:border-[#E50914] transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon
                      className="text-3xl"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-[#E50914]/20 to-transparent p-8 rounded-lg border border-[#E50914]/30"
              whileHover={{
                boxShadow: "0 0 30px rgba(229, 9, 20, 0.3)",
              }}
            >
              <h4 className="text-xl font-bold text-white mb-3">
                Available for Opportunities
              </h4>
              <p className="text-[#b3b3b3]">
                I'm currently open to cloud engineering and DevOps roles. Let's
                build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
