"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TypingText from "@/components/typing-text";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  Filter,
  Users,
  Heart,
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

const jobs = [
  {
    id: 1,
    title: "Clubhouse Director",
    location: "Lansing, MI",
    type: "Full-time",
    category: "Leadership",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Vocational Generalist",
    location: "Grand Rapids, MI",
    type: "Full-time",
    category: "Support",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Member Engagement Coordinator",
    location: "Detroit, MI",
    type: "Full-time",
    category: "Programs",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Employment Specialist",
    location: "Traverse City, MI",
    type: "Full-time",
    category: "Employment",
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "Administrative Assistant",
    location: "Ann Arbor, MI",
    type: "Part-time",
    category: "Admin",
    posted: "2 weeks ago",
  },
];

export default function JobsPage() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen font-sans">
      <Navigation />

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-blue text-white">
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
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 blur-[120px] -ml-48 -mb-48"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold  text-blue-300 mb-6"
          >
            Careers
          </motion.p>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Help Us{" "}
            <TypingText
              text="Transform"
              className="font-script text-white font-normal"
              delay={0.5}
            />{" "}
            Lives
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-16"
          >
            Join a community of dedicated professionals committed to empowering
            individuals living with mental illness through recovery-centered
            support.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-3xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search
                className="text-gray-400 group-focus-within:text-brand-blue transition-colors"
                size={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search by job title or location..."
              className="w-full pl-16 pr-32 py-5 bg-white rounded-none text-gray-900 shadow-2xl focus:ring-4 focus:ring-white/20 outline-none transition-all text-sm font-medium"
            />
            <Button
              variant="burgundy"
              className="absolute right-2 top-2 bottom-2"
            >
              Search Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Available Positions
              </h2>
              <p className="text-gray-500">
                Discover your next meaningful career move
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter size={14} /> Filter
              </Button>
              <select className="px-6 py-3 border border-gray-100 dark:border-gray-800 text-xs font-bold  bg-transparent outline-none">
                <option>All Locations</option>
                <option>Lansing</option>
                <option>Detroit</option>
                <option>Grand Rapids</option>
              </select>
            </Reveal>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.1}>
                <div className="group p-8 border border-gray-50 dark:border-gray-900 bg-white dark:bg-gray-950 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-brand-blue group-hover:h-full transition-all duration-500" />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-brand-blue  px-2 py-1 bg-brand-blue/5">
                        {job.category}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 ">
                        {job.posted}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-brand-burgundy" />{" "}
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} /> {job.type}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="gap-3 self-start md:self-center"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Work{" "}
                <TypingText
                  text="With Us"
                  className="font-script text-brand-burgundy"
                />
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                We provide a supportive, inclusive, and mission-driven
                environment where your work directly impacts lives every single
                day.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Meaningful Impact",
                desc: "Directly support individuals on their journey to mental health recovery and social inclusion.",
                icon: <Heart className="text-brand-blue" size={32} />,
              },
              {
                title: "Professional Growth",
                desc: "Ongoing training and development opportunities within the global Clubhouse International network.",
                icon: <Users className="text-brand-blue" size={32} />,
              },
              {
                title: "Inclusive Culture",
                desc: "A community-based workplace that values lived experience and diverse perspectives.",
                icon: <Briefcase className="text-brand-blue" size={32} />,
              },
            ].map((benefit, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-900 p-12 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group">
                  <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 w-fit group-hover:bg-brand-blue/5 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 ">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <Reveal className="lg:w-1/2 space-y-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Our Hiring{" "}
                <TypingText
                  text="Process"
                  className="font-script text-brand-blue"
                />
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We believe in finding the right cultural fit for our community.
                Our process is transparent and designed to help you understand
                our mission as much as we understand your skills.
              </p>
              <div className="space-y-8">
                {[
                  "Submit application & resume online",
                  "Initial screening interview with HR",
                  "On-site visit to a local Clubhouse",
                  "Final interview with Director & Board",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <span className="w-12 h-12 shrink-0 bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center font-bold text-xl group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-300">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-bold  text-xs">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal
              delay={0.4}
              className="lg:w-1/2 bg-[#1a3a5a] p-16 text-white relative overflow-hidden shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-80 h-80 border border-white/5 rounded-full"
              />
              <h3 className="text-3xl font-bold mb-8 relative z-10">
                Ready to make a difference?
              </h3>
              <p className="text-blue-100 mb-12 leading-relaxed text-sm relative z-10">
                Even if you don't see a perfect match today, we're always
                looking for passionate individuals to join our talent pool and
                mission.
              </p>
              <Button variant="secondary" size="lg" className="relative z-10">
                Submit Talent Interest
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
