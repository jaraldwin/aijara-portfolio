import { motion } from "framer-motion";
import Image from "next/image";

const dostProjects = [
  {
    title: "Metals Week Website",
    description:
      "An event microsite to support Metals Industry Week featuring schedules, speaker bios, and registration forms.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Developer / Maintaining",
  },
  {
    title: "E-Cert Admin Module",
    description:
      "Internal tool to manage and issue electronic certificates for Laboratories and Testings",
    tech: ["React (MUI)", "Strapi (REST API)"],
    role: "Developer / Maintaining",
  },
  {
    title: "Customer Database Management System",
    description:
      "CRM solution for managing profiles, industries, and transactions across MIRDC divisions.",
    tech: ["Vue (Quasar)", "Strapi"],
    role: "Developer / Maintaining",
  },
  {
    title: "Purchase and Property Management System",
    description:
      "Tracks procurement records, property issuances, inventory and accountability.",
    tech: ["Vue", "FeathersJS", "NeDB", "Express"],
    role: "Maintaining",
  },
  {
    title: "Project Monitoring Information System (PMIS)",
    description:
      "Monitors project progress, timelines, and funding milestones.",
    tech: ["Vue", "FeathersJS", "NeDB", "Express"],
    role: "Maintaining",
  },
  {
    title: "Document Tracking System",
    description:
      "Tracks routed documents to ensure traceability and accountability.",
    tech: ["Vue", "FeathersJS", "NeDB", "Express"],
    role: "Maintaining",
  },
  {
    title: "Amerial Website",
    description:
      "Company site for Amerial to showcase products, services, and contact details.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Developer / Maintaining",
  },
  {
    title: "Technology Management Information System (TechMIS)",
    description:
      "Captures and manages MIRDC technologies, inventors, and readiness levels.",
    tech: ["Vue", "FeathersJS", "NeDB", "Express"],
    role: "Maintaining",
  },
];

export default function ProjectSection() {
  return (
    <motion.section
      id="projects"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="text-left space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl leading-relaxed"
        >
          A showcase of systems I’ve built or maintain for{" "}
          <span className="text-[#40ffaa] font-medium">DOST-MIRDC</span> and
          other clients — focused on performance, usability, and real-world
          impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
        />
      </div>

      {/* Personal Project with Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-white">
          🌟 Personal Project
        </h3>
        <a
          href="https://erickedkiban.github.io/estore/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
          >
            <Image
              src="/yor-pos.png"
              alt="Your Online Restaurant POS"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-[#1e1e1e]/80 text-white px-4 py-2 rounded-md shadow-md backdrop-blur-sm">
              YORPOS – Your Online Restaurant POS
            </div>
          </motion.div>
        </a>
      </motion.div>

      {/* Grid of DOST Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">
          🏢 DOST-MIRDC Systems
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {dostProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#181818] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow space-y-4"
            >
              <h4 className="text-xl font-bold text-[#40ffaa]">
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-medium text-orange-300 bg-orange-900/30 px-2 py-1 rounded">
                  {project.role}
                </span>
                {project.tech.map((stack, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-gray-300 bg-gray-700 px-2 py-1 rounded"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20" />
    </motion.section>
  );
}
