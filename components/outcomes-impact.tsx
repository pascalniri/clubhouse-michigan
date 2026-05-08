"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "4x",
    label: "Higher employment rate compared to public mental health services.",
  },
  {
    value: "50%",
    label: "Reduction in hospitalizations for active Clubhouse members.",
  },
  {
    value: "1/3",
    label: "The cost of a traditional community mental health center per year.",
  },
  {
    value: "100%",
    label: "Focus on individual strengths, belonging, and human dignity.",
  },
];

export default function OutcomesImpact() {
  return (
    <section className="bg-[#5B3BC4] dark:bg-[#1E3C5D] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-white transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Join the Clubhouse Michigan <br className="hidden md:block" />
            <span className="font-script text-5xl md:text-[70px] text-white/90">
              mission for all members.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-900/50 dark:border dark:border-white/10 rounded-md p-10 text-center flex flex-col items-center justify-center shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-4">
                {stat.value}
              </div>
              <p className="text-[#4A4A68] dark:text-gray-300 text-lg leading-relaxed font-medium max-w-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
