"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger icons

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = navItems[0].href; // fallback to the first item

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.querySelector(item.href);
        if (section && section instanceof HTMLElement) {
          if (scrollY >= section.offsetTop) {
            current = item.href;
            break;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-[#0d0d0d]/70 backdrop-blur-md border-b border-[#1a1a1a] shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="relative w-36 sm:w-40 md:w-44 h-10 sm:h-12 md:h-14">
          <Image
            src="/aldwin-logo-light.png"
            alt="Aldwin Jara Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-300"
                  } hover:text-green-400`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-400 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a] px-6 pb-4"
        >
          <div className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition-colors duration-300 ${
                  active === item.href ? "text-white" : "text-gray-300"
                } hover:text-green-400`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
