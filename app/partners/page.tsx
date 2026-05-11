"use client";

import Navigation from "@/components/navigation";
import SubpageHero from "@/components/subpage-hero";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, FileText, Share2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerResources = [
  {
    title: "Accreditation Support",
    description:
      "Access templates, guidelines, and expert advice to help your clubhouse achieve and maintain International Accreditation.",
    icon: Award,
  },
  {
    title: "Data & Reporting",
    description:
      "Standardized tools for tracking member outcomes, employment statistics, and community impact.",
    icon: LayoutDashboard,
  },
  {
    title: "Funding Opportunities",
    description:
      "Curated list of grants, state funding updates, and collaborative fundraising resources.",
    icon: FileText,
  },
  {
    title: "Collaborative Projects",
    description:
      "Join state-wide initiatives and share best practices with other clubhouse directors and staff.",
    icon: Share2,
  },
];

export default function PartnerPortalPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <SubpageHero
        title="Partner"
        scriptText="Portal & Network"
        description="A dedicated space for Michigan Clubhouse directors, staff, and organizational partners to access shared resources and tools."
        backgroundColor="bg-gray-900"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerResources.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="h-full bg-gray-50 dark:bg-gray-800 p-10 border-b-4 border-brand-burgundy transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl group">
                <div className="w-14 h-14 bg-brand-blue text-white rounded flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 text-brand-burgundy h-auto"
                >
                  Access Resource <span>→</span>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded overflow-hidden shadow-2xl">
                <Image
                  src="/bayside+9.webp"
                  alt="Partner collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-blue p-8 rounded text-white shadow-xl hidden md:block max-w-xs">
                <p className="text-sm italic font-medium leading-relaxed">
                  "Working together as a state-wide network has transformed how
                  we serve our community."
                </p>
                <div className="mt-4 font-bold text-xs  text-brand-burgundy">
                  — Clubhouse Director
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-8 leading-tight">
                  Strengthening our <br />
                  state-wide network.
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Clubhouse Michigan provides the infrastructure for
                    collaboration across all 30+ clubhouses in the state. By
                    sharing knowledge and resources, we ensure a consistent,
                    high-quality experience for all members.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Interested in becoming a partner organization or starting a
                    new clubhouse? We provide the guidance and support needed to
                    bring the model to your community.
                  </p>
                  <Button size="lg">Partner with us</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
