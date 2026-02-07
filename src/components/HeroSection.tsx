import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useRef } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import amlaLeaves from "@/assets/amla-leaves.png";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";


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

  // Mouse movement for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const { scrollY } = useScroll();
  const yMist = useTransform(scrollY, [0, 1000], [0, 400]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Minimal Matte Background Overlay */}
      <div className="absolute inset-0 bg-background z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 flex flex-col items-center"
          >
            {/* Riwayat Branding Section */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-branding-blue tracking-[0.3em] leading-none uppercase mb-4 drop-shadow-sm">
              RIWAYAT
            </h1>
            <h2 className="text-xl md:text-2xl font-serif text-navy/60 mb-8 tracking-[0.2em] italic uppercase">
              The Essence of Herbal Wisdom
            </h2>

            {/* Natural Herbal Formula with Golden Lines */}
            <div className="w-full max-w-lg flex items-center justify-between mb-10 opacity-60">
              <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <p className="px-6 text-[10px] md:text-xs text-navy font-elegant tracking-[0.5em] uppercase whitespace-nowrap">
                Premium Herbal Formula
              </p>
              <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            </div>

            <div className="space-y-4 mb-14">
              <p className="text-base md:text-xl text-navy font-elegant font-medium tracking-[0.4em] flex items-center justify-center gap-3 uppercase">
                Strong <span className="text-gold/40">•</span> Thick <span className="text-gold/40">•</span> Silky
              </p>
              <p className="text-6xl md:text-8xl font-script text-navy/90 pt-4 leading-tight">
                Root se Growth tak
              </p>
            </div>
          </motion.div>

          {/* Hero bottle area with 3D movement and Magic Particles */}
          <div className="relative mx-auto w-full max-w-md h-[450px] md:h-[550px] flex items-center justify-center">

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            {/* 3D Bottle Container */}
            <motion.div
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d"
              }}
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 1, 0, -1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src={bottleImage}
                alt="Riwayat Herbal Hair Oil Bottle"
                className="w-56 md:w-72 h-auto"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Internal 3D depth elements (shadow/highlight) could go here */}
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-14">
            <div className="flex flex-col items-center">
              <span className="text-navy/40 text-xs font-elegant tracking-widest uppercase mb-1">Introductory Price</span>
              <span className="text-4xl font-display font-medium text-navy tracking-tight">Rs. 1,499</span>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#d4af37",
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="px-16 py-6 bg-gold text-white font-display text-lg rounded-full shadow-xl transition-all duration-500 uppercase tracking-[0.3em] font-medium"
            >
              Secure Choice
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
