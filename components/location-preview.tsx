"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LocationPreview() {
  return (
    <section className="py-20 relative bg-[#0B527F] overflow-hidden">
      {/* Background Map Effect (CSS Pattern) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Serving Communities Across{" "}
                <span className="text-[#9f2943] dark:text-[#ff5577]">
                  Michigan
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                With over{" "}
                <span className="text-white font-bold">
                  40 direct service Clubhouses
                </span>{" "}
                covering more than{" "}
                <span className="text-white font-bold">30 counties</span>,
                support is never far away. Find a community near you and start
                your journey today.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#9f2943] text-white rounded-full font-semibold flex items-center gap-2 hover:bg-[#8a223a] transition-all shadow-lg shadow-[#9f2943]/20"
                >
                  Find a Location <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  View Service Map
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full relative h-[400px]">
            {/* Abstract Map Representation using CSS/Divs since real map image might be tricky without assets */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full bg-[#0B527F] backdrop-blur-sm rounded-3xl border border-white/10 p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B527F]/20 to-transparent" />

              {/* Animated "Locations" */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-[#0B527F] rounded-full shadow-lg shadow-[#0B527F]/50"
                  style={{
                    width: "12px",
                    height: "12px",
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-[#9f2943] rounded-full animate-ping opacity-75" />
                </motion.div>
              ))}

              <div className="relative z-10 h-full flex items-center justify-center flex-col text-center">
                <MapPin
                  size={48}
                  className="text-[#9f2943] dark:text-[#ff5577] mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  40+ Locations
                </h3>
                <p className="text-gray-400 dark:text-gray-500">
                  Connecting Michigan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
