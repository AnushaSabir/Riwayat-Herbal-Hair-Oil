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
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      
      {/* Base text — fades in */}
      <motion.div
        className={`relative z-10 whitespace-nowrap px-2 ${glowColor}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {text}
      </motion.div>

      {/* Shine sweep — a bright angled highlight that sweeps L→R over the text */}
      <motion.div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{
          width: "60%",
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 35%, rgba(255,245,180,0.55) 48%, rgba(255,255,255,0.85) 52%, rgba(255,245,180,0.55) 56%, rgba(255,255,255,0.08) 65%, transparent 80%)",
          filter: "blur(1px)",
          mixBlendMode: "overlay",
        }}
        initial={{ left: "-65%", opacity: 0 }}
        whileInView={{ left: "105%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "0px" }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { times: [0, 0.08, 0.92, 1], duration: 1.4, delay: 0.4 },
        }}
      />

      {/* Second, softer trailing shine for depth */}
      <motion.div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{
          width: "35%",
          background:
            "linear-gradient(105deg, transparent 10%, rgba(212,175,55,0.15) 30%, rgba(255,230,100,0.4) 50%, rgba(212,175,55,0.15) 70%, transparent 90%)",
          filter: "blur(3px)",
          mixBlendMode: "screen",
        }}
        initial={{ left: "-40%", opacity: 0 }}
        whileInView={{ left: "110%", opacity: [0, 0.8, 0.8, 0] }}
        viewport={{ once: true, margin: "0px" }}
        transition={{
          duration: 1.6,
          delay: 0.55,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { times: [0, 0.08, 0.92, 1], duration: 1.6, delay: 0.55 },
        }}
      />
    </div>
  );
}
