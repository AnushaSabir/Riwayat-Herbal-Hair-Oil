import { motion } from "framer-motion";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string;
  glowColor?: string;
  text?: string;
}

// Star positions around the text — alag alag jagah
const stars = [
  { top: "-30%", left: "5%",   size: 14, delay: 0.1,  duration: 0.7 },
  { top: "-40%", left: "20%",  size: 10, delay: 0.3,  duration: 0.6 },
  { top: "110%", left: "15%",  size: 12, delay: 0.5,  duration: 0.65 },
  { top: "-35%", left: "40%",  size: 8,  delay: 0.2,  duration: 0.55 },
  { top: "115%", left: "50%",  size: 10, delay: 0.45, duration: 0.7 },
  { top: "-30%", left: "65%",  size: 14, delay: 0.15, duration: 0.6 },
  { top: "100%", left: "75%",  size: 8,  delay: 0.35, duration: 0.65 },
  { top: "-40%", left: "88%",  size: 12, delay: 0.55, duration: 0.7 },
  { top: "50%",  left: "-5%",  size: 10, delay: 0.25, duration: 0.6 },
  { top: "40%",  left: "102%", size: 12, delay: 0.4,  duration: 0.65 },
];

// 4-pointed star SVG
function StarShape({ size }: { size: number }) {
  const s = size;
  const half = s / 2;
  const tip = s * 0.42;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <path
        d={`M${half},0 L${half + tip * 0.18},${half - tip * 0.18} L${half},${s} L${half - tip * 0.18},${half + tip * 0.18} Z
            M0,${half} L${half - tip * 0.18},${half - tip * 0.18} L${s},${half} L${half + tip * 0.18},${half + tip * 0.18} Z`}
        fill="#FFD700"
        style={{ filter: `drop-shadow(0 0 ${size * 0.4}px #FFD700) drop-shadow(0 0 ${size * 0.7}px rgba(255,215,0,0.6))` }}
      />
    </svg>
  );
}

export default function AnimatedLogo({
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase",
  glowColor = "text-gold",
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* The text itself — fades in first */}
      <motion.div
        className={`relative z-10 whitespace-nowrap px-2 ${glowColor}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {text}
      </motion.div>

      {/* Separate shining stars — appear AROUND the text */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-20"
          style={{ top: star.top, left: star.left }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0],
            scale:   [0, 1.3, 1, 0],
            rotate:  [0, 20, -20, 0],
          }}
          viewport={{ once: true, margin: "0px" }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
            opacity: { times: [0, 0.2, 0.7, 1] },
            scale:   { times: [0, 0.2, 0.7, 1] },
          }}
        >
          <StarShape size={star.size} />
        </motion.div>
      ))}
    </div>
  );
}
