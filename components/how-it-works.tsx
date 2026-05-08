"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, GraduationCap, HeartHandshake } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "The Work-Ordered Day",
    description: "Members and staff work side-by-side to run the Clubhouse.",
    icon: <Briefcase className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Employment",
    description:
      "Transitional, Supported, and Independent employment opportunities.",
    icon: <HeartHandshake className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Education",
    description: "Tutoring and support to complete degrees or certifications.",
    icon: <GraduationCap className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Housing & Community",
    description: "Securing affordable housing and providing lifelong support.",
    icon: <Home className="w-6 h-6 text-[#7B5BF2]" />,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#7B5BF2] py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A proven, <br className="hidden lg:block" />
              <span className="font-script text-5xl md:text-[70px] text-white/90">
                evidence-based
              </span>{" "}
              model.
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
              The Clubhouse Model centers on four main pillars that empower
              members to rebuild their lives, confidence, and purpose.
            </p>

            <Link href="#find">
              <button className="flex items-center justify-center md:block px-6 py-3 text-xs font-bold bg-white text-[#7B5BF2] transition-colors hover:bg-gray-100 shadow-lg">
                FIND YOUR CLUBHOUSE
              </button>
            </Link>
          </motion.div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-[#F4F4FA] rounded-full flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#4A4A68] text-lg leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
