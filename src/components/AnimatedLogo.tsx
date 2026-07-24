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
      {/* Invisible spacer to hold layout */}
      <div className="invisible whitespace-nowrap px-2">{text}</div>

      {/* Shimmer text layer — the shine is INSIDE the text itself */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-2 whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <span
          className="shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(110deg, #8B6914 10%, #C9A84C 25%, #FFE066 38%, #FFFFFF 45%, #FFE066 52%, #C9A84C 65%, #8B6914 80%, #C9A84C 90%)",
            backgroundSize: "250% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "logoShimmer 2.2s ease-in-out 0.2s 1 forwards",
          }}
        >
          {text}
        </span>
      </motion.div>

      {/* After shimmer ends — solid color text stays */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center px-2 whitespace-nowrap ${glowColor}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        {text}
      </motion.div>
    </div>
  );
}
