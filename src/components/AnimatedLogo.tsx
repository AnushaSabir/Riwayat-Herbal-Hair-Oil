import { motion } from "framer-motion";
import jerryImage from "@/assets/jerry-running.png";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string;
  glowColor?: string;
  text?: string;
}

export default function AnimatedLogo({ 
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase", 
  glowColor = "text-gold drop-shadow-md",
  textColor = "text-foreground",
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  const duration = 2.2; 
  
  return (
    <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
      {/* Background Text - fully hidden, waiting to be revealed */}
      <div className={`relative z-0 whitespace-nowrap px-2 ${textColor} opacity-0`}>
        {text}
      </div>
      
      {/* Revealed Text - Jerry uncovers it left to right */}
      <motion.div 
        className={`absolute top-0 left-0 whitespace-nowrap h-full flex items-center px-2 z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration, ease: "easeInOut" }}
      >
        {text}
      </motion.div>

      {/* Golden sparkle glow that Jerry leaves behind */}
      <motion.div 
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ 
          height: '1.8em', 
          width: '2em',
          background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.2) 60%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(6px)',
        }}
        initial={{ left: "0%", x: "-50%", y: "-50%", opacity: 0 }}
        whileInView={{ left: "100%", x: "-50%", y: "-50%", opacity: [0, 0.8, 0.8, 0] }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "easeInOut", 
          opacity: { times: [0, 0.05, 0.9, 1], duration }
        }}
      />
      
      {/* Jerry running across */}
      <motion.img 
        src={jerryImage} 
        alt=""
        className="absolute top-1/2 z-30 pointer-events-none drop-shadow-xl"
        style={{ 
          height: '3em', 
          width: 'auto',
          // Bounce animation using scaleY to simulate running legs
        }}
        initial={{ left: "-5%", x: "-50%", y: "-60%", opacity: 0 }}
        whileInView={{ left: "108%", x: "-50%", y: "-60%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ 
          duration, 
          ease: "linear",
          opacity: { times: [0, 0.05, 0.95, 1], duration },
        }}
      />
    </div>
  );
}
