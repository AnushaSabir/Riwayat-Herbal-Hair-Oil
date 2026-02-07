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
          <h2 className="text-4xl md:text-6xl font-display font-medium text-navy uppercase tracking-tight leading-tight">
            Nature's <span className="italic">Finest</span> Elements
          </h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto h-[700px] md:h-[900px] flex items-center justify-center pt-20">
          {/* Central Bottle with 3D Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative z-20 pointer-events-none"
          >
            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              src={bottleImage}
              alt="Riwayat Bottle"
              className="w-56 md:w-80 h-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Ingredients Circular Layout with 3D Tilt */}
          {ingredients.map((ingredient, index) => {
            const angle = (index / ingredients.length) * 2 * Math.PI;
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 380;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={isInView ? { opacity: 1, x, y } : {}}
                transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                whileHover={{
                  scale: 1.15,
                  rotateX: -10,
                  rotateY: 10,
                  z: 50
                }}
                className="absolute z-10 p-5 bg-white/20 backdrop-blur-lg rounded-[24px] border border-white/30 shadow-md group cursor-pointer transition-all hover:bg-white/40 hover:shadow-gold/10"
                style={{
                  perspective: 800,
                }}
              >
                <div className="flex flex-col items-center gap-3 relative">
                  {/* Hotspot */}
                  <div className="absolute -top-1 -right-1 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-60" />
                  </div>

                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/80 p-3 flex items-center justify-center shadow-inner overflow-hidden group-hover:scale-110 transition-transform duration-500 relative">
                    <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-contain relative z-10" />
                  </div>
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-16 w-40 bg-navy/95 backdrop-blur-xl text-white px-4 py-3 rounded-2xl pointer-events-none transform translate-y-2 group-hover:translate-y-0 shadow-2xl border border-white/10">
                    <span className="text-[8px] font-elegant tracking-[0.3em] text-gold uppercase mb-1 block">Pure Extract</span>
                    <p className="font-bold uppercase tracking-[0.1em] text-[10px] mb-0.5">{ingredient.name}</p>
                    <p className="font-elegant text-white/70 text-[9px] italic">{ingredient.benefit}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
