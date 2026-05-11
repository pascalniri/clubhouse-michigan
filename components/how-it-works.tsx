"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, GraduationCap, HeartHandshake } from "lucide-react";
import Link from "next/link";
import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "The Work-Ordered Day",
    description: "Members and staff work side-by-side to run the Clubhouse.",
    icon: <Briefcase className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Employment",
    description:
      "Transitional, Supported, and Independent employment opportunities.",
    icon: <HeartHandshake className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Education",
    description: "Tutoring and support to complete degrees or certifications.",
    icon: <GraduationCap className="w-6 h-6 text-[#7B5BF2]" />,
  },
  {
    title: "Housing & Community",
    description: "Securing affordable housing and providing lifelong support.",
    icon: <Home className="w-6 h-6 text-[#7B5BF2]" />,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#7B5BF2] py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Text Content */}
          <Reveal className="w-full lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A proven, <br className="hidden lg:block" />
              <TypingText
                text="evidence-based"
                className="font-script text-5xl md:text-[70px] text-white/90"
              />{" "}
              model.
            </h2>
            <p className="text-sm text-white/90 leading-relaxed mb-8 max-w-lg">
              The Clubhouse Model centers on four main pillars that empower
              members to rebuild their lives, confidence, and purpose.
            </p>

            <Link href="#find">
              <Button variant="secondary" className="w-full sm:w-auto">
                FIND YOUR CLUBHOUSE
              </Button>
            </Link>
          </Reveal>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded shadow-xl flex flex-col items-start h-full">
                  <div className="w-12 h-12 bg-[#F4F4FA] rounded-full flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#4A4A68] text-sm leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
