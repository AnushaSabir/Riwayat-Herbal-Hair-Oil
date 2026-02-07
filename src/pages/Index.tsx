import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import BackgroundLayer from "@/components/BackgroundLayer";
import SectionDivider from "@/components/SectionDivider";
import FeaturesSection from "@/components/FeaturesSection";
import IngredientsSection from "@/components/IngredientsSection";
import JourneySection from "@/components/JourneySection";
import WhyRiwayatSection from "@/components/WhyRiwayatSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import BottleExplorer from "@/components/BottleExplorer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden relative">
      <BackgroundLayer />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ShowcaseSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <IngredientsSection />
      <SectionDivider />
      <JourneySection />
      <SectionDivider />
      <BottleExplorer />
      <SectionDivider />
      <WhyRiwayatSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <ResultsSection />
      <SectionDivider />
      <CTASection />
      <Footer />

      <WhatsAppButton />
      <StickyCTA />
    </main>
  );
};

export default Index;
