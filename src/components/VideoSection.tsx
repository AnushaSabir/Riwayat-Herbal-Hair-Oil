import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

interface VideoSectionProps {
  videos?: { src: string; label: string }[];
  title?: string;
  subtitle?: string;
  accentColor?: "gold" | "herbal";
}

const defaultVideos = [
  { src: "/videos/hair-1.mp4", label: "Our Story" },
  { src: "/videos/hair-2.mp4", label: "How It Works" },
  { src: "/videos/hair-3.mp4", label: "Results" },
];

const VideoSection = ({
  videos = defaultVideos,
  title = "The Making of Riwayat",
  subtitle = "Discover the Magic",
  accentColor = "gold",
}: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);

  const accent = accentColor === "gold" ? "text-gold" : "text-herbal";
  const accentBg = accentColor === "gold" ? "bg-gold" : "bg-herbal";
  const accentBorder = accentColor === "gold" ? "border-gold/30" : "border-herbal/30";
  const glowColor = accentColor === "gold" ? "bg-gold/20" : "bg-herbal/20";
  const shadowColor = accentColor === "gold" ? "shadow-gold" : "border border-herbal/20";

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center">
      {/* Background ambient light */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] ${glowColor} blur-[150px] rounded-full pointer-events-none z-0 opacity-30`} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-10 text-center"
        >
          <span className={`${accent} uppercase tracking-[0.4em] text-xs font-elegant mb-4`}>
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-herbal mb-6">
            {title.split(" ").map((word, i) =>
              i === title.split(" ").length - 1
                ? <span key={i} className={`${accent}`}> {word}</span>
                : <span key={i}> {word}</span>
            )}
          </h2>
          <div className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent ${accent}`} />
        </motion.div>

        {/* Video Tabs */}
        {videos.length > 1 && (
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {videos.map((v, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveVideo(i)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-xs font-display uppercase tracking-widest transition-all duration-300 ${
                  activeVideo === i
                    ? `${accentBg} text-white shadow-lg`
                    : `border ${accentBorder} ${accent} opacity-60 hover:opacity-100`
                }`}
              >
                {v.label}
              </motion.button>
            ))}
          </div>
        )}

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glass frame */}
          <div className={`glass-card p-2 md:p-3 rounded-3xl md:rounded-[2rem] relative group ${shadowColor} max-w-sm mx-auto`}>
            <div className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-navy-light aspect-[9/16] shadow-inner">

              <motion.video
                key={videos[activeVideo].src}
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videos[activeVideo].src}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Mute/Unmute Toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:bg-black/70 hover:scale-105 border border-black/20 z-20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white drop-shadow-md" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white drop-shadow-md" />
                )}
              </button>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative glows */}
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${glowColor} blur-[50px] rounded-full pointer-events-none`} />
            <div className={`absolute -top-6 -left-6 w-32 h-32 ${glowColor} blur-[50px] rounded-full pointer-events-none`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
