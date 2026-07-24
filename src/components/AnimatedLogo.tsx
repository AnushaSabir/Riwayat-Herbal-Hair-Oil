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
      {/* Background Text - Invisible before reveal */}
      <div className={`relative z-0 whitespace-nowrap px-2 opacity-0`}>
        {text}
      </div>
      
      {/* Revealed Text - Uncovered left to right */}
      <motion.div 
        className={`absolute top-0 left-0 whitespace-nowrap h-full flex items-center px-2 z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 -10% 0 0)" }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
      
      {/* Golden Shine Line that moves with the reveal */}
      <motion.div 
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ 
          height: '140%', 
          width: '6px',
          background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,1), transparent)',
          boxShadow: '0 0 15px 5px rgba(212,175,55,0.6)',
          borderRadius: '3px'
        }}
        initial={{ left: "0%", y: "-50%", opacity: 0 }}
        whileInView={{ left: "100%", y: "-50%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.1, 0.9, 1], duration }
        }}
      />
    </div>
  );
}
