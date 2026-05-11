"use client";

import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrimaryCTA() {
  return (
    <section className="bg-brand-blue py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center justify-center text-center text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Find Your{" "}
            <span className="font-script text-5xl md:text-[70px] text-white">
              Clubhouse
            </span>
          </h2>
          <p className="text-sm text-white/90 mb-12 max-w-3xl mx-auto">
            There are over 40 Clubhouses across Michigan. You belong here. Take
            the first step toward building a meaningful life today.
          </p>

          <div className="flex items-center justify-center">
              <Button variant="burgundy" size="lg">
                Start Now, Right now!
              </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
