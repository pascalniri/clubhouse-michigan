"use client";

import Navigation from "@/components/navigation";
import SubpageHero from "@/components/subpage-hero";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const familyServices = [
  {
    title: "Educational Workshops",
    description:
      "Learn about mental health, the clubhouse model, and how to best support your loved one's recovery journey.",
    icon: Shield,
    image: "/clubhouse_hero_image.webp",
  },
  {
    title: "Support Groups",
    description:
      "Connect with other families who understand your experience in a safe, confidential environment.",
    icon: MessageCircle,
    image: "/member+stories+2.webp",
  },
  {
    title: "Advocacy Training",
    description:
      "Gain the skills to advocate for your loved one and for better mental health services in your community.",
    icon: Heart,
    image: "/clubhouse_michigan_hero.webp",
  },
];

export default function FamilySupportPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <SubpageHero
        title="Family"
        scriptText="Support & Guidance"
        description="We believe recovery is a journey for the whole family. Discover resources, support groups, and education tailored for loved ones."
        backgroundColor="bg-[#923445]"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">
              You are not alone in this journey.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Clubhouse Michigan provides a network of support for families,
              ensuring they have the tools and community needed to thrive
              alongside their loved ones.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {familyServices.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group bg-gray-50 dark:bg-gray-800 rounded overflow-hidden transition-all hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 bg-brand-burgundy/10 rounded flex items-center justify-center mb-4 text-brand-burgundy">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-brand-blue dark:text-brand-burgundy h-auto"
                  >
                    Learn More <span>→</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-8">
                Family Resource Center
              </h2>
              <ul className="space-y-6">
                {[
                  "Understanding Mental Health Recovery",
                  "Navigating the Healthcare System",
                  "Crisis Intervention Resources",
                  "Rights and Legal Advocacy",
                  "Self-Care for Caregivers",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-brand-burgundy rounded-full" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:w-1/2 aspect-video relative rounded overflow-hidden shadow-2xl">
            <Image
              src="/CM+at+Shanty+Creek+Summer+2024.webp"
              alt="Family resource"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
