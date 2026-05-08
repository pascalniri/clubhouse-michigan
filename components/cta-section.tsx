"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, HandHeart, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          {/* Background Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to create a lasting impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/95 text-xl mb-12 leading-relaxed"
            >
              Your involvement empowers individuals living with mental illness
              to find connection, purpose, and community. Join us in making a
              real difference.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Donate to Support", icon: Heart, primary: true },
                { title: "Become a Partner", icon: HandHeart, primary: false },
                { title: "Join Our Movement", icon: Users, primary: false },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all font-bold
                      ${
                        item.primary
                          ? "bg-white text-rose-600 shadow-xl"
                          : "bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20"
                      }
                    `}
                  >
                    <Icon
                      size={32}
                      className={
                        item.primary ? "fill-rose-600 text-rose-600" : ""
                      }
                    />
                    <span className="text-sm">{item.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
