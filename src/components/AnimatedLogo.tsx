import { motion } from "framer-motion";
import bottleImage from "@/assets/riwayat-bottle.png";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string; // For base text sizing and colors
  glowColor?: string; // For the revealed text color
  text?: string; // The text to reveal, defaults to RIWAYAT
  bottleImageSrc?: string; // Optional custom bottle image
}

export default function AnimatedLogo({ 
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase", 
  glowColor = "text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]",
  textColor = "text-foreground",
  text = "RIWAYAT",
  bottleImageSrc = bottleImage
}: AnimatedLogoProps) {
  const duration = 2.5; 
  
  return (
    <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
      {/* Background Text (Faded) */}
      <div className={`opacity-20 relative z-0 whitespace-nowrap px-2 ${textColor}`}>
        {text}
      </div>
      
      {/* Highlight Text (Revealed by clip-path) with Golden Shine */}
      <motion.div 
        className={`absolute top-0 left-0 whitespace-nowrap h-full flex items-center px-2 z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 -10% 0 0)" }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
      
      {/* Bottle gliding across and fading out at the end */}
      <motion.img 
        src={bottleImageSrc} 
        alt=""
        className="absolute top-1/2 z-20 pointer-events-none drop-shadow-2xl mix-blend-normal"
        style={{ height: '2.5em', width: 'auto' }}
        initial={{ left: "0%", x: "-50%", y: "-50%", opacity: 0, rotate: -15 }}
        whileInView={{ left: "100%", x: "-50%", y: "-50%", opacity: [0, 1, 1, 0], rotate: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { duration, times: [0, 0.1, 0.9, 1] }, 
          rotate: { duration, ease: "easeOut" } 
        }}
      />
    </div>
  );
}
