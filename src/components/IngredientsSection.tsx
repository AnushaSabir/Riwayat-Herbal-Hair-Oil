import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import {
  Leaf, Droplets, Sparkles, Shield, Zap, Heart,
  Sun, FlaskConical, TreePine, Wind, Flame, Star,
  Flower2, CircleDot, Waves, Sprout, Activity
} from "lucide-react";

// ─── 21 Hair Oil Ingredients ───────────────────────────────────────────────
const ingredients = [
  {
    name: "Amla (Indian Gooseberry)",
    benefit: "Richest source of Vitamin C — strengthens roots, prevents greying & boosts hair growth",
    icon: <Sparkles className="w-10 h-10 text-gold" />,
  },
  {
    name: "Red Onion",
    benefit: "High sulfur content activates dormant follicles & dramatically reduces hair fall",
    icon: <Flame className="w-10 h-10 text-gold" />,
  },
  {
    name: "Kalonji (Black Seed)",
    benefit: "Thymoquinone restores thinning hair & promotes thick, strong regrowth",
    icon: <CircleDot className="w-10 h-10 text-gold" />,
  },
  {
    name: "Methi Dana (Fenugreek)",
    benefit: "Protein & nicotinic acid rebuild each hair strand from within, reducing breakage",
    icon: <Leaf className="w-10 h-10 text-gold" />,
  },
  {
    name: "Neem",
    benefit: "Powerful antibacterial — eliminates dandruff, soothes scalp & unclogs follicles",
    icon: <TreePine className="w-10 h-10 text-gold" />,
  },
  {
    name: "Reetha (Soapnut)",
    benefit: "Natural gentle cleanser removes impurities while adding silky softness",
    icon: <Waves className="w-10 h-10 text-gold" />,
  },
  {
    name: "Shikakai",
    benefit: "Conditions hair from root to tip, adds natural shine & detangles effortlessly",
    icon: <Flower2 className="w-10 h-10 text-gold" />,
  },
  {
    name: "Mustard Oil (Sarson)",
    benefit: "Deep-penetrating base oil stimulates circulation & locks in lasting moisture",
    icon: <Droplets className="w-10 h-10 text-gold" />,
  },
  {
    name: "Bhringraj",
    benefit: "The 'King of Herbs' — reverses hair loss, calms the scalp & promotes rapid growth",
    icon: <Star className="w-10 h-10 text-gold" />,
  },
  {
    name: "Brahmi",
    benefit: "Strengthens hair roots at a cellular level, prevents split ends & adds volume",
    icon: <Shield className="w-10 h-10 text-gold" />,
  },
  {
    name: "Coconut Oil",
    benefit: "Penetrates the hair shaft to reduce protein loss & provide deep moisture",
    icon: <Sun className="w-10 h-10 text-gold" />,
  },
  {
    name: "Castor Oil",
    benefit: "Ricinoleic acid boosts scalp circulation for visibly thicker, fuller hair",
    icon: <Zap className="w-10 h-10 text-gold" />,
  },
  {
    name: "Aloe Vera",
    benefit: "Soothes inflammation, balances scalp pH & acts as a natural conditioning agent",
    icon: <Heart className="w-10 h-10 text-gold" />,
  },
  {
    name: "Argan Oil (Liquid Gold)",
    benefit: "Rich in antioxidants & vitamin E, deeply moisturizes, tames frizz & adds incredible shine",
    icon: <FlaskConical className="w-10 h-10 text-gold" />,
  },
  {
    name: "Til Oil (Sesame)",
    benefit: "Rich in antioxidants & minerals that protect hair from UV damage & environmental stress",
    icon: <Wind className="w-10 h-10 text-gold" />,
  },
  {
    name: "Gudhal Ka Phool (Hibiscus)",
    benefit: "Rich in amino acids, it stimulates hair growth, prevents baldness, and treats dandruff",
    icon: <Flower2 className="w-10 h-10 text-gold" />,
  },
  {
    name: "Kari Patta (Curry Leaves)",
    benefit: "Loaded with beta-carotene and proteins to reduce hair loss and increase hair growth",
    icon: <Leaf className="w-10 h-10 text-gold" />,
  },
  {
    name: "Baal Jhar (Jatamansi)",
    benefit: "Promotes hair growth, darkens hair naturally, and prevents premature greying",
    icon: <Sprout className="w-10 h-10 text-gold" />,
  },
  {
    name: "Rosemary",
    benefit: "Improves cellular generation, increasing hair thickness and stimulating hair growth",
    icon: <TreePine className="w-10 h-10 text-gold" />,
  },
  {
    name: "Ginseng",
    benefit: "Increases dermal cells on the scalp, strengthening follicles and roots",
    icon: <Activity className="w-10 h-10 text-gold" />,
  },
  {
    name: "Vitamin E Oil",
    benefit: "A potent antioxidant that supports a healthy scalp and hair, maintaining growth",
    icon: <Droplets className="w-10 h-10 text-gold" />,
  },
];

const IngredientsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });

  return (
    <section
      id="ingredients"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-elegant tracking-[0.4em] uppercase text-xs mb-4 block">
            The Secret Formula
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-herbal uppercase tracking-tight leading-tight">
            Nature's <span className="italic">Finest</span> Elements
          </h2>
          <p className="text-foreground/50 font-elegant text-base md:text-lg mt-4 max-w-xl mx-auto">
            21 rare herbs & oils — each chosen for one reason: your hair's transformation.
          </p>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
        </motion.div>

        {/* ── Central Bottle Video ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center mb-24"
        >
          <video
            src="/videos/hair-ingredients.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[380px] md:max-w-[650px] lg:max-w-[850px] h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none rounded-3xl"
          />
        </motion.div>

        {/* ── 21 Ingredient Cards (same style as JointsOilPage) ── */}
        <div ref={gridRef} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-display text-herbal">
              21 Herbal <span className="text-gold italic">Ingredients</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group p-5 rounded-2xl bg-[#133937] animated-border hover:bg-[#0d2726] border border-[#0d2726] transition-all duration-300 hover:-translate-y-1 text-center shadow-md"
              >
                <div className="text-4xl mb-3 flex justify-center">{ing.icon}</div>
                <h3 className="font-display font-bold text-sm mb-1.5 text-white">{ing.name}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{ing.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IngredientsSection;
