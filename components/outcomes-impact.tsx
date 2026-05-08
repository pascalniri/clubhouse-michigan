"use client";

import { motion } from "framer-motion";
import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";

const stats = [
  {
    value: "4x",
    label: "Employment Rate",
    description:
      "Higher employment rate compared to public mental health services.",
  },
  {
    value: "50%",
    label: "Hospitalization Reduction",
    description: "Reduction in hospitalizations for active Clubhouse members.",
  },
  {
    value: "1/3",
    label: "Cost Efficiency",
    description:
      "The cost of a traditional community mental health center per year.",
  },
  {
    value: "100%",
    label: "Human Centric",
    description: "Focus on individual strengths, belonging, and human dignity.",
  },
];

export default function OutcomesImpact() {
  return (
    <section className="bg-[#5B3BC4] dark:bg-[#1E3C5D] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-white transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Join the Clubhouse Michigan <br className="hidden md:block" />
              <TypingText
                text="mission for all members."
                className="font-script text-5xl md:text-[70px] text-white/90 block mt-2"
              />
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-white/20 transition-all duration-300 group">
                <div className="text-5xl font-bold text-[#FFD166] mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-white mb-2 uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="text-white/70 text-lg leading-relaxed font-medium">
                  {stat.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
