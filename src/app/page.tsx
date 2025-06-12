"use client";
// pages/index.js

import Head from "next/head";
// import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import AboutSection from "./components/about";
import ExperienceSection from "./components/experience";
import ProjectSection from "./components/projects";
import FooterSection from "./components/footer";
import ResumeSection from "./components/resume";
import ContactSection from "./components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aldwin Jara | Portfolio</title>
        <meta name="description" content="Full-Stack Developer Portfolio" />
      </Head>
      <main className="relative min-h-screen bg-[#0e1016] text-gray-100 overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ResumeSection />
        <ContactSection />
        <Navbar />
      </main>
      <FooterSection />
    </>
  );
}
