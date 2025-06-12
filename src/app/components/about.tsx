import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-8 py-32 gap-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Text */}
      <div className="text-left space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-xl leading-relaxed"
        >
          👋 I&apos;m{" "}
          <span className="font-semibold text-white">Aldwin Jara</span>, a
          passionate full-stack developer focused on crafting clean, intuitive,
          and high-performance web applications. I thrive on delivering seamless
          user experiences through modern frameworks like{" "}
          <span className="text-[#40ffaa] font-medium">Vue</span>,{" "}
          <span className="text-[#4079ff] font-medium">React</span>, and{" "}
          <span className="text-[#ffbf40] font-medium">Node.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-[#1e1e1e] text-green-400 font-mono text-sm p-4 rounded-lg shadow-lg max-w-xl"
        >
          <pre>
            {`const passion = "building great UIs";\nconst stack = ["Vue", "React", "Node.js"];\n\nfunction create() {\n  return passion + " with " + stack.join(", ");\n}`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
        />
      </div>

      {/* Right: Portrait */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="relative w-80 h-80 mx-auto rounded-full border-4 border-[#40ffaa] shadow-2xl overflow-hidden group"
      >
        <Image
          src="/aldwin-pose.jpg"
          alt="Aldwin Jara Portrait"
          fill
          className="object-cover rounded-full transition-opacity duration-500 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-semibold">
            Let’s Build Something Cool!
          </p>
        </div>
      </motion.div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20" />
    </motion.section>
  );
}
