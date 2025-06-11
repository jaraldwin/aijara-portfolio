"use client";
// pages/index.js

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Aldwin Jara | Portfolio</title>
        <meta name="description" content="Full-Stack Developer Portfolio" />
      </Head>

      <nav className="bg-white/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="relative w-36 sm:w-40 md:w-44 h-10 sm:h-12 md:h-14">
              <Image
                src="/aldwin-logo.png"
                alt="Aldwin Jara Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-base font-medium">
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="text-gray-800 text-xl focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 pb-4 text-base font-medium">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      <main className="min-h-screen bg-[#fdfaf6] text-gray-800 pt-16">
        {/* Intro Section */}
        <motion.section
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8 py-20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Text */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-6xl font-serif text-orange-500 font-bold">
              Aldwin
            </h1>
            <h1 className="text-5xl font-bold text-black mt-2">Jara</h1>
            <h3 className="text-2xl font-medium text-gray-700 mt-2">
              Fullstack Developer
            </h3>

            {/* Get in Touch Button */}
            <motion.a
              href="#contact" // Update to your actual section ID or route
              whileHover={{ scale: 1.05 }}
              className="mt-4 block text-orange-500 font-light underline cursor-pointer transition-transform duration-300 uppercase tracking-wide"
            >
              Get in Touch
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/aldwin-jara-dev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="inline-block mt-6"
            >
              <FaLinkedin className="text-4xl md:text-5xl" />
            </motion.a>
          </div>

          {/* Right: Portrait */}
          <div className="flex justify-center">
            <div className="relative group overflow-hidden w-96 h-[32rem] shadow-lg rounded-t-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none rounded-t-full" />
              <Image
                src="/aldwin-jara.jpg"
                alt="Aldwin Jara"
                width={384}
                height={512}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-200" />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start px-4 sm:px-6 lg:px-8 py-20 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Column 1: Title (Top-Left) */}
          <div className="self-start text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              <span className="text-black">About </span>
              <span className="text-orange-500">me</span>
            </h2>
          </div>

          {/* Column 2: Portrait (Middle-Center) */}
          <div className="self-center flex justify-center">
            <div className="relative group overflow-hidden w-96 h-[32rem] shadow-lg rounded-t-full">
              <Image
                src="/aldwin-pose.jpg"
                alt="Aldwin Jara Portrait"
                width={384}
                height={512}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 3: Bio (Bottom-Right) */}
          <div className="self-end text-right text-gray-800 text-md leading-relaxed max-w-sm ml-auto">
            <p>
              I’m Aldwin Jara, a full-stack developer passionate about creating
              efficient, scalable, and user-friendly web applications. With a
              background in both frontend and backend development, I thrive in
              collaborative environments.
            </p>
          </div>

          {/* Divider */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-200" />
        </motion.section>

        <motion.section
          id="experience"
          className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Image */}
          <div className="group w-full h-120 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/coding-animation.png"
              alt="Aldwin Working"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right: Experience Details */}
          <div className="text-gray-800">
            <h2 className="text-4xl font-serif mb-6 text-orange-500">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold">Fullstack Developer</p>
                <p className="text-sm text-gray-600">
                  DOST-MIRDC · 2022–Present
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Software Developer</p>
                <p className="text-sm text-gray-600">
                  Shangli Information Technology (Shanghai) Co., Ltd. ·
                  2021–2022
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-200" />
        </motion.section>

        <motion.section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-serif text-orange-500 mb-12">
            Projects
          </h2>

          {/* Project Preview Card */}
          <a
            href="https://erickedkiban.github.io/estore/#/" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/yor-pos.png"
                alt="Project Collage"
                layout="fill"
                objectFit="cover"
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Project Title Overlay */}
              <div className="absolute bottom-4 right-4 bg-orange-500 bg-opacity-60 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-medium">
                  Your Online Restaurant Point of Sale - YORPOS
                </p>
              </div>
            </div>
          </a>

          {/* Divider */}
          <div className="mt-12 w-full h-1 bg-orange-200 rounded" />
        </motion.section>

        <motion.section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Contact Info */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-orange-500">
              Get in Touch
            </h2>

            <div className="space-y-3 text-gray-700 text-md">
              <p>
                📞 <span className="font-medium">+639977583493</span>
              </p>
              <p>
                ✉ <span className="font-medium">jaraldwin@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden group shadow-lg">
            <Image
              src="/aldwin-jara-peace.jpg"
              alt="Workspace"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Divider */}
          <div className="col-span-full mt-12 w-full h-1 bg-orange-200 rounded" />
        </motion.section>
      </main>
      <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="relative mx-auto w-52 sm:w-60 md:w-72 h-16 sm:h-20 md:h-24">
            <Image
              src="/aldwin-logo-light.png"
              alt="Aldwin Jara Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Aldwin Jara. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-white text-xl">
            <a
              href="https://www.linkedin.com/in/aldwin-jara-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedin />
            </a>
            {/* Add more icons if needed */}
          </div>
        </div>
      </footer>
    </>
  );
}
