import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import amlaImg from "@/assets/ingredients/amla.png";
import reethaImg from "@/assets/ingredients/reetha.png";
import neemImg from "@/assets/ingredients/neem.png";
import onionImg from "@/assets/ingredients/onion.png";
import kalonjiImg from "@/assets/ingredients/kalonji.png";
import methiImg from "@/assets/ingredients/methi.png";
import mustardImg from "@/assets/ingredients/mustard-oil.png";
import shikakaiImg from "@/assets/ingredients/shikakai.png";

const ingredients = [
  { name: "Amla", benefit: "Vitamin C Rich", image: amlaImg },
  { name: "Reetha", benefit: "Natural Cleanser", image: reethaImg },
  { name: "Neem", benefit: "Antibacterial", image: neemImg },
  { name: "Red Onion", benefit: "Sulfur Rich", image: onionImg },
  { name: "Kalonji", benefit: "Stronger Hair", image: kalonjiImg },
  { name: "Methi Dana", benefit: "Protein Boost", image: methiImg },
  { name: "Mustard Oil", benefit: "Deep Nourish", image: mustardImg },
  { name: "Shikakai", benefit: "Natural Shine", image: shikakaiImg },
];

const IngredientsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="ingredients"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-gold font-elegant tracking-[0.4em] uppercase text-xs mb-4 block">The Secret Formula</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-herbal uppercase tracking-tight leading-tight">
            Nature's <span className="italic">Finest</span> Elements
          </h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto h-[700px] md:h-[900px] flex items-center justify-center pt-20">
          {/* Central Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative z-20 w-full max-w-[400px] md:max-w-[700px] lg:max-w-[900px]"
          >
            <video
              src="/videos/hair-ingredients.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none rounded-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
