import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import resultsInfographic from "@/assets/infographic-results.jpg";

const results = [
  { label: "Root Strength", percentage: 95 },
  { label: "Fall Reduction", percentage: 88 },
  { label: "Volume Boost", percentage: 92 },
  { label: "Natural Radiance", percentage: 97 },
];

const AnimatedCounter = ({ target, isInView }: { target: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, isInView]);

  return <span>{count}</span>;
};

const ResultsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 border-b border-black/10 pb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-xl"
            >
              <span className="text-gold font-elegant tracking-[0.5em] uppercase text-xs mb-6 block opacity-80">Proven Performance</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-herbal leading-[1.1] tracking-tight">
                Beyond <span className="italic">Visual</span> Impact.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="max-w-md text-right md:pb-2"
            >
              <p className="text-foreground/60 font-elegant italic text-lg md:text-xl leading-relaxed">
                "Scientific results meet traditional soul. Experience the measurable change in every strand."
              </p>
              <div className="w-12 h-[1px] bg-gold/40 ml-auto mt-6" />
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-32 relative group"
            >
              <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full -z-10" />
              <div className="relative overflow-hidden rounded-[80px] border border-black/40 shadow-2xl p-4 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                <motion.img
                  src={resultsInfographic}
                  alt="Hair Growth Results Infographic"
                  className="w-full h-auto max-h-[75vh] rounded-[64px] object-contain"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Subtle label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold/30" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold">Documented Growth Journey</span>
                <div className="w-12 h-[1px] bg-gold/30" />
              </div>
            </motion.div>

            {/* Updated stats grid with glassmorphism cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-black/10 backdrop-blur-xl border border-black/30 p-10 rounded-[48px] shadow-xl hover:shadow-gold/5 transition-all duration-500 flex flex-col items-center group relative overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 -z-10" />

                  <div className="text-6xl md:text-7xl font-display font-bold text-herbal tracking-tighter flex items-baseline mb-6 group-hover:scale-110 transition-transform duration-500">
                    <AnimatedCounter target={result.percentage} isInView={isInView} />
                    <span className="text-2xl md:text-3xl text-gold ml-1">%</span>
                  </div>

                  <div className="w-10 h-[1px] bg-gold/40 mb-6 group-hover:w-16 transition-all duration-500" />

                  <h3 className="text-herbal/60 font-elegant uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold transition-colors group-hover:text-herbal/90">
                    {result.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
