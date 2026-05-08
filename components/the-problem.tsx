"use client";

import { motion } from "framer-motion";
import { Frown, Compass, LifeBuoy } from "lucide-react";
import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";

const problems = [
  {
    title: "1. External Problem",
    description:
      "People often lack consistent access to stable and meaningful everyday life elements (e.g., employment, housing, ongoing community support). Support should focus on building a stable, meaningful life, not just crisis management.",
    icon: <LifeBuoy className="w-8 h-8" />,
    color: "bg-[#FDE7E9]",
    iconColor: "text-[#923445]",
  },
  {
    title: "2. Internal Problem",
    description:
      "Life can feel disconnected or difficult to navigate, even when stable. This includes feeling isolated, lacking purpose/direction, facing uncertainty about the future, not having a sense of belonging, and wanting to contribute but not knowing how.",
    icon: <Compass className="w-8 h-8" />,
    color: "bg-[#E2EDFB]",
    iconColor: "text-brand-blue",
  },
  {
    title: "3. Philosophical Problem",
    description:
      "Recovery should mean stabilization and the opportunity to build a meaningful life in a community. Everyone deserves the opportunity to contribute, belong, and build a meaningful life.",
    icon: <Frown className="w-8 h-8" />,
    color: "bg-[#E6E0FF]",
    iconColor: "text-brand-blue",
  },
];

export default function TheProblem() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      {/* Playful background blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#F4F4FA] dark:bg-[#1E3C5D]/10 rounded-full blur-3xl opacity-50 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6 tracking-tight">
              Bridging the <br />
              <TypingText
                text="Support Gap"
                className="font-script text-5xl md:text-7xl text-brand-burgundy block mt-2"
              />
            </h2>
            <p className="text-[#4A4A68] dark:text-gray-400 text-sm max-w-2xl mx-auto font-medium">
              Traditional systems often miss the human need for connection and
              purpose. We're here to change that.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={`h-full`}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`h-full relative ${problem.color} dark:bg-gray-900/50 dark:border dark:border-gray-800 rounded-sm p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center ${problem.iconColor} dark:text-white shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-[#4A4A68] dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {problem.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div
                    className={`w-8 h-8 rounded-full border-4 border-current ${problem.iconColor}`}
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
