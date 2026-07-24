import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
  const duration = 3.5; // Slightly longer for a magical movie feel
  
  return (
    <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
      {/* Background Text - Invisible before reveal */}
      <div className={`relative z-0 whitespace-nowrap px-2 opacity-0`}>
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
      
      {/* Magical Golden Glowing Cloud */}
      <motion.div 
        className="absolute z-20 pointer-events-none mix-blend-plus-lighter rounded-full"
        style={{ 
          top: '50%',
          marginTop: '-60px',
          height: '120px',
          width: '120px',
          background: 'radial-gradient(circle, rgba(255,230,150,0.9) 0%, rgba(212,175,55,0.6) 30%, transparent 70%)',
          filter: 'blur(8px)',
        }}
        initial={{ left: "-20%", opacity: 0, scale: 0.5 }}
        whileInView={{ left: "100%", opacity: [0, 1, 1, 0], scale: [0.8, 1.2, 1.2, 0.8] }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.1, 0.9, 1], duration }
        }}
      />

      {/* Floating Golden Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-30 pointer-events-none"
          style={{ 
            color: '#FFD700', // Bright solid gold
            filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 1))',
            mixBlendMode: 'screen' 
          }}
          initial={{ 
            left: `${15 + i * 15}%`, 
            top: `${10 + Math.random() * 80}%`, 
            opacity: 0, 
            scale: 0, 
            rotate: 0 
          }}
          whileInView={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.2, 0], 
            rotate: [0, 90, 180] 
          }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ 
            duration: 1.2, 
            delay: (i + 1) * (duration / 7) - 0.2, 
            ease: "easeInOut" 
          }}
        >
          <Sparkles size={8 + Math.random() * 6} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
