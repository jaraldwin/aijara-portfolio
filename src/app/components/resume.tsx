"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ResumeSection() {
  return (
    <motion.section
      id="resume"
      className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Resume Preview or Decorative Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="group relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#4079ff]"
      >
        <Image
          src="/resume-preview.png" // Replace with your own preview or placeholder image
          alt="Resume Preview"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Right: Resume Info */}
      <div className="text-left text-gray-300 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          You can download my updated resume and explore my technical
          experience, past roles, and certifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href="/aldwin_cv_2025.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#40ffaa] hover:bg-[#38e599] text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-colors duration-300 cursor-pointer">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
        />
      </div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20" />
    </motion.section>
  );
}
