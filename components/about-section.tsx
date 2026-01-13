"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Users, Heart, Award, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Direct Service Clubhouses", value: "40+" },
  { label: "Counties Served", value: "30+" },
  { label: "Years of Service", value: "25+" },
  { label: "Lives Impacted", value: "10k+" },
];

const features = [
  {
    title: "Community Focused",
    description:
      "A collaborative, restorative environment offering access to socialization, education, and wellness.",
    icon: Users,
  },
  {
    title: "Growth Opportunities",
    description:
      "Regain confidence through employment, skill development, and ongoing education support.",
    icon: Heart,
  },
  {
    title: "Standard Based",
    description:
      "Adhering to International Clubhouse Standards to ensure quality and dignity for all members.",
    icon: Target,
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9f2943]/5 dark:bg-[#9f2943]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#9f2943]/5 dark:bg-[#9f2943]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-[#9f2943]" />
            <span className="text-[#9f2943] font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <span className="w-12 h-[2px] bg-[#9f2943]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Empowering Lives Through{" "}
            <span className="text-[#9f2943] dark:text-[#ff5577]">
              Community
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            A Clubhouse is a community-based service dedicated to supporting and
            empowering people living with mental illness. We believe that every
            individual has something valuable to contribute to their community
            and that by working together, we can end social and economic
            isolation.
          </motion.p>
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/clubhouse_michigan_hero.webp"
                alt="Clubhouse Community Activity"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-xl border-l-4 border-[#9f2943] dark:border-[#ff5577] shadow-lg"
              >
                <p className="text-gray-800 dark:text-gray-200 font-medium italic mb-2">
                  "Clubhouse is a place where you go to find out who you are or
                  what you want to be... Once you do, Clubhouse becomes a place
                  where you go to be that person."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#9f2943] flex items-center justify-center text-white text-xs font-bold">
                    M
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">
                    - Member Quote
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Pattern Dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#9f2943_2px,transparent_2px)] [background-size:16px_16px] opacity-20" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Role & Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Clubhouse Michigan works tirelessly to articulate positions on
                issues affecting adults with mental illness and to support the
                development of new, standards-based Clubhouses across the state.
              </p>

              <ul className="space-y-4">
                {[
                  "Educate and advise on the role of Clubhouses",
                  "Secure funding with MDHHS",
                  "Collaborate with NAMI, PRA, and Clubhouse International",
                  "Facilitate statewide networking and support",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#9f2943] dark:text-[#ff5577] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-[#9f2943] text-white rounded-full font-medium shadow-lg hover:shadow-[#9f2943]/30 hover:bg-[#8a223a] transition-all"
              >
                Join Our Community
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
            >
              <h4 className="text-3xl md:text-4xl font-bold text-[#9f2943] dark:text-[#ff5577] mb-2">
                {stat.value}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * idx }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#9f2943]/5 dark:bg-[#9f2943]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />

                <div className="w-14 h-14 bg-[#9f2943]/10 dark:bg-[#9f2943]/20 text-[#9f2943] dark:text-[#ff5577] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9f2943] group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#9f2943] dark:group-hover:text-[#ff5577] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
