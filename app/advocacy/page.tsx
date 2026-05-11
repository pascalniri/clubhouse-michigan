"use client";

import Navigation from "@/components/navigation";
import SubpageHero from "@/components/subpage-hero";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { Gavel, Megaphone, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdvocacyPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <SubpageHero
        title="Voice for"
        scriptText="Change & Progress"
        description="We advocate for the rights of people living with mental illness and work to expand the Clubhouse model across Michigan."
        backgroundColor="bg-brand-blue"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-8 leading-tight">
              Driving Policy, <br />
              Empowering Lives.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Our advocacy efforts focus on securing sustainable funding,
              reducing stigma, and ensuring that every Michigander has access to
              high-quality mental health support services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-burgundy/10 rounded-full flex items-center justify-center text-brand-burgundy">
                  <Gavel size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-blue dark:text-white">
                  Legislative Action
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Working with state representatives to prioritize mental health
                  funding.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <Megaphone size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-blue dark:text-white">
                  Public Awareness
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Educating the public to reduce the stigma associated with
                  mental illness.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-burgundy/10 rounded-full -m-8 animate-pulse" />
              <div className="relative h-full w-full rounded overflow-hidden shadow-2xl">
                <Image
                  src="/charter+house+3.webp"
                  alt="Advocacy in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-white/70 text-lg">
                See the difference our advocacy and Clubhouse programs make
                across the state.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Clubhouses", value: "30+" },
              { label: "Members Served", value: "5,000+" },
              { label: "Employment Rate", value: "45%" },
              { label: "Counties Represented", value: "100%" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-brand-burgundy">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold  text-white/60">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-10">
            Join the movement.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="burgundy" size="lg">
              Become an Advocate
            </Button>
            <Button variant="outline" size="lg">
              Donate to the Cause
            </Button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
