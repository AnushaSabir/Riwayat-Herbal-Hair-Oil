import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

interface AnimatedLogoProps {
  textColor?: string; // Kept for API compatibility, but we use a premium gold gradient
  className?: string;
  glowColor?: string; // Unused in luxury mode
  text?: string;
}

export default function AnimatedLogo({
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase",
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

  // Slow, cinematic, smooth duration
  const duration = 3.5;

  return (
    <div
      ref={wrapRef}
      className={`relative inline-flex items-center justify-center overflow-visible ${className}`}
    >
      {/* Invisible placeholder to keep the layout size correct */}
      <div className="invisible px-2 whitespace-nowrap">{text}</div>

      {/* The Text - Refined gold metallic finish with a soft glow */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center px-2 whitespace-nowrap z-10`}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 -10% 0 0)" } : {}}
        transition={{ duration, ease: "easeInOut" }}
      >
        <span
          className="pb-1"
          style={{
            // Deep dark forest green color permanently
            color: "#123B2A",
            // No glowing drop-shadow on the text itself, keeping it clean
          }}
        >
          {text}
        </span>
      </motion.div>

      {/* The Elegant Golden Sweep (Luminous Ribbon) */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center"
        style={{
          height: "2.5em", // Taller than the text for a grand sweep
          width: "30px",
        }}
        initial={{ left: "-15%", opacity: 0 }}
        animate={inView ? { left: "115%", opacity: [0, 1, 1, 0] } : {}}
        transition={{
          left: { duration, ease: "easeInOut" },
          opacity: { duration, times: [0, 0.1, 0.8, 1], ease: "easeInOut" },
        }}
      >
        {/* The Thin Luminous Ribbon / Curved Light Streak */}
        <div
          className="absolute h-full w-[2px]"
          style={{
            // Warm golden gradient line
            background: "linear-gradient(to bottom, transparent 0%, #FFF5B8 40%, #FFFFFF 50%, #FFF5B8 60%, transparent 100%)",
            // Soft bloom / luxurious drop shadow
            boxShadow: "0 0 8px 1px rgba(255,215,0,0.8), 0 0 16px 4px rgba(212,175,55,0.4), -4px 0 20px 2px rgba(255,215,0,0.2)",
            // Curved / angled effect
            transform: "rotate(15deg) scaleY(1.1)",
            borderRadius: "50%",
          }}
        />

        {/* Tiny Subtle Glitter (Not an explosion, just a few elegant sparkles) */}
        {[...Array(4)].map((_, i) => {
          const isWhite = i % 2 === 0;
          const color = isWhite ? "#FFFFFF" : "#FFDF73";
          const glow = isWhite ? "rgba(255,255,255,0.8)" : "rgba(255,215,0,0.6)";

          return (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${-50 + Math.random() * 100}%`,
                color: color,
                filter: `drop-shadow(0 0 2px ${glow})`,
                zIndex: 30,
              }}
              animate={
                inView
                  ? {
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      rotate: [0, 45, 90],
                    }
                  : {}
              }
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 0.5,
              }}
            >
              <Sparkles size={6 + Math.random() * 6} fill="currentColor" strokeWidth={1} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
