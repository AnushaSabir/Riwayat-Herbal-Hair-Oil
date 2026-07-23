import { motion } from "framer-motion";
import defaultBottleImage from "@/assets/riwayat-bottle.png";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string; // For base text sizing and colors
  glowColor?: string; // For the revealed text color
  text?: string; // The text to reveal, defaults to RIWAYAT
  bottleSrc?: string; // Custom bottle image
}

export default function AnimatedLogo({ 
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase", 
  glowColor = "text-gold drop-shadow-md",
  textColor = "text-foreground",
  text = "RIWAYAT",
  bottleSrc = defaultBottleImage
}: AnimatedLogoProps) {
  const duration = 2.5; 
  
  return (
    <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
      {/* Background Text (Faded) */}
      <div className={`opacity-20 relative z-0 whitespace-nowrap px-2 ${textColor}`}>
        {text}
      </div>
      
      {/* Highlight Text (Revealed by clip-path) */}
      <motion.div 
        className={`absolute top-0 left-0 whitespace-nowrap h-full flex items-center px-2 z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
      
      {/* Golden Shine tracking the bottle */}
      <motion.div 
        className="absolute top-1/2 z-15 pointer-events-none bg-gold blur-[10px] rounded-full mix-blend-screen"
        style={{ height: '2em', width: '1.5em' }}
        initial={{ left: "0%", x: "-50%", y: "-50%", opacity: 0 }}
        whileInView={{ left: "100%", x: "-50%", y: "-50%", opacity: [0, 0.6, 0.6, 0] }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.1, 0.9, 1], duration }
        }}
      />
      
      {/* Bottle gliding across */}
      <motion.img 
        src={bottleSrc} 
        alt=""
        className="absolute top-1/2 z-20 pointer-events-none drop-shadow-2xl mix-blend-normal"
        style={{ height: '2.5em', width: 'auto' }}
        initial={{ left: "0%", x: "-50%", y: "-50%", opacity: 0, rotate: -15 }}
        whileInView={{ left: "100%", x: "-50%", y: "-50%", opacity: [0, 1, 1, 0], rotate: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.1, 0.95, 1], duration }, 
          rotate: { duration, ease: "easeOut" } 
        }}
      />
    </div>
  );
}
