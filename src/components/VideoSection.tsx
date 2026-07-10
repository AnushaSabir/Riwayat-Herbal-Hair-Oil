import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden flex items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/5 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-elegant mb-4">
            Discover the Magic
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
            The Making of <span className="text-gradient-gold">Riwayat</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glass frame around video */}
          <div className="glass-card p-2 md:p-3 rounded-3xl md:rounded-[2rem] relative group shadow-gold max-w-sm mx-auto">
            <div className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-navy-light aspect-[9/16] shadow-inner group/video">
              
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Mute/Unmute Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:bg-black/70 hover:scale-105 border border-white/20 z-20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white drop-shadow-md" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white drop-shadow-md" />
                )}
              </button>

            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-herbal/20 blur-[50px] rounded-full pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
