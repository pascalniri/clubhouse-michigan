import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LocationPreview from "@/components/location-preview";
import ProgramsSection from "@/components/programs-section";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <LocationPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
