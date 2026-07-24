import { motion } from "framer-motion";

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
  const duration = 2.5; 
  
  return (
    <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
      {/* Background Text - Faintly visible before reveal */}
      <div className={`relative z-0 whitespace-nowrap px-2 opacity-10 ${textColor}`}>
        {text}
      </div>
      
      {/* Revealed Text - Uncovered left to right */}
      <motion.div 
        className={`absolute top-0 left-0 whitespace-nowrap h-full flex items-center px-2 z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 -10% 0 0)" }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
      
      {/* Thick Diagonal Golden Shine Sweep */}
      <motion.div 
        className="absolute z-20 pointer-events-none"
        style={{ 
          top: '-50%',
          bottom: '-50%',
          width: '140px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.2) 20%, rgba(255, 230, 150, 0.9) 50%, rgba(212, 175, 55, 0.2) 80%, transparent 100%)',
          filter: 'blur(4px)',
          mixBlendMode: 'plus-lighter'
        }}
        initial={{ left: "-40%", skewX: -25, opacity: 0 }}
        whileInView={{ left: "120%", skewX: -25, opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.1, 0.9, 1], duration }
        }}
      />
    </div>
  );
}
