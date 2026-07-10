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
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium text-foreground tracking-[0.3em] leading-none uppercase mb-2 drop-shadow-sm">
            RIWAYAT
          </h1>
          <h2 className="text-xs md:text-sm lg:text-base font-serif text-gold mb-6 tracking-[0.3em] uppercase">
            The Essence of Herbal Wisdom
          </h2>

          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-[1.2] mb-4">
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

        {/* Right Column Visual - Takes up 6 columns */}
        <div className="lg:col-span-6 relative w-full h-[500px] md:h-[700px] flex items-center justify-center z-10 pb-12 lg:pb-0 mt-8 lg:mt-0 lg:translate-x-8 xl:translate-x-16">
          
          {/* Vertical Typography Background */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden md:flex flex-col pointer-events-none select-none opacity-40">
            <span className="text-[120px] font-display font-bold text-herbal/10 leading-[0.8] tracking-widest writing-vertical-rl rotate-180">
              HERBAL OIL
            </span>
            <span className="text-[120px] font-display font-bold text-transparent stroke-text-white leading-[0.8] tracking-widest writing-vertical-rl rotate-180" style={{ WebkitTextStroke: "1px rgba(163, 184, 153, 0.4)" }}>
              HERBAL OIL
            </span>
          </div>

          {/* Continuous Revolving Orbit Container for Ingredients */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] z-30 pointer-events-none"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {ingredientBenefits.map((ingredient, index) => {
              const angle = (index * 360) / ingredientBenefits.length;
              
              return (
                <div 
                  key={ingredient.name}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                >
                  {/* Positioned at the top edge of the rotating circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    
                    {/* Counter-rotation to keep the image perfectly upright */}
                    <motion.div
                      initial={{ rotate: -angle, scale: 0 }}
                      animate={{ rotate: -(angle + 360), scale: 1 }}
                      transition={{ 
                        rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                        scale: { delay: index * 0.1 + 0.5, duration: 0.8, type: "spring" }
                      }}
                      className="relative flex flex-col items-center justify-center"
                    >
                      <motion.div 
                        className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 drop-shadow-2xl z-20 group"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                      >
                        <img 
                          src={ingredient.src} 
                          alt={ingredient.name} 
                          className="w-full h-full object-contain hover:scale-125 transition-transform duration-300 cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full -z-10" />
                        
                        {/* Tooltip on Hover */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max max-w-[120px] md:max-w-[150px] bg-background/95 backdrop-blur-md border border-herbal/20 p-2 rounded-lg text-center shadow-xl z-50">
                          <span className="block text-[9px] md:text-xs font-bold text-gold uppercase mb-0.5">{ingredient.name}</span>
                          <span className="block text-[8px] md:text-[10px] text-foreground/80 leading-tight">{ingredient.benefit}</span>
                        </div>
                      </motion.div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Static Bottle Container - Centered */}
          <div className="relative z-20 w-32 sm:w-48 md:w-56 lg:w-[260px] h-auto flex-shrink-0">
            <img 
              src={bottleImage} 
              alt="Riwayat Bottle" 
              className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] lg:drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
