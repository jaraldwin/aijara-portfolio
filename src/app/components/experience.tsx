import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experiences"
      className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Animated Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="group relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#4079ff]"
      >
        <Image
          src="/coding-animation.png"
          alt="Aldwin Working"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Right: Experience Text */}
      <div className="text-left text-gray-300 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-xl font-semibold text-white">
              Fullstack Developer
            </p>
            <p className="text-sm text-gray-400">
              DOST-MIRDC · <span className="italic">2022 – Present</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Building internal systems, dashboards, and enterprise-grade tools
              using modern tech like React, Vue, and Node.js.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">
              Software Developer
            </p>
            <p className="text-sm text-gray-400">
              Shangli Information Technology (Shanghai) Co., Ltd. ·{" "}
              <span className="italic">2021 – 2022</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Worked on cross-border e-commerce solutions, streamlining frontend
              experiences and backend integration for logistics systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
        />
      </div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20" />
    </motion.section>
  );
}
