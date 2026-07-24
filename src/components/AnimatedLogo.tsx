import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  textColor = "text-foreground", // Unused because the base is fully invisible now, as requested.
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const duration = 2.5;

  return (
    <div
      ref={wrapRef}
      className={`relative inline-flex items-center justify-center overflow-visible ${className}`}
    >
      {/* Invisible placeholder to keep the layout size correct */}
      <div className="invisible px-2 whitespace-nowrap">{text}</div>

      {/* The Text that gets magically revealed from left to right */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center px-2 whitespace-nowrap z-10 ${glowColor}`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 -10% 0 0)" } : {}}
        transition={{ duration, ease: "linear" }}
      >
        {text}
      </motion.div>

      {/* The Magic Golden Shine & Sparkles that sweeps across */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center"
        style={{
          height: "2em", // Scales perfectly with text size (text-2xl vs text-8xl)
          width: "1.5em",
        }}
        initial={{ left: "-10%", opacity: 0 }}
        animate={inView ? { left: "110%", opacity: [0, 1, 1, 0] } : {}}
        transition={{
          left: { duration, ease: "linear" },
          opacity: { duration, times: [0, 0.1, 0.9, 1], ease: "linear" },
        }}
      >
        {/* The Golden Glow Cloud */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0.4) 40%, transparent 70%)",
            filter: "blur(4px)",
            mixBlendMode: "screen",
          }}
        />

        {/* The Little Stars sparkling inside the glow */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD700]"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              filter: "drop-shadow(0 0 2px rgba(255,215,0,1))",
            }}
            animate={
              inView
                ? {
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 90, 180],
                  }
                : {}
            }
            transition={{
              duration: 0.6 + Math.random() * 0.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 0.5,
            }}
          >
            <Sparkles size={8 + Math.random() * 8} fill="currentColor" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
