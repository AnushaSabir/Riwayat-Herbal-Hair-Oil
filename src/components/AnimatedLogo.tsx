import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string;
  glowColor?: string;
  text?: string;
}

export default function AnimatedLogo({ 
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase", 
  glowColor = "text-gold",
  textColor = "text-foreground",
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}>
      
      {/* The solid RIWAYAT text — always visible */}
      <motion.div
        className={`relative z-10 whitespace-nowrap px-2 ${glowColor}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {text}
      </motion.div>

      {/* Golden shine that sweeps across RIWAYAT */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 20%, rgba(255,223,100,0.15) 38%, rgba(255,235,150,0.9) 50%, rgba(255,223,100,0.15) 62%, transparent 80%)",
          filter: "blur(1px)",
        }}
        initial={{ x: "-120%" }}
        animate={isInView ? { x: "120%" } : { x: "-120%" }}
        transition={{
          duration: 1.0,
          delay: 0.35,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
