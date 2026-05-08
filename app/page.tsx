import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhatIsAClubhouse from "@/components/what-is-a-clubhouse";
import HowItWorks from "@/components/how-it-works";
import PhilosophicalTruth from "@/components/philosophical-truth";
import OutcomesImpact from "@/components/outcomes-impact";
import TheProblem from "@/components/the-problem";
import SystemPositioning from "@/components/system-positioning";
import OpportunityPolicy from "@/components/opportunity-policy";
import PrimaryCTA from "@/components/primary-cta";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navigation />
      <HeroSection />
      <PhilosophicalTruth />
      <TheProblem />
      <WhatIsAClubhouse />
      <HowItWorks />
      <OutcomesImpact />
      <SystemPositioning />
      <OpportunityPolicy />
      <PrimaryCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
