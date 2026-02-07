import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const addItem = useCartStore((state) => state.addItem);

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

  return (
    <section
      ref={sectionRef}
      className="relative py-40 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[80px] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="mb-14 relative group cursor-pointer"
            >
              <motion.img
                src={bottleImage}
                className="w-40 md:w-64 h-auto"
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.15))"
                }}
                whileHover={{
                  rotateX: -10,
                  rotateY: 10,
                  scale: 1.05
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold rounded-full blur-[100px] -z-10"
              />
            </motion.div>

            <span className="text-gold font-elegant tracking-[0.5em] uppercase text-xs mb-8 block opacity-80">Final Step to Transformation</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-display font-medium text-foreground mb-8 leading-[1.1] tracking-tight"
            >
              Ready to Write <br />Your <span className="italic">Riwayat?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-foreground/60 font-elegant text-xl md:text-2xl mb-14 max-w-2xl mx-auto italic"
            >
              "Don't just dream of better hair. Own it. Order your bottle of Riwayat magic today and start your transformation."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#d4af37",
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="px-20 py-7 bg-gold text-white font-display text-xl rounded-full shadow-2xl transition-all duration-500 uppercase tracking-[0.3em] font-medium"
              >
                Secure My Choice
              </motion.button>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-foreground/40 font-elegant tracking-widest uppercase">In Stock • Ready to Ship</span>
              </div>
            </motion.div>

            <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-16 text-foreground/50 font-elegant text-[11px] uppercase tracking-[0.2em] border-t border-navy/5 pt-16">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-gold rounded-full" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-gold rounded-full" />
                <span>COD Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-gold rounded-full" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
