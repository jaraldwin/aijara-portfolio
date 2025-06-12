import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ParticlesBackground from "./particles-background";
import GradientText from "./gradientText";
import { SiTypescript, SiVuedotjs, SiNodedotjs, SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import PixelTransition from "./pixel-transition";

const HeroSection: React.FC = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground
          particleColors={["#ffffff", "#aaaaaa"]}
          particleCount={250}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1 space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl text-gray-400"
          >
            👋 Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-xl"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2.5}
              showBorder={false}
              className="custom-class"
            >
              Aldwin Jara
            </GradientText>
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 max-w-2xl"
          >
            Fullstack Developer | Vue · React · NextJS · TypeScript · Node.js
          </motion.h2>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-xl shadow-lg font-semibold uppercase tracking-wide text-lg"
          >
            Let’s Work Together
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start">
            {[
              {
                href: "https://www.linkedin.com/in/aldwin-jara-dev/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://github.com/",
                icon: <FaGithub />,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.3 }}
                className="text-4xl text-gray-300 hover:text-white"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        {/* Right: Animated Image with Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="relative flex flex-col items-center justify-center order-1 md:order-2"
        >
          {/* Bouncing Ring Border */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px #40ffaa",
                "0 0 25px #40ffaa",
                "0 0 0px #40ffaa",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-4 border-green-400 z-0"
          />

          {/* Profile Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl z-10
   before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-green-400 before:blur-2xl before:opacity-0
   group-hover:before:opacity-30 before:transition-opacity before:duration-500"
          >
            <PixelTransition
              firstContent={
                <Image
                  src="/aldwin-jara.jpg"
                  alt="Aldwin Jara"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full rounded-full"
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#4079ff",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    Let&apos;s Code!
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#4079ff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
          >
            <SiTypescript className="text-blue-400 text-3xl" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute bottom-0 left-0 transform -translate-x-full translate-y-full"
          >
            <SiVuedotjs className="text-green-400 text-3xl" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-0 right-0 transform translate-x-full translate-y-full"
          >
            <SiNodedotjs className="text-lime-400 text-3xl" />
          </motion.div>
          {/* React Icon - Top Right */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute top-0 right-0 transform translate-x-full -translate-y-full"
          >
            <SiReact className="text-cyan-400 text-3xl" />
          </motion.div>

          {/* Next.js Icon - Top Left */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-0 left-0 transform -translate-x-full -translate-y-full"
          >
            <TbBrandNextjs className="text-white text-3xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Optional Scroll Cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xl opacity-50"
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
