"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const stories = [
  {
    id: "erma",
    name: "Erma",
    title: "Erma's Story",
    category: "education-stories",
    content:
      "I came to Oakland County in 2003, where I became a member of Clubhouse Inspiration in Oxford, Michigan. I came here in June feeling that I was a worthless human being. All of the staff treated me like I was an important part of the clubhouse. They went an extra mile to support me. Just one example was that I was having a difficult time getting my Slim Fast to take my medicine in the morning. One of the staff members realized it was important to me and took it upon himself to get it for me every month until I found other ways of getting it. The staff encouraged me to step outside of my comfort zone to do things I would never have attempted to do before I came there. Some of the trainings I have taken are: Toastmaster’s, WRAP, Anger Management, Assertiveness Training. In 2006, I was nominated and received the Rights and Advocacy Award. Now, not only do I receive support from the staff, but from some very loyal friends that I never had before.",
    image: "/bayside+9.webp",
  },
  {
    id: "matt",
    name: "Matt R.",
    title: "Matt's Story",
    category: "education-stories",
    content:
      "Before my clubhouse experience, I hung out with the wrong people, didn’t take care of my medical needs and got into a lot of trouble. My case manager told me about Pathways Clubhouse. I liked the atmosphere and needed something to keep me busy, so I decided to try it out. All I did at Pathways Clubhouse at first was phones, until the training grant came along, then everything sort of blossomed after that. Pathways paid for me to get my chauffeur’s license, so I could drive agency vehicles for the training grant and for member transport. I started to do public speaking and built two web sites. When I first started with the training stuff I felt shy and stuck to doing just the computer. As I got more comfortable, I started to talk more. I was published in the MRC 2006 Annual Report in a description of the accomplishments of the training. I actually teach now. Because of Andy’s speech at the March 29, 2007 training conference, and discussions with Pathways staff, it is my time to teach other members my skills, rather than me doing it all by myself. I have learned to deal with several different kinds of people, with all different diagnoses. The work I’ve done has helped me grow as an individual, developing from a shy person to someone who is involved in almost every aspect of the clubhouse.",
    image: "/CM+at+Shanty+Creek+Summer+2024.webp",
  },
];

const categoryData = {
  "education-stories": {
    title: "Education Stories",
    accent: "text-brand-blue",
  },
  "independence-stories": {
    title: "Independence Stories",
    accent: "text-brand-burgundy",
  },
  "employment-stories": {
    title: "Employment Stories",
    accent: "text-brand-blue",
  },
  "recovery-stories": {
    title: "Recovery Stories",
    accent: "text-brand-burgundy",
  },
};

export default function CategoryStoriesPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const data = categoryData[categorySlug as keyof typeof categoryData] || {
    title: "Stories",
    accent: "text-brand-blue",
  };

  const filteredStories = stories.filter((s) => s.category === categorySlug);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-blue">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/member-stories"
            className="text-sm font-bold text-white/70 hover:text-white transition-colors mb-8 inline-block "
          >
            &larr; Back to all stories
          </Link>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl md:text-4xl font-bold text-white leading-tight`}
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredStories.length > 0 ? (
            <div className="space-y-32">
              {filteredStories.map((story, idx) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-12"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-gray-100 shadow-lg">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <h2 className="text-sm md:text-xl font-bold text-brand-blue mb-8">
                      {story.title}
                    </h2>
                    <div className="text-sm text-[#4A4A68] dark:text-gray-300 leading-relaxed space-y-6 font-medium ">
                      <p className="border-l-4 border-brand-burgundy pl-8 py-2">
                        {story.content}
                      </p>
                    </div>
                    <p className="mt-10 text-xl font-bold font-script text-brand-burgundy">
                      — {story.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#4A4A68] font-medium">
                More stories coming soon to this category.
              </p>
              <Link href="/member-stories">
                <Button>EXPLORE OTHER CATEGORIES</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
