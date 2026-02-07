import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Leaf, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Sourced from the heart of local harvest, processed with traditional wisdom.",
  },
  {
    icon: Shield,
    title: "Safe & Pure",
    description: "Zero synthetic additives, zero parabens. Just pure hair health.",
  },
  {
    icon: FlaskConical,
    title: "Proven Results",
    description: "Centuries-old desi nuskha perfected for modern hair care needs.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Triple-refined oils to ensure the highest absorption and efficacy.",
  },
];

const WhyRiwayatSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-elegant tracking-[0.4em] uppercase text-xs mb-6 block opacity-80">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-navy mb-8 leading-[1.1] tracking-tight">
              Rooted In <span className="italic">Wisdom</span>,<br />Driven By Nature.
            </h2>
            <div className="w-20 h-[1px] bg-gold/30 mb-10" />
            <p className="text-lg text-navy/70 font-elegant leading-relaxed mb-12 max-w-lg italic">
              "Riwayat is not just an oil; it's a legacy of hair care. We believe that true beauty shouldn't come at the cost of your health."
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {reasons.slice(0, 2).map((reason, i) => (
                <motion.div
                  key={i}
                  className="space-y-4 group p-6 rounded-3xl hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <reason.icon className="w-6 h-6 text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-lg font-display font-bold text-navy uppercase tracking-widest">{reason.title}</h3>
                  <p className="text-navy/60 font-elegant text-[13px] leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Modern Card Layout */}
          <div className="relative">
            <div className="grid gap-8">
              {reasons.slice(2).map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: -2,
                    rotateY: 2,
                    z: 50
                  }}
                  className="bg-white/20 backdrop-blur-xl border border-white/40 p-10 rounded-[48px] text-navy flex gap-8 items-center group hover:bg-white/40 transition-all duration-500 shadow-xl hover:shadow-gold/5"
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <reason.icon className="w-7 h-7 text-navy/80 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-medium mb-2 tracking-tight">{reason.title}</h3>
                    <p className="text-navy/60 font-elegant text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRiwayatSection;
