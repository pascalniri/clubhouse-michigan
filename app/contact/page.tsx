"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TypingText from "@/components/typing-text";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Heart,
  Users,
  Quote,
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

export default function ContactPage() {
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
                  Contact Us
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Let's{" "}
                  <TypingText
                    text="Connect"
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
                  Have questions about our programs, membership, or how you can
                  support our mission? We're here to help and would love to hear
                  from you.
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

      {/* Connection Pathways (Three Cards) */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-44 relative z-20">
            {[
              {
                title: "Become a Member",
                desc: "Interested in joining our community? Learn how to get started and visit your local Clubhouse.",
                icon: <Users className="text-brand-blue" size={32} />,
                cta: "Learn More",
                bg: "bg-[#1a3a5a]",
              },
              {
                title: "Support Our Mission",
                desc: "Whether through donations or advocacy, your support directly impacts the lives of our members.",
                icon: <Heart className="text-brand-burgundy" size={32} />,
                cta: "Give Now",
                bg: "bg-[#29507D]",
              },
              {
                title: "General Inquiries",
                desc: "Have a specific question? Send us a message and our team will get back to you shortly.",
                icon: <MessageSquare className="text-blue-300" size={32} />,
                cta: "Message Us",
                bg: "bg-[#0f243a]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                className={`${item.bg} p-12 text-white flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 shadow-2xl`}
              >
                <div className="mb-8 p-6 bg-white/5 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 ">{item.title}</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-10 h-20">
                  {item.desc}
                </p>
                <Button variant="secondary" className="w-full">
                  {item.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 border border-gray-100 dark:border-gray-800" />
                <div className="aspect-[4/5] w-[320px] md:w-[400px] bg-gray-100 dark:bg-gray-800 relative">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale"
                    style={{ backgroundImage: "url('/member+stories+2.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
            <div className="lg:w-3/5 space-y-8 relative">
              <Reveal delay={0.3}>
                <Quote
                  size={64}
                  className="text-brand-burgundy/20 absolute -top-12 -left-8"
                />
                <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed italic">
                  "Finding the Clubhouse was like finding a family I didn't know
                  I had. It's not just a support group; it's a place where I'm
                  needed and valued every single day."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-burgundy" />
                  <p className="text-xs font-bold  text-gray-400">
                    Sarah M., Clubhouse Member
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Resource Sections */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <Reveal className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Support for Healing:{" "}
                <TypingText
                  text="Resources"
                  className="font-script text-brand-burgundy"
                />{" "}
                for Members
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                We provide a fundamental part of the community for anyone who
                has navigated mental health challenges. Our goal is to ensure
                you have the tools and support system needed to thrive.
              </p>
              <Button size="lg">View All Resources</Button>
            </Reveal>
            <Reveal delay={0.4} className="lg:w-1/2 relative">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 relative shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/wild+dawgz.webp')" }}
                />
              </div>
            </Reveal>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
            <Reveal className="lg:w-1/2 space-y-8 text-right lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Visit Your Local{" "}
                <TypingText
                  text="Clubhouse"
                  className="font-script text-brand-blue"
                />
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                With over 45 locations across Michigan, there is likely a
                Clubhouse community near you. Experience the work-ordered day
                first-hand by scheduling a tour today.
              </p>
              <Button variant="burgundy" size="lg">
                Find a Location
              </Button>
            </Reveal>
            <Reveal delay={0.4} className="lg:w-1/2 relative">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 relative shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/charter+house+3.webp')" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-32 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <Reveal className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="text-gray-500 text-sm">
                  Prefer to speak directly? Here's how you can reach our main
                  office.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    label: "Email Address",
                    val: "info@clubhousemichigan.org",
                    icon: <Mail size={20} />,
                  },
                  {
                    label: "Phone Number",
                    val: "(517) 555-0123",
                    icon: <Phone size={20} />,
                  },
                  {
                    label: "Main Office",
                    val: "123 Community Way, Lansing, MI 48933",
                    icon: <MapPin size={20} />,
                  },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400  mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {info.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-900 p-12 shadow-inner border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-8 ">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                  ></textarea>
                  <Button className="w-full gap-3">
                    Send Message <Send size={14} />
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-[#1a3a5a] text-white text-center relative overflow-hidden">
        <Reveal>
          <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Become an advocate and help us create a more supportive world.
            </h2>
            <Button variant="secondary" size="lg">
              Become an Advocate
            </Button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
