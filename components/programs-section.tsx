"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  BookOpen,
  Home,
  Activity,
  Users2,
  LineChart,
} from "lucide-react";

const programs = [
  {
    title: "Employment Support",
    description:
      "Helping members return to paid work through Transitional, Supported, and Independent Employment programs.",
    icon: Briefcase,
  },
  {
    title: "Education Services",
    description:
      "Assisting members in accessing educational opportunities, from tutoring to college completion.",
    icon: BookOpen,
  },
  {
    title: "Housing Assistance",
    description:
      "Support in securing safe, decent, and affordable housing for all clubhouse members.",
    icon: Home,
  },
  {
    title: "Health & Wellness",
    description:
      "Promoting physical and mental well-being through healthy lifestyle activities and support.",
    icon: Activity,
  },
  {
    title: "Socialization",
    description:
      "Ending isolation by building a vibrant community of support, friendship, and shared purpose.",
    icon: Users2,
  },
  {
    title: "Advocacy",
    description:
      "Articulating positions on issues affecting adults with mental illness to drive systemic change.",
    icon: LineChart,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 dark:bg-gray-800 -skew-x-12 transform origin-top translate-x-32 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#9f2943] font-semibold tracking-wider uppercase text-sm"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-6"
          >
            Holistic Support for{" "}
            <span className="text-[#9f2943] dark:text-[#ff5577]">Recovery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            We offer a comprehensive range of opportunities designed to help
            members regain confidence, skills, and independence. Our accredited
            programs focus on the whole person.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#9f2943]/5 dark:bg-[#9f2943]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9f2943] transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#9f2943] dark:text-[#ff5577] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
