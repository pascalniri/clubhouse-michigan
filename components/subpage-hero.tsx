"use client";

import { motion } from "framer-motion";
import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";

interface SubpageHeroProps {
  title: string;
  scriptText: string;
  description: string;
  backgroundColor?: string;
}

export default function SubpageHero({
  title,
  scriptText,
  description,
  backgroundColor = "bg-brand-burgundy",
}: SubpageHeroProps) {
  return (
    <div className={`relative w-full ${backgroundColor} pt-48 pb-32 lg:pt-56 lg:pb-48 overflow-hidden text-white`}>
      {/* Cinematic Glow Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/20 blur-[150px] -mr-96 -mt-96"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/40 blur-[120px] -ml-48 -mb-48"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
              >
                {title}{" "}
                <TypingText
                  text={scriptText}
                  className="font-script text-white/90 block mt-2"
                  delay={0.6}
                />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-white/80 max-w-xl leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
          </div>
          
          {/* Decorative Shield/Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block flex-1 relative"
          >
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
            <div className="relative border-2 border-white/20 p-4 backdrop-blur-sm">
              <div className="aspect-square bg-white/5 flex items-center justify-center p-12">
                <div className="w-full h-full border border-white/40 flex items-center justify-center">
                  <span className="text-[120px] font-bold opacity-10 select-none">MI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
