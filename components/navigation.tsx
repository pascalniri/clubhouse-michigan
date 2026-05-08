"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Phone,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Member Stories", icon: Users, href: "/member-stories" },
  { name: "Job Postings", icon: Briefcase, href: "#" },
  { name: "News & Media", icon: Newspaper, href: "#" },
  { name: "Contact", icon: Phone, href: "#" },
];

const animations = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  menu: {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 },
    },
  },
  item: {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[999]">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between h-12">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex items-center gap-2"
              >
                <Image
                  src="/clubhouse_michigan_logo.webp"
                  alt="Clubhouse Logo"
                  width={60}
                  height={60}
                  className={scrolled ? "" : "brightness-0 invert"}
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors relative group flex items-center gap-1 ${
                    scrolled
                      ? "text-gray-800 dark:text-gray-200 hover:text-brand-blue"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-burgundy transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <button
                className={`hidden flex items-center justify-center md:block px-6 py-3 text-xs font-bold transition-colors ${
                  scrolled
                    ? "bg-brand-blue text-white hover:bg-[#1E3C5D]"
                    : "bg-white text-brand-blue hover:bg-gray-100"
                }`}
              >
                DONATE
              </button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden w-10 h-10 flex items-center justify-center ${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={animations.backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={animations.menu}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-20 left-0 right-0 bg-white dark:bg-gray-900 z-[999] md:hidden shadow-2xl border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item, idx) => (
                  <motion.div key={idx} variants={animations.item}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 py-4 text-lg font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-800"
                    >
                      <item.icon size={20} className="text-brand-blue" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col gap-6 pt-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Appearance</span>
                    <ThemeToggle />
                  </div>
                  <button className="w-full flex items-center justify-center px-6 py-4 text-xs font-bold bg-brand-blue text-white uppercase tracking-widest transition-colors hover:bg-[#1E3C5D]">
                    DONATE NOW
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
