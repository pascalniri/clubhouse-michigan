"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatIsAClubhouse() {
  return (
    <section
      id="what-is-clubhouse"
      className="bg-[#E5E0FF] dark:bg-gray-900 py-20 lg:py-32 overflow-hidden relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Left Illustration / Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square bg-[#FFD166] dark:bg-brand-blue/20 rounded-sm p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/wild+dawgz.webp"
                alt="Community connection at a Michigan Clubhouse"
                fill
                className="object-cover relative z-10 p-2 bg-white dark:bg-gray-800"
              />
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white mb-6 leading-tight">
              A restorative environment <br />
              <span className="font-script text-5xl md:text-[70px] text-[#923445] dark:text-[#FDE7E9] block mt-2">
                where you are a member,
              </span>
              <span className="block mt-2">not a patient.</span>
            </h2>
            <p className="text-lg text-[#4A4A68] dark:text-gray-300 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
              A Clubhouse is a community-based center that offers people living
              with mental illness hope and opportunities to reach their full
              potential.
            </p>
            <p className="mt-4 text-lg text-[#4A4A68] dark:text-gray-400 leading-relaxed italic border-l-2 border-[#923445] dark:border-[#FDE7E9] pl-4">
              Provide equal opportunities for everyone with a mental illness in
              Michigan to achieve their aspirations through the support of a
              Clubhouse in their community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
