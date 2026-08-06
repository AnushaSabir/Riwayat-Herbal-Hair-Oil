import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Volume2,
  VolumeX,
  Leaf,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Heart,
  Activity,
  Wind,
  Flame,
  Droplets,
  TreePine,
  Flower2,
  CircleDot,
  Sun,
  Sparkles,
  CheckCircle2,
  Layers,
  Feather
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";

import beardBottle from "@/assets/beard/beard-bottle.jpg";
import BeardShowcaseSection from "@/components/BeardShowcaseSection";

// ─── Ingredients ─────────────────────────────────────────────────────────────
const ingredients = [
  { name: "Castor Oil", benefit: "Provides Ricinoleic acid to deeply nourish hair follicles, thicken beard hair and support fuller-looking facial hair growth", icon: <Flame className="w-10 h-10 text-amber-400" /> },
  { name: "Jojoba Oil", benefit: "Mimics the skin's natural sebum — moisturizes skin beneath the beard, prevents beard dandruff and keeps skin hydrated", icon: <Droplets className="w-10 h-10 text-amber-400" /> },
  { name: "Argan Oil", benefit: "Liquid gold for beard care — conditions and softens coarse facial hair while adding a healthy, natural shine", icon: <Star className="w-10 h-10 text-amber-400" /> },
  { name: "Black Seed Oil (Kalonji)", benefit: "Rich in Thymoquinone — stimulates dormant hair follicles and supports a darker, healthier-looking beard appearance", icon: <Shield className="w-10 h-10 text-amber-400" /> },
  { name: "Vitamin E", benefit: "Powerful antioxidant that repairs damaged follicles, protects beard from environmental stress and promotes healthier growth", icon: <Sun className="w-10 h-10 text-amber-400" /> },
  { name: "Rosemary Essential Oil", benefit: "Clinically studied to boost circulation in scalp and facial skin — accelerates beard growth and reduces patchy areas", icon: <Leaf className="w-10 h-10 text-amber-400" /> },
  { name: "Peppermint Essential Oil", benefit: "Creates a refreshing cooling sensation while stimulating micro-circulation for improved follicle activation", icon: <Wind className="w-10 h-10 text-amber-400" /> },
];

// ─── Benefits ────────────────────────────────────────────────────────────────
const benefits = [
  { icon: <Zap className="w-6 h-6" />, title: "Supports Fuller Beard & Mustache", desc: "Nourishes hair follicles from the root to support thicker, healthier-looking facial hair." },
  { icon: <Heart className="w-6 h-6" />, title: "Nourishes Hair Follicles", desc: "Deep-penetrating blend of premium oils delivers essential nutrients directly to beard roots." },
  { icon: <Droplets className="w-6 h-6" />, title: "Reduces Dryness & Beard Dandruff", desc: "Deeply moisturizes the skin beneath your beard to eliminate dryness, flaking and itchiness." },
  { icon: <Feather className="w-6 h-6" />, title: "Softens Coarse Facial Hair", desc: "Rich conditioning oils tame and soften even the roughest, most wiry beard hair." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Promotes Healthy, Darker Appearance", desc: "Enhances the natural shine and promotes a visibly healthier, darker-looking beard." },
  { icon: <Leaf className="w-6 h-6" />, title: "Lightweight & Non-Greasy", desc: "Fast-absorbing formula leaves no residue — nourishes deeply without any heavy, greasy feeling." },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { name: "Hamza Malik", age: "26", text: "Mera beard patchy tha. 3 weeks use karne k baad naye baal aana shuru ho gaye hain! Highly recommended.", rating: 5 },
  { name: "Usman Raza", age: "31", text: "Beard ki dryness aur itching bilkul khatam ho gayi. Texture bhi bohat soft ho gaya hai.", rating: 5 },
  { name: "Bilal Sheikh", age: "28", text: "Mustache ki growth slow thi, is oil ne speed up kar diya. Smells amazing too!", rating: 5 },
  { name: "Zain Ali", age: "34", text: "Best beard oil in Pakistan! 100% natural feeling and visible density in 1 month.", rating: 5 },
];

// ─── Videos ──────────────────────────────────────────────────────────────────
const videos = [
  { src: "/videos/beard-1.mp4", label: "Beard Growth Magic" },
  { src: "/videos/beard-2.mp4", label: "How to Apply" },
  { src: "/videos/beard-3.mp4", label: "Patchy Beard Care" },
];

const BeardOilPage = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAddToCart = () => {
    addItem({
      id: "riwayat-beard-oil-100ml",
      name: "Riwayat Beard & Mustache Growth Oil (100ml)",
      price: 1799,
      quantity: 1,
      image: beardBottle,
    });
    toast.success("Added Beard & Mustache Oil to basket!");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => console.log("Auto-play prevented", e));
    }
  }, [activeVideo]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden text-foreground">
      {/* ── Ambient Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full" />
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e24]/90 text-foreground backdrop-blur-md border-b border-amber-500/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors text-sm font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:block font-display uppercase tracking-widest text-xs font-bold">All Products</span>
            </button>
            <div className="w-px h-6 bg-amber-500/30" />
            <div className="flex flex-col cursor-pointer" onClick={() => navigate("/")}>
              <AnimatedLogo className="text-xl font-display font-bold tracking-[0.3em] uppercase" textColor="text-amber-400" glowColor="text-amber-400 drop-shadow-sm" />
              <span className="text-[9px] text-amber-400 font-bold tracking-[0.4em] uppercase font-serif">Beard Care</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Benefits", "Ingredients", "Results", "Videos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.3em] font-display text-white hover:text-amber-400 transition-colors font-bold drop-shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-5 py-2.5 rounded-full text-xs font-display uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:block">Order Now</span>
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 text-[#78350f] text-xs font-extrabold tracking-[0.25em] uppercase font-serif mb-4 border-2 border-[#b45309]/50 px-4 py-2 rounded-full bg-white/80 shadow-md">
                <Leaf className="w-4 h-4 text-[#b45309]" /> Premium Natural Beard & Mustache Oil
              </span>
            </motion.div>

            <div className="mb-2 flex lg:justify-start">
              <AnimatedLogo className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight" textColor="text-[#0F2E15]" glowColor="text-[#0F2E15] drop-shadow-md" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black text-[#0F2E15] mb-3 tracking-wide">
              Beard & Mustache <span className="text-[#b45309] italic font-black">Growth Oil</span>
            </h1>
            <p className="text-[#78350f] font-extrabold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 font-display drop-shadow-sm">
              Fuller Beard • Nourished Follicles • Lightweight Formula
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Supports Fuller Beard", "Reduces Dryness & Dandruff", "Softens Coarse Hair", "Non-Greasy Formula"].map((tag) => (
                <span key={tag} className="text-xs text-[#78350f] border-2 border-[#b45309]/40 px-3.5 py-1.5 rounded-full bg-white/90 font-extrabold shadow-sm">
                  ✓ {tag}
                </span>
              ))}
            </div>

            <p className="text-[#0F2E15] text-base leading-relaxed mb-8 max-w-md font-bold">
              A premium beard and mustache oil formulated with nourishing natural oils to help support thicker, healthier-looking facial hair. It deeply moisturizes the skin, reduces dryness and itchiness, and enhances the natural shine and appearance of your beard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="px-8 py-4 bg-[#b45309] hover:bg-[#92400e] text-white font-black text-base rounded-full uppercase tracking-widest shadow-xl transition-all"
              >
                Order Now — Rs. 1,799
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-[#133937] hover:bg-black text-amber-300 font-black text-base rounded-full transition-all uppercase tracking-widest shadow-xl"
              >
                Learn More
              </motion.button>
            </div>

            {/* Rating / Satisfaction */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-card border-2 border-[#0F2E15]/40 overflow-hidden -ml-2 first:ml-0">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=beardman${i}&backgroundColor=transparent`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#d97706] text-lg font-black drop-shadow-sm">★★★★★</div>
                <p className="text-[#0F2E15] font-extrabold text-sm">4,500+ beard men trust Riwayat</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Product Image / Video Showcase */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="relative z-30 w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[550px] mx-auto group"
            >
              {/* Product Card Container */}
              <div className="relative rounded-[40px] overflow-hidden border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-gradient-to-b from-black/60 via-black/40 to-black/80 backdrop-blur-xl p-4">
                <video
                  src="/videos/beard-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    // Fallback to bottle image if video fails to load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-[32px] drop-shadow-2xl"
                />
                <img
                  src={beardBottle}
                  alt="Riwayat Beard & Mustache Growth Oil"
                  className="w-full h-[400px] sm:h-[480px] object-contain rounded-[32px] drop-shadow-2xl"
                  style={{ display: 'none' }}
                  onLoad={(e) => {
                    // Show image if video fails
                    const videoEl = (e.target as HTMLElement).previousElementSibling as HTMLVideoElement;
                    if (videoEl && videoEl.style.display === 'none') {
                      (e.target as HTMLElement).style.display = 'block';
                    }
                  }}
                />

                {/* Satisfaction Stamp */}
                <img
                  src="/satisfaction-guarantee.png"
                  alt="100% Satisfaction Guarantee"
                  className="absolute bottom-6 right-6 w-24 md:w-28 z-40 drop-shadow-2xl pointer-events-none"
                  style={{ animation: "stampFloat 4s ease-in-out infinite" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BENEFITS SECTION
      ═══════════════════════════════════ */}
      <section id="benefits" className="relative py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Why Men Choose Riwayat</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15]">
              6 Key <span className="text-[#b45309] font-black">Beard Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl bg-[#1a1714] border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-amber-400 font-display font-bold text-base mb-2">{b.title}</h3>
                <p className="text-zinc-200 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          URDU INFO GALLERY
      ═══════════════════════════════════ */}
      <section className="relative py-20 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">
              مزید معلومات • More Info
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15] mb-3">
              تفصیلی <span className="text-[#b45309] italic font-black">رہنمائی</span>
            </h2>
            <p className="text-[#0F2E15] font-bold text-sm max-w-md mx-auto">
              Detailed information in Urdu for beard care & proper usage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "داڑھی کا تیل کیسے استعمال کریں",
                desc: "صاف داڑھی اور مونچھ پر 3 سے 5 قطرے لگائیں اور ہلکے ہاتھوں سے مساج کریں۔ بہترین نتائج کے لیے روزانہ استعمال کریں۔",
                badge: "طریقہ استعمال"
              },
              {
                title: "خشکی اور خارش سے نجات",
                desc: "یہ تیل داڑھی کی جڑوں میں گہرائی سے جا کر خشکی، خارش اور بے آرامی کو دور کرتا ہے اور جلد کو نمی بخشتا ہے۔",
                badge: "100% قدرتی"
              },
              {
                title: "گھنی اور چمکدار داڑھی",
                desc: "کیسٹر آئل، ارگن آئل اور جوجوبا آئل کا قدرتی مرکب داڑھی کو نرم، گھنا اور چمکدار بناتا ہے بغیر چکناہٹ کے۔",
                badge: "قدرتی چمک"
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="rounded-3xl p-6 border border-amber-500/30 bg-[#161412] shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-amber-400 border border-amber-500/40 px-3 py-1 rounded-full mb-4 bg-amber-500/10">
                    {info.badge}
                  </span>
                  <h3 className="text-xl font-bold text-amber-300 mb-3 text-right font-serif leading-snug">{info.title}</h3>
                  <p className="text-zinc-200 text-sm text-right leading-relaxed font-sans">{info.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-amber-500/10 flex justify-between items-center text-xs text-amber-400/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>روایت ہربل کیر</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SHOWCASE GALLERY
      ═══════════════════════════════════ */}
      <BeardShowcaseSection />

      {/* ═══════════════════════════════════
          INGREDIENTS LIST
      ═══════════════════════════════════ */}
      <section id="ingredients" className="relative py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Nature's Power</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15]">
              7 Pure <span className="text-[#b45309] italic font-black">Natural Ingredients</span>
            </h2>
            <p className="text-[#0F2E15] font-bold text-sm mt-3 max-w-lg mx-auto">Castor Oil · Jojoba Oil · Argan Oil · Black Seed Oil · Vitamin E · Rosemary · Peppermint</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group p-5 rounded-2xl bg-[#1a1714] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 text-center shadow-md"
              >
                <div className="text-4xl mb-3 flex justify-center text-amber-400">{ing.icon}</div>
                <h3 className="font-display font-bold text-sm mb-1.5 text-amber-300">{ing.name}</h3>
                <p className="text-zinc-300 text-xs leading-relaxed">{ing.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          HOW TO USE
      ═══════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Simple & Effective</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15]">
              How to <span className="text-[#b45309] italic font-black">Use</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Clean Your Beard", desc: "Start with a freshly washed, clean beard and mustache. Pat dry gently with a towel." },
              { step: "02", title: "Apply 3–5 Drops", desc: "Place 3–5 drops of oil onto your fingertips or directly onto the beard and mustache area." },
              { step: "03", title: "Massage Gently", desc: "Massage gently into the beard hair and skin underneath using circular motions for best absorption. Use daily for consistent results." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-6 rounded-2xl bg-[#1a1714] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-lg text-center group"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-black font-display group-hover:scale-110 transition-transform shadow-lg">
                  {s.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-amber-400 font-display font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-zinc-200 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-5 rounded-2xl border-2 border-[#b45309]/30 bg-white/90 text-center shadow-md"
          >
            <p className="text-[#78350f] text-sm font-bold">
              💡 <strong>Pro Tip:</strong> For best results, apply before bedtime and leave overnight. The oils absorb deeply while you sleep, maximizing nourishment for your beard follicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          VIDEO SECTION
      ═══════════════════════════════════ */}
      <section id="videos" className="relative py-24 bg-card/30">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Video Guides</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15] mb-4">
              Watch <span className="text-[#b45309] font-black">Beard Results & Care</span>
            </h2>
          </motion.div>

          {/* Video Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {videos.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                className={`px-5 py-2.5 rounded-full text-xs font-display uppercase tracking-widest transition-all ${
                  activeVideo === i
                    ? "bg-[#b45309] text-white font-black shadow-lg"
                    : "border-2 border-[#78350f]/40 text-[#78350f] font-bold bg-white/80 hover:bg-[#b45309] hover:text-white"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Video Player Box */}
          <div className="max-w-sm mx-auto">
            <div className="p-3 rounded-3xl relative group shadow-2xl border border-amber-500/30 bg-black/60 backdrop-blur-md">
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black">
                <video
                  ref={videoRef}
                  key={videos[activeVideo].src}
                  className="w-full h-full object-cover"
                  src={videos[activeVideo].src}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onError={(e) => {
                    // Graceful fallback if video file does not exist yet
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-amber-900/40 to-black">
                  <Star className="w-12 h-12 text-amber-400 mb-3 animate-pulse" />
                  <p className="text-white font-bold text-lg mb-1">{videos[activeVideo].label}</p>
                  <p className="text-amber-300 text-xs">Video content ready for customer upload</p>
                </div>

                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center border border-amber-500/30 hover:bg-black transition-all z-20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-amber-400" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}
      <section id="results" className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Customer Reviews</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0F2E15]">
              Real Men, <span className="text-[#b45309] font-black">Real Beard Density</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-[#161412] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex text-amber-400 text-sm mb-3">{"★".repeat(t.rating)}</div>
                  <p className="text-zinc-100 text-sm leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-amber-500/10">
                  <p className="text-white font-display font-bold text-sm">{t.name}</p>
                  <p className="text-amber-400 text-xs">Age {t.age}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CALL TO ACTION
      ═══════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#b45309] font-extrabold text-xs uppercase tracking-[0.4em] font-serif mb-4 block">Special Promotional Offer</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-[#0F2E15] mb-4">
              Get Your Dream <span className="text-[#b45309] font-black">Full Beard</span>
            </h2>
            <p className="text-[#0F2E15] font-bold max-w-lg mx-auto text-base mb-10 leading-relaxed">
              Order your 100ml bottle of Riwayat Beard & Mustache Growth Oil today with free Cash on Delivery across Pakistan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="px-10 py-4 bg-[#b45309] hover:bg-[#92400e] text-white font-black text-base rounded-full uppercase tracking-widest shadow-xl"
              >
                Order Now — Rs. 1,799
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/")}
                className="px-10 py-4 bg-[#133937] hover:bg-black text-amber-300 rounded-full font-black text-base uppercase tracking-widest shadow-xl transition-all flex items-center gap-2 justify-center"
              >
                See All Products <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#161412] py-10 text-center border-t border-amber-500/30">
        <p className="text-white text-xs tracking-widest uppercase font-display font-semibold">© 2024 Riwayat — Herbal Wisdom · Beard & Mustache Growth Oil</p>
        <p className="text-amber-400 font-bold text-xs tracking-wider mt-2 font-serif">100% Organic · Handcrafted · Pure Herbal Power</p>
      </footer>
    </main>
  );
};

export default BeardOilPage;
