"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Phone,
  Newspaper,
  ChevronDown,
  Heart,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  {
    name: "Mission",
    icon: ShieldCheck,
    href: "#",
    dropdown: [
      {
        name: "Member Resources",
        href: "/resources/members",
        description: "Tools, employment, and wellness support for our members.",
        icon: Users,
        color: "bg-blue-500",
      },
      {
        name: "Family Support",
        href: "/resources/families",
        description: "Education and guidance for families and loved ones.",
        icon: Heart,
        color: "bg-brand-burgundy",
      },
      {
        name: "Advocacy",
        href: "/advocacy",
        description: "Driving policy change and expanding the Clubhouse model.",
        icon: ShieldCheck,
        color: "bg-brand-blue",
      },
      {
        name: "Partner Portal",
        href: "/partners",
        description:
          "Professional resources for clubhouse directors and staff.",
        icon: LayoutDashboard,
        color: "bg-gray-800",
      },
    ],
  },
  { name: "Member Stories", icon: Users, href: "/member-stories" },
  { name: "Job Postings", icon: Briefcase, href: "/jobs" },
  { name: "News & Media", icon: Newspaper, href: "/news" },
  { name: "Contact", icon: Phone, href: "/contact" },
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
  dropdown: {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } },
  },
} as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between h-14">
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

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group px-3 py-2"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-semibold tracking-wide transition-colors relative flex items-center gap-1.5 px-3 py-2 rounded ${
                      scrolled
                        ? "text-gray-800 dark:text-gray-200 hover:text-brand-blue"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Content */}
                  <AnimatePresence>
                    {item.dropdown && hoveredItem === item.name && (
                      <motion.div
                        variants={animations.dropdown}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-gray-900 rounded shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                      >
                        {/* Animated Background Decoration */}
                        <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 overflow-hidden">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              x: [0, 50, 0],
                              y: [0, -50, 0],
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-brand-burgundy rounded-full blur-3xl"
                          />
                          <motion.div
                            animate={{
                              scale: [1.2, 1, 1.2],
                              x: [0, -50, 0],
                              y: [0, 50, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-blue rounded-full blur-3xl"
                          />
                        </div>

                        <div className="relative z-10 p-8 grid grid-cols-2 gap-4">
                          {item.dropdown.map((subItem, sIdx) => (
                            <motion.div key={sIdx} variants={animations.item}>
                              <Link
                                href={subItem.href}
                                className="flex gap-4 p-4 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-all group/item"
                              >
                                <div
                                  className={`w-12 h-12 rounded ${subItem.color} flex items-center justify-center text-white shadow-lg  transition-transform`}
                                >
                                  <subItem.icon size={22} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white group-hover/item:text-brand-burgundy transition-colors">
                                      {subItem.name}
                                    </h4>
                                    <ArrowRight
                                      size={14}
                                      className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-burgundy"
                                    />
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button
                variant={scrolled ? "default" : "secondary"}
                className="hidden md:flex"
              >
                DONATE
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden ${
                  scrolled
                    ? "text-gray-900 dark:text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[988] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={animations.menu}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-20 left-0 right-0 bg-white dark:bg-gray-900 z-[999] md:hidden shadow-2xl border-t border-gray-100 dark:border-gray-800 max-h-[80vh] overflow-y-auto"
            >
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    {item.dropdown ? (
                      <div className="py-2">
                        <div className="flex items-center justify-between py-3 text-sm font-bold text-gray-500  border-b border-gray-50 dark:border-gray-800">
                          {item.name}
                        </div>
                        <div className="grid grid-cols-1 gap-2 mt-4">
                          {item.dropdown.map((subItem, sIdx) => (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-4 py-4 px-4 bg-gray-50 dark:bg-white/5 rounded"
                            >
                              <div
                                className={`w-10 h-10 rounded ${subItem.color} flex items-center justify-center text-white shadow-md`}
                              >
                                <subItem.icon size={18} />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                                  {subItem.name}
                                </h4>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.div variants={animations.item}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 py-4 text-sm font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-800"
                        >
                          <item.icon size={20} className="text-brand-blue" />
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-6 pt-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Appearance
                    </span>
                    <ThemeToggle />
                  </div>
                  <Button className="w-full">DONATE NOW</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
