import TypingText from "@/components/typing-text";
import Reveal from "@/components/reveal";
import Image from "next/image";

export default function PhilosophicalTruth() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left Image */}
        <Reveal className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 shadow-xl overflow-hidden rounded-sm">
            <Image
              src="/bayside+9.webp"
              alt="Clubhouse Member sharing their story"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right Quote */}
        <Reveal delay={0.2} className="max-w-2xl text-center md:text-left">
          <p className="text-2xl md:text-4xl font-bold text-brand-blue dark:text-white leading-tight mb-6">
            "Recovery should mean stabilization and the{" "}
            <TypingText 
              text="opportunity" 
              className="font-script text-3xl md:text-5xl text-brand-burgundy inline-block" 
            />{" "}
            to build a meaningful life in a community. Everyone deserves the
            opportunity to contribute, belong, and build a meaningful life."
          </p>
          <p className="text-xl text-[#4A4A68] dark:text-gray-400 font-bold tracking-widest uppercase font-script">
            – The Clubhouse Philosophy
          </p>
        </Reveal>
      </div>
    </section>
  );
}
