"use client";

import Navigation from "@/components/navigation";
import SubpageHero from "@/components/subpage-hero";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Briefcase, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Education & Employment",
    description:
      "Access support for returning to school or finding meaningful work through our transitional and independent employment programs.",
    icon: Briefcase,
    image: "/charter+house+3.webp",
  },
  {
    title: "Wellness & Recovery",
    description:
      "Join holistic health programs focused on physical wellness, nutrition, and mental health recovery in a supportive community.",
    icon: HeartPulse,
    image: "/wild+dawgz.webp",
  },
  {
    title: "Social & Community",
    description:
      "Build lasting friendships and a sense of belonging through daily clubhouse activities and social events.",
    icon: Users,
    image: "/bayside+9.webp",
  },
  {
    title: "Skill Building",
    description:
      "Develop practical skills in technology, culinary arts, administration, and more through our work-ordered day.",
    icon: BookOpen,
    image: "/CM+at+Shanty+Creek+Summer+2024.webp",
  },
];

export default function MemberResourcesPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <SubpageHero
        title="Member"
        scriptText="Resources & Support"
        description="Everything you need to navigate your journey with Clubhouse Michigan. From education to employment, we're here to help you grow."
        backgroundColor="bg-brand-blue"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {resources.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative overflow-hidden bg-gray-50 dark:bg-gray-800 rounded p-8 transition-all hover:shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3 aspect-square relative rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded flex items-center justify-center mb-4 text-brand-blue">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-brand-burgundy h-auto"
                    >
                      Learn More <span className="text-xl">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-burgundy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need immediate assistance?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our team is ready to help you find the right clubhouse or resource
              for your specific needs.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Member Services
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
