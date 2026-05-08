"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";

const storyCategories = [
  {
    title: "Education Stories",
    description:
      "Discover how Clubhouse members are reclaiming their academic dreams, from finishing high school to pursuing university degrees.",
    image: "/bayside+9.webp",
    color: "bg-[#E2EDFB]",
    accent: "text-brand-blue",
  },
  {
    title: "Independence Stories",
    description:
      "Stories of members finding stable housing, managing their own lives, and regaining the autonomy they once thought was lost.",
    image: "/charter+house+3.webp",
    color: "bg-[#FDE7E9]",
    accent: "text-brand-burgundy",
  },
  {
    title: "Employment Stories",
    description:
      "From transitional employment to independent careers, see how our members are proving their value in the Michigan workforce.",
    image: "/member+stories+2.webp",
    color: "bg-[#E6E0FF]",
    accent: "text-brand-blue",
  },
  {
    title: "Recovery Stories",
    description:
      "The heartbeat of our mission. Personal journeys of healing, belonging, and the daily choice to build a meaningful life.",
    image: "/wild+dawgz.webp",
    color: "bg-[#F4F4FA]",
    accent: "text-brand-burgundy",
  },
];

export default function MemberStoriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-brand-blue overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-5xl lg:text-[70px] font-bold tracking-tight leading-tight"
          >
            Real People. <br />
            <TypingText
              text="Real Recovery."
              className="font-script text-6xl md:text-7xl lg:text-[90px] font-normal tracking-wide text-white/90"
              delay={0.5}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-white/80 text-sm leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Every member of Clubhouse Michigan has a unique journey. These are
            the stories of resilience, triumph, and the power of a supportive
            community.
          </motion.p>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      </section>

      {/* Stories Grid */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {storyCategories.map((category, idx) => {
              const slug = category.title.toLowerCase().replace(/ /g, "-");
              return (
                <Reveal key={idx} delay={idx * 0.1} className="group">
                  <Link href={`/member-stories/${slug}`}>
                    <div className="cursor-pointer">
                      <div
                        className={`relative aspect-[16/10] overflow-hidden rounded-sm mb-8 ${category.color} p-4 shadow-sm group-hover:shadow-xl transition-all duration-500`}
                      >
                        <div className="relative w-full h-full overflow-hidden rounded-sm">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${category.accent}`}
                      >
                        {category.title}
                      </h2>
                      <p className="text-[#4A4A68] dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                        {category.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-blue group-hover:gap-4 transition-all">
                        Read Stories <span>&rarr;</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4F4FA] dark:bg-gray-900 py-24 lg:py-32 px-4">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">
            Have a story to share?
          </h2>
          <p className="text-sm text-[#4A4A68] dark:text-gray-400 mb-10 leading-relaxed font-medium">
            Your journey could be the inspiration someone else needs to take
            their first step toward recovery. We would love to hear from you.
          </p>
          <button className="px-8 py-4 text-xs font-bold bg-brand-burgundy text-white tracking-widest uppercase transition-colors hover:bg-[#7D2D3B]">
            SHARE YOUR STORY
          </button>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
