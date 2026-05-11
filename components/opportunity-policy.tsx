"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OpportunityPolicy() {
  return (
    <section className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-2 bg-[#F4F4FA] text-[#7B5BF2] font-semibold rounded-full text-sm mb-6">
            Advocacy & Policy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 leading-tight">
            An Opportunity for <br />
            <span className="font-script text-5xl md:text-[70px] text-brand-burgundy">
              Lasting Change.
            </span>
          </h2>
          <p className="text-sm text-[#4A4A68] leading-relaxed mb-8">
            When we invest in the Clubhouse Model, we aren't just funding a
            program—we are building an infrastructure of care that transforms
            communities.
          </p>
          <p className="text-sm text-[#4A4A68] leading-relaxed mb-8">
            Partnering with policymakers, healthcare systems, and community
            leaders, we advocate for structural changes that prioritize
            meaningful rehabilitation. Together, we can ensure every person
            living with mental illness in Michigan has the right to recovery and
            belonging.
          </p>
          <Link
            href="#advocacy"
            className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-[#1E3C5D] transition-colors group"
          >
            Read our policy agenda{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <div className="bg-[#5B3BC4] rounded p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B5BF2] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5A36] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-script italic text-white/90">
                "They didn't just give me a service; they gave me my life back."
              </h3>
              <p className="text-[#E5E0FF] mt-6 font-medium">
                — Clubhouse Member
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
