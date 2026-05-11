"use client";

import Navigation from "@/components/navigation";
import SubpageHero from "@/components/subpage-hero";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";

export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <SubpageHero
        title="Privacy"
        scriptText="Policy & Ethics"
        description="We are committed to protecting your privacy and ensuring the security of your personal information."
        backgroundColor="bg-brand-blue"
      />

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Your Privacy Matters</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Clubhouse Michigan respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.
            </p>

            <h3 className="text-2xl font-bold mb-4">How We Use Your Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Data Security</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
