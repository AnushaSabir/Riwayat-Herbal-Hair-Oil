import { motion } from "framer-motion";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string;
  glowColor?: string;
  text?: string;
}

// Fixed sparkle positions relative to the moving wand (no random)
const sparkleOffsets = [
  { dx: -8,  dy: -14, size: 6,  delay: 0 },
  { dx:  12, dy: -18, size: 5,  delay: 0.05 },
  { dx: -14, dy:   8, size: 4,  delay: 0.1 },
  { dx:  16, dy:  10, size: 7,  delay: 0.07 },
  { dx:  0,  dy: -22, size: 5,  delay: 0.03 },
  { dx: -6,  dy:  18, size: 4,  delay: 0.12 },
];

export default function AnimatedLogo({
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase",
  glowColor = "text-gold",
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  const letters = text.split("");
  const totalDuration = 2.4; // total reveal time
  const letterDelay = totalDuration / letters.length;

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-visible ${className}`}
    >
      {/* Each letter revealed one by one */}
      <div className="relative z-10 flex items-center px-2 whitespace-nowrap">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className={`inline-block ${glowColor}`}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
            whileInView={{
              opacity: 1,
              filter: [
                "blur(6px) drop-shadow(0 0 12px #FFD700)",
                "blur(0px) drop-shadow(0 0 6px #FFD700)",
                "blur(0px) drop-shadow(0 0 0px transparent)",
              ],
              y: 0,
            }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              delay: i * letterDelay,
              duration: 0.5,
              ease: "easeOut",
              filter: { duration: 0.8, delay: i * letterDelay },
            }}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        ))}
      </div>

      {/* Golden glowing wand dot — moves straight left to right */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{
          top: "50%",
          translateY: "-50%",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #fff7aa 0%, #FFD700 50%, transparent 80%)",
          boxShadow: "0 0 18px 6px rgba(255, 215, 0, 0.9)",
        }}
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "0px" }}
        transition={{
          duration: totalDuration + 0.4,
          ease: "easeInOut",
          opacity: { times: [0, 0.05, 0.92, 1], duration: totalDuration + 0.4 },
        }}
      />

      {/* Small sparkles that travel WITH the wand dot */}
      {sparkleOffsets.map((sp, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          style={{
            top: "50%",
            width: sp.size,
            height: sp.size,
            borderRadius: "50%",
            background: "#FFD700",
            boxShadow: `0 0 ${sp.size * 2}px ${sp.size}px rgba(255, 215, 0, 0.8)`,
          }}
          initial={{ left: "0%", translateX: sp.dx, translateY: `calc(-50% + ${sp.dy}px)`, opacity: 0, scale: 0 }}
          whileInView={{
            left: "100%",
            opacity: [0, 0, 1, 0],
            scale: [0, 0, 1.5, 0],
          }}
          viewport={{ once: true, margin: "0px" }}
          transition={{
            left: { duration: totalDuration + 0.4, ease: "easeInOut" },
            opacity: {
              duration: totalDuration + 0.4,
              times: [0, 0.03 + sp.delay, 0.06 + sp.delay + 0.1, 0.16 + sp.delay],
              ease: "easeInOut",
            },
            scale: {
              duration: totalDuration + 0.4,
              times: [0, 0.03 + sp.delay, 0.06 + sp.delay + 0.1, 0.16 + sp.delay],
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
