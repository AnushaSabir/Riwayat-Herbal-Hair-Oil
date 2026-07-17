import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import VideoSection from "@/components/VideoSection";
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
import { useNavigate } from "react-router-dom";

const hairVideos = [
  { src: "/videos/hair-1.mp4", label: "Our Story" },
  { src: "/videos/hair-2.mp4", label: "How It Works" },
  { src: "/videos/hair-3.mp4", label: "Results" },
];

const Index = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden relative">
      <BackgroundLayer />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <VideoSection videos={hairVideos} title="The Making of Riwayat" subtitle="Discover the Magic" accentColor="gold" />
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

      {/* Back to home floating button */}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-24 left-4 z-40 bg-background/80 backdrop-blur-md border border-gold/20 text-gold/70 hover:text-gold hover:border-gold/50 text-[10px] font-display uppercase tracking-widest px-3 py-2 rounded-full transition-all hover:scale-105 shadow-lg"
      >
        ← All Products
      </button>
    </main>
  );
};

export default Index;



