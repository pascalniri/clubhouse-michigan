"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F4F4FA] dark:bg-gray-900 rounded p-12 md:p-20 shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6 tracking-tight">
            Everyone deserves a <br />
            <span className="font-script text-5xl md:text-[70px] text-[#923445] dark:text-[#FDE7E9] block mt-2">
              meaningful life.
            </span>
          </h2>
          <p className="text-sm text-[#4A4A68] dark:text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you are looking for support, want to help a loved one, or
            are a partner in the community—there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">JOIN THE MISSION</Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
