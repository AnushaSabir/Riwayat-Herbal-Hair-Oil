import { useEffect, useRef } from "react";

interface AnimatedLogoProps {
  textColor?: string;
  className?: string;
  glowColor?: string;
  text?: string;
}

const starPositions = [
  { top: "-18px", left: "8%",   size: "11px", delay: "0.1s" },
  { top: "-22px", left: "22%",  size: "8px",  delay: "0.3s" },
  { top: "-14px", left: "38%",  size: "13px", delay: "0.5s" },
  { top: "-20px", left: "55%",  size: "9px",  delay: "0.2s" },
  { top: "-16px", left: "72%",  size: "11px", delay: "0.4s" },
  { top: "-18px", left: "88%",  size: "8px",  delay: "0.15s" },
  { top: "calc(100% + 6px)",  left: "12%",  size: "9px",  delay: "0.35s" },
  { top: "calc(100% + 4px)",  left: "32%",  size: "12px", delay: "0.55s" },
  { top: "calc(100% + 8px)",  left: "60%",  size: "8px",  delay: "0.25s" },
  { top: "calc(100% + 5px)",  left: "80%",  size: "10px", delay: "0.45s" },
];

export default function AnimatedLogo({
  className = "text-2xl font-display font-medium tracking-[0.4em] uppercase",
  glowColor = "text-gold",
  text = "RIWAYAT",
}: AnimatedLogoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("logo-in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`logo-wrapper relative inline-flex items-center justify-center ${className}`}
      style={{ overflow: "visible" }}
    >
      {/* RIWAYAT text */}
      <span className={`logo-text relative z-10 whitespace-nowrap px-2 ${glowColor}`}>
        {text}
      </span>

      {/* Stars positioned outside the text */}
      {starPositions.map((s, i) => (
        <span
          key={i}
          className="logo-star"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            animationDelay: s.delay,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
