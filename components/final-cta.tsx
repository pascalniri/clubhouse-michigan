"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F4F4FA] dark:bg-gray-900 rounded-lg p-12 md:p-20 shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white mb-6 tracking-tight">
            Everyone deserves a <br />
            <span className="font-script text-5xl md:text-[70px] text-[#923445] dark:text-[#FDE7E9] block mt-2">
              meaningful life.
            </span>
          </h2>
          <p className="text-lg text-[#4A4A68] dark:text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you are looking for support, want to help a loved one, or
            are a partner in the community—there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center md:block px-6 py-3 text-xs font-bold bg-brand-blue text-white transition-colors hover:bg-[#1E3C5D]">
                JOIN THE MISSION
              </button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center md:block px-6 py-3 text-xs font-bold bg-white dark:bg-gray-800 text-brand-blue dark:text-white border border-brand-blue dark:border-white/20 transition-colors hover:bg-[#F4F4FA] dark:hover:bg-gray-700">
                LEARN MORE
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
