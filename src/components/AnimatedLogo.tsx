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
  const duration = 1.8;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Spacer to preserve layout size */}
      <div className={`relative z-0 whitespace-nowrap px-2 opacity-0 select-none`}>
        {text}
      </div>

      {/* Letter-by-letter reveal */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-2 z-10">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className={`${glowColor} whitespace-pre`}
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Shining light sweep across the text */}
      <motion.div
        className="absolute top-0 left-0 h-full z-20 pointer-events-none"
        style={{
          width: "3em",
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,215,100,0.85) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "150%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{
          duration: duration * 0.9,
          delay: text.length * 0.09 * 0.4,
          ease: "easeInOut",
          opacity: { times: [0, 0.1, 0.85, 1] },
        }}
      />
    </div>
  );
}
