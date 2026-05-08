"use client";

import { motion } from "framer-motion";

export default function SystemPositioning() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-16 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#923445] rounded-bl-full opacity-10 transform translate-x-10 -translate-y-10"></div>

          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white mb-8 relative z-10">
            Why It Matters <br />
            <span className="font-script text-5xl md:text-[70px] text-[#923445] dark:text-[#FDE7E9]">
              In the Bigger Picture
            </span>
          </h2>

          <div className="space-y-6 text-lg text-[#4A4A68] dark:text-gray-300 relative z-10 leading-relaxed">
            <p>
              Within the behavioral health system, Clubhouses fill a critical
              gap. While crisis services stabilize individuals, they rarely
              provide a pathway to a meaningful life.
            </p>
            <p>
              By focusing on{" "}
              <strong className="text-brand-blue dark:text-white">
                social determinants of health
              </strong>
              —like employment, education, and community connection—Clubhouses
              offer an ongoing, cost-effective infrastructure for lifelong
              recovery.
            </p>
            <p className="italic font-script text-2xl text-brand-blue dark:text-white border-l-4 border-[#923445] dark:border-[#FDE7E9] pl-6 mt-8">
              We align policy and practice to ensure that people living with
              mental illness have access to the support they need to thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
