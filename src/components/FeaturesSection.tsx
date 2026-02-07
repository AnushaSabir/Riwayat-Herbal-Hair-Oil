import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Shield, Sparkles, Heart, TrendingUp, Ban } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Herbal Formula", description: "Pure natural ingredients with no synthetic additives" },
  { icon: Shield, title: "Strengthens Hair from Roots", description: "Deep nourishment for stronger, healthier hair" },
  { icon: TrendingUp, title: "Promotes Natural Growth", description: "Stimulates follicles for visible hair growth" },
  { icon: Sparkles, title: "Thick, Silky & Shiny Hair", description: "Transform dull hair into lustrous locks" },
  { icon: Heart, title: "Reduces Hair Fall", description: "Clinically proven to minimize hair loss" },
  { icon: Ban, title: "No Chemicals • No Parabens", description: "Safe for daily use, gentle on scalp" },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Section Side Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 text-left"
          >
            <span className="text-gold font-elegant tracking-[0.4em] uppercase text-xs mb-6 block opacity-80">The Benefits</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-foreground mb-8 leading-[1.1] tracking-tight">
              Why <span className="italic">Thousands</span> <br />Trust Riwayat
            </h2>
            <div className="w-20 h-[1px] bg-gold/30 mb-8" />
            <p className="text-lg text-foreground/70 font-elegant leading-relaxed mb-10 max-w-md italic">
              "We combine ancient herbal wisdom with modern science to give you the hair you've always dreamed of. No shortcuts, just pure nature."
            </p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 text-xs font-elegant tracking-widest text-foreground/40 uppercase">
                <span className="w-8 h-[1px] bg-background/10" />
                <span>Crafted with Care</span>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:w-3/5 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 p-10 rounded-[40px] shadow-lg hover:shadow-gold/5 hover:bg-white/20 transition-all duration-500 group"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/40 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-foreground/80 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 font-elegant leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
