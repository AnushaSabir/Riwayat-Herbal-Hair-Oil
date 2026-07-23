import { motion } from "framer-motion";
import leafPattern from "@/assets/leaf-pattern.png";
import AnimatedLogo from "./AnimatedLogo";

const Footer = () => {
  return (
    <footer className="relative py-24 overflow-hidden bg-transparent border-t border-black/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand name */}
          <div className="mb-12">
            <div className="flex justify-center w-full mb-4">
              <AnimatedLogo 
                className="text-5xl md:text-7xl font-display font-medium tracking-[0.3em] uppercase opacity-20" 
                textColor="text-herbal" 
                glowColor="text-herbal drop-shadow-md" 
              />
            </div>
            <div className="flex flex-col items-center -mt-8 md:-mt-12 relative z-10">
              <span className="text-2xl md:text-3xl font-display font-medium text-herbal tracking-tight uppercase">
                Riwayat <span className="italic text-gold">Herbal</span>
              </span>
              <p className="text-foreground/40 font-elegant italic tracking-widest text-sm mt-1 uppercase">
                Premium Hair Care Legacy
              </p>
            </div>
          </div>

          {/* Tagline with golden divider */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-gold/30" />
            <p className="text-gold font-elegant tracking-[0.4em] uppercase text-xs">
              Root se Growth tak
            </p>
            <div className="w-12 h-[1px] bg-gold/30" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 w-full max-w-4xl py-12 border-y border-black/5 mb-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-elegant tracking-[0.3em] uppercase text-herbal/40 font-bold">The Company</h4>
              <p className="text-sm font-display text-foreground/80">Chemora Lab Pvt Ltd</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-elegant tracking-[0.3em] uppercase text-herbal/40 font-bold">Contact Us</h4>
              <p className="text-sm font-display text-foreground/80">hello@riwayat.com</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-elegant tracking-[0.3em] uppercase text-herbal/40 font-bold">Follow Us</h4>
              <p className="text-sm font-display text-foreground/80">@riwayatmagic</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6 text-xl opacity-20">
              <span className="hover:opacity-100 transition-opacity cursor-default">🌿</span>
              <span className="hover:opacity-100 transition-opacity cursor-default">🍃</span>
              <span className="hover:opacity-100 transition-opacity cursor-default">🌿</span>
            </div>
            <p className="text-foreground/30 text-[10px] font-elegant tracking-[0.1em] uppercase">
              © {new Date().getFullYear()} Riwayat Legacy • Crafted with Herbal Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
