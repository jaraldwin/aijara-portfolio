"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Contact Info */}
      <div className="text-left text-gray-300 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          Whether you have a question, a collaboration idea, or just want to say
          hi — my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#40ffaa]" />
            <a
              href="mailto:jaraldwin@gmail.com"
              className="text-lg hover:underline"
            >
              jaraldwin@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#4079ff]" />
            <span className="text-lg">Taguig City, Metro Manila</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
        />
      </div>

      {/* Right: Call-to-action button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
        className="flex justify-center md:justify-end"
      >
        <a
          href="mailto:aldwinjara@gmail.com"
          className="inline-block bg-white text-black px-8 py-4 rounded-xl shadow-lg font-semibold uppercase tracking-wide text-lg"
        >
          Let’s Work Together
        </a>
      </motion.div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20" />
    </motion.section>
  );
}
