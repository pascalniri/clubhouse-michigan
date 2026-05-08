"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full bg-[#923445] pt-40 pb-48 lg:pt-56 lg:pb-64 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-start">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight leading-tight"
            >
              You deserve a <br />
              <span className="font-script text-6xl md:text-7xl lg:text-[90px] font-normal tracking-wide leading-[0.8] mt-4 block text-white/90">
                place to belong.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-white text-lg leading-relaxed max-w-md font-medium"
            >
              A Clubhouse is a community-based service dedicated to supporting
              and empowering people living with mental illness. We believe
              recovery means building a meaningful life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-8"
            >
              <Link href="#locate" className="w-full sm:w-auto">
                <button className="w-full flex items-center justify-center md:block px-6 py-3 text-xs font-bold bg-brand-blue text-white  transition-colors hover:bg-[#1E3C5D] cursor-pointer">
                  LOCATE A CLUBHOUSE
                </button>
              </Link>
              <Link href="#donate" className="w-full sm:w-auto">
                <button className="w-full flex items-center justify-center md:block px-6 py-3 text-xs font-bold bg-white text-brand-blue  transition-colors hover:bg-white/90 cursor-pointer">
                  DONATE
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Floating Images */}
          <div className="w-full lg:w-1/2 relative mt-20 lg:mt-0 h-[400px] lg:h-auto pointer-events-none z-10">
            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-10 right-10 md:right-32 w-48 h-56 md:w-56 md:h-64 bg-white p-2 shadow-2xl z-20"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/CM+at+Shanty+Creek+Summer+2024.webp"
                  alt="Clubhouse members at Shanty Creek"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Middle Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-20 -left-4 md:-left-12 w-40 h-48 md:w-48 md:h-56 bg-white p-2 shadow-2xl z-30"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/bayside+9.webp"
                  alt="Bayside Clubhouse members"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-32 left-32 md:left-40 w-44 h-52 md:w-52 md:h-60 bg-white p-2 shadow-2xl z-10"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/clubhouse_hero_image.webp"
                  alt="Clubhouse community gathering"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-64 left-10 md:left-20 w-48 h-56 md:w-56 md:h-64 bg-white p-2 shadow-2xl z-40"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/wild+dawgz.webp"
                  alt="Wild Dawgz Clubhouse group"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              animate={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-56 right-0 md:right-10 w-44 h-52 md:w-52 md:h-60 bg-white p-2 shadow-2xl z-30"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/clubhouse_michigan_hero.webp"
                  alt="Clubhouse Michigan members"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlapping Information Card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 z-50 mb-20 flex justify-center lg:justify-start lg:pl-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#F4F4FA] p-8 md:p-12 w-full max-w-2xl text-center flex flex-col items-center justify-center shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-bold text-brand-blue mb-4">
            Discover the Clubhouse Impact
          </h2>
          <p className="text-[#4A4A68] mb-8 leading-relaxed max-w-lg">
            Our latest state-wide survey shows how access to employment,
            education, and community drastically improves the lives of those
            living with mental illness.
          </p>
          <Link href="#impact">
            <button className="bg-brand-blue hover:bg-[#1E3C5D] text-white px-6 cursor-pointer py-3 font-bold text-xs tracking-wide transition-colors">
              READ THE REPORT
            </button>
          </Link>
        </motion.div>
      </div>

      {/* "Here for you" Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-brand-blue mb-2">
          Clubhouse Michigan is here for you.
        </h2>
        <h2 className="font-script text-5xl md:text-7xl text-[#923445] mb-8 leading-none">
          every single day.
        </h2>
        <p className="text-lg text-[#4A4A68] max-w-2xl mx-auto leading-relaxed">
          The Clubhouse model is an evidence-based approach where people living
          with mental illness can find a supportive community, rebuild their
          confidence, and return to work or school.
        </p>
      </div>
    </>
  );
}
