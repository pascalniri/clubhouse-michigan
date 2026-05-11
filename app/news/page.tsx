"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TypingText from "@/components/typing-text";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Search,
  ArrowRight,
  Share2,
  Calendar,
  BookOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const articles = [
  {
    id: 1,
    title: "Michigan State Legislature Increases Clubhouse Funding",
    excerpt:
      "A historic investment in community-based mental health services will expand Clubhouse accessibility across the state.",
    date: "May 15, 2024",
    category: "Policy",
    image: "/CM+at+Shanty+Creek+Summer+2024.webp",
  },
  {
    id: 2,
    title: "Member Spotlight: John's Journey to Employment",
    excerpt:
      "How the work-ordered day helped John rediscover his skills and secure a career in graphic design.",
    date: "May 10, 2024",
    category: "Success Stories",
    image: "/member+stories+2.webp",
  },
  {
    id: 3,
    title: "Upcoming Annual Clubhouse Michigan Conference",
    excerpt:
      "Join us this September in Lansing for a gathering of minds dedicated to mental health advocacy and community building.",
    date: "May 5, 2024",
    category: "Events",
    image: "/charter+house+3.webp",
  },
  {
    id: 4,
    title: "New Digital Literacy Program Launches Across 5 Locations",
    excerpt:
      "Bridging the digital divide with hands-on training for members to excel in the modern workforce.",
    date: "April 28, 2024",
    category: "Programs",
    image: "/bayside+9.webp",
  },
  {
    id: 5,
    title: "Impact Report: The Economic Value of Clubhouse Communities",
    excerpt:
      "New data shows significant healthcare savings and improved quality of life for Michigan residents.",
    date: "April 20, 2024",
    category: "Reports",
    image: "/wild+dawgz.webp",
  },
  {
    id: 6,
    title: "Transitional Employment: A Bridge to Financial Independence",
    excerpt:
      "Exploring the unique partnership between local businesses and Clubhouse members.",
    date: "April 15, 2024",
    category: "Employment",
    image: "/clubhouse_hero_image.webp",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen font-sans">
      <Navigation />

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#1a3a5a] text-white">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-burgundy/20 blur-[150px] -mr-96 -mt-96"
          />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/30 blur-[120px] -ml-48 -mb-48"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-bold  text-blue-300"
                >
                  Clubhouse Blog
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Featured{" "}
                  <TypingText
                    text="Stories"
                    className="font-script text-white/90"
                    delay={0.5}
                  />
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  We're always exploring new topics, asking questions, and
                  looking for new ways to learn and share.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 border border-white/10" />
                <div className="aspect-[4/5] bg-gray-800 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5a]/60 via-transparent to-transparent z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center grayscale-[0.2]"
                    style={{
                      backgroundImage: "url('/clubhouse_michigan_hero.webp')",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Reveal className="relative group w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full md:w-auto justify-between"
              >
                Sort By: Newest to Oldest
                <ChevronDown size={14} className="text-brand-blue" />
              </Button>
            </Reveal>
            <Reveal
              delay={0.2}
              className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full md:w-auto"
            >
              {[
                "All Stories",
                "Member Spotlights",
                "Policy Updates",
                "Events",
              ].map((cat, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className={`text-[10px] font-bold  whitespace-nowrap h-auto py-2 rounded-none border-b-2 transition-all ${i === 0 ? "text-brand-blue border-brand-blue" : "text-gray-400 border-transparent hover:text-gray-600"}`}
                >
                  {cat}
                </Button>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.1}>
                <article className="group cursor-pointer flex flex-col h-full border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                  <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 bg-white dark:bg-gray-900">
                    <span className="text-[10px] font-bold text-gray-400  mb-4 block">
                      Blog
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 ">
                        {article.date}
                      </span>
                      <div className="flex items-center gap-2 text-brand-blue font-bold text-[10px]  group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          <Reveal className="mt-20 flex justify-center items-center gap-4">
            <Button variant="outline" size="icon">
              1
            </Button>
            <Button variant="default" size="icon">
              2
            </Button>
            <Button variant="outline" size="icon">
              3
            </Button>
            <span className="text-gray-400">...</span>
            <Button variant="outline" size="icon">
              12
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Global Impact Counter */}
      <section className="py-24 bg-[#1a3a5a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Members Served", val: "12,400+" },
              { label: "Active Clubhouses", val: "45" },
              { label: "Employment Partners", val: "280+" },
              { label: "Years of Community", val: "35" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-xs font-bold  text-blue-300 mb-2">
                  {stat.label}
                </p>
                <p className="text-5xl font-bold">{stat.val}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Press &{" "}
                <TypingText
                  text="Media"
                  className="font-script text-brand-burgundy"
                />{" "}
                Kit
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Working on a story? Access our official brand assets,
                high-resolution photography, and organizational facts to ensure
                accurate coverage of our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="burgundy" size="lg">
                  <Download size={16} /> Download Media Kit
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 size={16} /> Share Our Story
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.4} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: "url('/bayside+9.webp')" }}
                  />
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-900 overflow-hidden pt-8">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: "url('/member+stories+2.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
