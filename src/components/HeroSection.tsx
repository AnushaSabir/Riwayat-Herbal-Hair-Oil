import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import amla from "@/assets/ingredients/amla.png";
import kalonji from "@/assets/ingredients/kalonji.png";
import methi from "@/assets/ingredients/methi.png";
import mustardOil from "@/assets/ingredients/mustard-oil.png";
import neem from "@/assets/ingredients/neem.png";
import onion from "@/assets/ingredients/onion.png";
import reetha from "@/assets/ingredients/reetha.png";
import shikakai from "@/assets/ingredients/shikakai.png";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";
import { Star } from "lucide-react";

const ingredientBenefits = [
  { src: amla, name: "Amla", benefit: "Promotes growth & prevents graying" },
  { src: shikakai, name: "Shikakai", benefit: "Natural cleanser for healthy scalp" },
  { src: reetha, name: "Reetha", benefit: "Adds natural shine and softness" },
  { src: kalonji, name: "Kalonji", benefit: "Reverses hair loss & thinning" },
  { src: methi, name: "Methi", benefit: "Repairs damaged hair roots" },
  { src: onion, name: "Onion", benefit: "Rich in sulfur, boosts thick growth" },
  { src: neem, name: "Neem", benefit: "Fights dandruff & infections" },
  { src: mustardOil, name: "Mustard Oil", benefit: "Deeply conditions & nourishes" },
];

const HeroSection = () => {
  const addItem = useCartStore((state) => state.addItem);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleAddToCart = () => {
    addItem({
      id: 'riwayat-oil-250ml',
      name: 'Riwayat Herbal Hair Oil (250ml)',
      price: 1499,
      quantity: 1,
      image: bottleImage
    });
    toast.success("Added to basket!");
  };

  // Pre-calculated positions for 8 items in an ellipse around the bottle
  const orbitPositions = [
    { top: "5%", left: "50%" }, // Top
    { top: "20%", right: "10%" }, // Top Right
    { top: "50%", right: "0%" }, // Right
    { bottom: "20%", right: "10%" }, // Bottom Right
    { bottom: "0%", left: "50%" }, // Bottom
    { bottom: "20%", left: "10%" }, // Bottom Left
    { top: "50%", left: "0%" }, // Left
    { top: "20%", left: "10%" }, // Top Left
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center pt-24 lg:pt-0"
    >
      {/* Right side background curved split (Riwayat Dark Theme) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] bg-herbal/10 rounded-t-[100px] lg:rounded-t-none lg:rounded-l-[200px] z-0 transition-all duration-1000 origin-right border-l border-herbal/20" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Container - Extended width to push content closer to edges */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
        
        {/* Left Column Content - Takes up 6 columns, pulled to the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20 pt-32 lg:pt-40 xl:pt-48 lg:-ml-4 xl:-ml-12"
        >
          {/* Big RIWAYAT Branding */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium text-herbal tracking-[0.3em] leading-none uppercase mb-2 drop-shadow-sm">
            RIWAYAT
          </h1>
          <h2 className="text-xs md:text-sm lg:text-base font-serif text-gold mb-6 tracking-[0.3em] uppercase">
            The Essence of Herbal Wisdom
          </h2>

          <h3 className="text-3xl md:text-5xl font-display font-bold text-herbal leading-[1.2] mb-4">
            Life Moves Fast. <br />
            Your Hair Care <br />
            Should Too.
          </h3>
          
          <p className="text-sm md:text-base text-foreground/80 mb-8 max-w-lg font-medium leading-relaxed mx-auto lg:mx-0">
            Riwayat is modern nourishment for your fast-paced life — a premium, organic, 
            and balanced herbal oil that's a complete superfood for your hair.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full lg:w-auto justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="px-8 py-4 bg-gold text-white font-display text-lg rounded-full shadow-gold transition-all duration-300 w-full sm:w-auto uppercase tracking-widest font-semibold"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-herbal/50 text-herbal bg-transparent hover:bg-herbal/10 font-display text-lg rounded-full transition-all duration-300 w-full sm:w-auto uppercase tracking-widest"
            >
              Learn More
            </motion.button>
          </div>

          {/* Reviews Block */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center overflow-hidden shadow-lg">
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=transparent`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 text-gold">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold text-foreground ml-1">5k+ Reviews</span>
              </div>
              <span className="text-xs text-foreground/60">Customers Are Satisfied</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Visual - Infographic Style */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center z-10 pt-16 pb-8 lg:pt-0 lg:pb-0 translate-x-0 sm:translate-x-4 md:translate-x-8 lg:translate-x-16 xl:translate-x-24 min-h-[400px] lg:min-h-[600px] scale-[0.95] sm:scale-100 origin-center">

          {/* === LEFT INGREDIENTS (4 items) === */}
          <div className="flex flex-col justify-around gap-2 sm:gap-3 lg:gap-4 z-20 w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px]">
            {ingredientBenefits.slice(0, 4).map((ing, i) => (
              <motion.div
                key={ing.name}
                animate={{ opacity: [0, 1, 1, 0], x: [40, 0, 0, 40] }}
                transition={{ duration: 5, times: [0, 0.2, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.08 }}
                className="flex items-center gap-1 sm:gap-2 group"
              >
                {/* Image */}
                <motion.div
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 drop-shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={ing.src} alt={ing.name} className="w-full h-full object-contain" />
                </motion.div>
                {/* Text */}
                <div className="text-right flex-1">
                  <p className="text-[7px] sm:text-[10px] lg:text-xs font-bold text-gold uppercase tracking-tight sm:tracking-wide leading-tight">{ing.name}</p>
                  <p className="text-[8px] lg:text-[9px] text-foreground/60 leading-tight mt-0.5 hidden lg:block">{ing.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* === LEFT ARROWS === */}
          <div className="flex flex-col justify-around gap-3 lg:gap-4 z-20 mx-0.5 sm:mx-1">
            {ingredientBenefits.slice(0, 4).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
                transition={{ duration: 5, times: [0, 0.25, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.08 }}
                className="flex items-center origin-left"
              >
                <div className="w-3 sm:w-4 lg:w-6 h-px border-t border-dashed border-gold/50" />
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold/60 flex-shrink-0">
                  <path d="M0 4 L6 0 L6 8 Z" fill="currentColor" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* === BOTTLE CENTER === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative z-30 w-40 sm:w-44 md:w-56 lg:w-[300px] h-auto flex-shrink-0 mx-1 sm:mx-0"
          >
            <img
              src={bottleImage}
              alt="Riwayat Bottle"
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* === RIGHT ARROWS === */}
          <div className="flex flex-col justify-around gap-3 lg:gap-4 z-20 mx-0.5 sm:mx-1">
            {ingredientBenefits.slice(4).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
                transition={{ duration: 5, times: [0, 0.25, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.08 }}
                className="flex items-center origin-right"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold/60 flex-shrink-0">
                  <path d="M8 4 L2 0 L2 8 Z" fill="currentColor" />
                </svg>
                <div className="w-3 sm:w-5 lg:w-7 h-px border-t border-dashed border-gold/50" />
              </motion.div>
            ))}
          </div>

          {/* === RIGHT INGREDIENTS (4 items) === */}
          <div className="flex flex-col justify-around gap-2 sm:gap-3 lg:gap-4 z-20 w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px]">
            {ingredientBenefits.slice(4).map((ing, i) => (
              <motion.div
                key={ing.name}
                animate={{ opacity: [0, 1, 1, 0], x: [-40, 0, 0, -40] }}
                transition={{ duration: 5, times: [0, 0.2, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.08 }}
                className="flex items-center gap-1 sm:gap-2 group flex-row-reverse"
              >
                {/* Image */}
                <motion.div
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 drop-shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={ing.src} alt={ing.name} className="w-full h-full object-contain" />
                </motion.div>
                {/* Text */}
                <div className="text-left flex-1">
                  <p className="text-[7px] sm:text-[10px] lg:text-xs font-bold text-gold uppercase tracking-tight sm:tracking-wide leading-tight">{ing.name}</p>
                  <p className="text-[8px] lg:text-[9px] text-foreground/60 leading-tight mt-0.5 hidden lg:block">{ing.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

