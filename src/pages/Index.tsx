import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import VideoSection from "@/components/VideoSection";
import BackgroundLayer from "@/components/BackgroundLayer";
import SectionDivider from "@/components/SectionDivider";
import FeaturesSection from "@/components/FeaturesSection";
import IngredientsSection from "@/components/IngredientsSection";
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

      {/* ═══ URDU INFO GALLERY ═══ */}
      <section className="relative py-10 md:py-20 bg-gradient-to-b from-gold/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">
              مزید معلومات • More Info
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-3">
              تفصیلی <span className="text-herbal italic">رہنمائی</span>
            </h2>
            <p className="text-foreground/50 text-sm max-w-md mx-auto">
              Detailed information in Urdu for our valued customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: "/hair-urdu-pic-1.jpg", alt: "Urdu Hair Oil Info 1" },
              { src: "/hair-urdu-pic-2.jpg", alt: "Urdu Hair Oil Info 2" },
              { src: "/hair-urdu-pic-3.jpg", alt: "Urdu Hair Oil Info 3" },
            ].map((pic, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gold/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-card"
              >
                <img src={pic.src} alt={pic.alt} className="w-full h-auto object-cover block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
      <IngredientsSection />
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



