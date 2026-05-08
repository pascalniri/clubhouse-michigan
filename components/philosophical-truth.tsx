"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhilosophicalTruth() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 shadow-xl overflow-hidden rounded-sm">
            <Image
              src="/bayside+9.webp"
              alt="Clubhouse Member sharing their story"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Quote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="text-2xl md:text-4xl font-bold text-brand-blue dark:text-white leading-tight mb-6">
            "Recovery should mean stabilization and the{" "}
            <span className="font-script text-3xl md:text-5xl text-brand-burgundy ">
              opportunity
            </span>{" "}
            to build a meaningful life in a community. Everyone deserves the
            opportunity to contribute, belong, and build a meaningful life."
          </p>
          <p className="text-xl text-[#4A4A68] dark:text-gray-400 font-bold tracking-widest uppercase font-script">
            – The Clubhouse Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
