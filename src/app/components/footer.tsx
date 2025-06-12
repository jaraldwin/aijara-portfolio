"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#111] text-gray-400 pb-12 px-4 sm:px-8 mt-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        {/* Logo */}
        <div className="relative w-40 h-12">
          <Image
            src="/aldwin-logo-light.png"
            alt="Aldwin Jara Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Footer Text */}
        <p className="text-sm text-center sm:text-right">
          © {new Date().getFullYear()} Aldwin Jara. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
