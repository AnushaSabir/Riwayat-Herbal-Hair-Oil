import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Volume2, VolumeX, Leaf, Shield, Zap, Star, ChevronRight, Heart, Activity, Wind } from "lucide-react";
import { useRef, useState } from "react";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";

// Import joints bottle image
import jointsBottle from "@/assets/joints/joints-bottle.png";

// ─── Ingredients ───────────────────────────────────────────────────────────
const ingredients = [
  { name: "Adrak (Ginger)", benefit: "Reduces inflammation & warms joints", icon: "🌿", color: "text-amber-400" },
  { name: "Kalonji", benefit: "Powerful pain relief & anti-inflammatory", icon: "🌑", color: "text-purple-400" },
  { name: "Eucalyptus", benefit: "Deep cooling & instant pain relief", icon: "🌿", color: "text-cyan-400" },
  { name: "Rosemary", benefit: "Improves blood circulation in joints", icon: "🪴", color: "text-green-400" },
  { name: "Ajwain", benefit: "Relieves stiffness & muscle cramps", icon: "🌾", color: "text-yellow-400" },
  { name: "Himalayan Salt", benefit: "Natural detox & mineral support", icon: "💎", color: "text-blue-300" },
  { name: "Camphor (Kapur)", benefit: "Anti-spasm & deep pain relief", icon: "❄️", color: "text-sky-400" },
  { name: "Til Oil (Sesame)", benefit: "Base carrier oil, deeply nourishing", icon: "🫙", color: "text-orange-400" },
];

// ─── Benefits ──────────────────────────────────────────────────────────────
const benefits = [
  { icon: <Activity className="w-6 h-6" />, title: "Relieves Joint Pain", desc: "Works deep inside the joint tissues to eliminate chronic and acute pain." },
  { icon: <Wind className="w-6 h-6" />, title: "Reduces Swelling", desc: "Powerful anti-inflammatory herbs reduce swelling within minutes of application." },
  { icon: <Zap className="w-6 h-6" />, title: "Improves Flexibility", desc: "Regular use restores joint mobility and improves range of motion." },
  { icon: <Heart className="w-6 h-6" />, title: "100% Herbal & Safe", desc: "No steroids, no chemicals. Safe for daily long-term use for all ages." },
  { icon: <Leaf className="w-6 h-6" />, title: "Fast Absorption", desc: "Lightweight formula absorbs instantly — no greasy residue." },
  { icon: <Shield className="w-6 h-6" />, title: "Repairs Cartilage", desc: "Herbal actives support natural cartilage repair and bone health." },
];

// ─── Testimonials ──────────────────────────────────────────────────────────
const testimonials = [
  { name: "Sajida Bibi", age: "58", text: "Meri knee ka dard 2 mahine mein bilkul khatam ho gaya. Ye oil waqai kaam karta hai!", rating: 5 },
  { name: "Tariq Ahmed", age: "45", text: "Office mein ghante bhar baith kar kamar mein dard hota tha, ab bilkul theek hoon.", rating: 5 },
  { name: "Nasreen Apa", age: "63", text: "Mujhe arthritis hai, is oil ne meri zindagi badal di. Roz use karta hun.", rating: 5 },
  { name: "Muhammad Arif", age: "52", text: "Spine ki problem thi, doctor ne bhi yahi recommend kiya. Bohat aacha product hai.", rating: 5 },
];

// ─── Videos ────────────────────────────────────────────────────────────────
const videos = [
  { src: "/videos/joint-1.mp4", label: "How It Works" },
  { src: "/videos/joint-2.mp4", label: "Real Results" },
  { src: "/videos/joint-3.mp4", label: "Application Guide" },
];

// ──────────────────────────────────────────────────────────────────────────
const JointsOilPage = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAddToCart = () => {
    addItem({
      id: "riwayat-joints-oil-200ml",
      name: "Riwayat Joint Pain & Repair Oil (200ml)",
      price: 1299,
      quantity: 1,
      image: jointsBottle,
    });
    toast.success("Added to basket!");
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* ── Ambient Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-herbal/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full" />
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-herbal/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-foreground/50 hover:text-herbal transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:block font-display uppercase tracking-widest text-xs">All Products</span>
            </button>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex flex-col cursor-pointer" onClick={() => navigate("/")}>
              <span className="text-xl font-display font-bold text-foreground tracking-[0.3em] uppercase">RIWAYAT</span>
              <span className="text-[9px] text-herbal tracking-[0.4em] uppercase font-serif">Joint Care</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Benefits", "Ingredients", "Results", "Videos"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.3em] font-display text-foreground/60 hover:text-herbal transition-colors font-semibold">
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-herbal/10 hover:bg-herbal/20 border border-herbal/30 text-herbal px-4 py-2.5 rounded-full text-xs font-display uppercase tracking-widest transition-all hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:block">Order Now</span>
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Right background panel */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] bg-herbal/5 rounded-l-[200px] z-0 border-l border-herbal/10" />

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pt-16 lg:pt-0"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 text-herbal text-xs tracking-[0.4em] uppercase font-serif mb-3 border border-herbal/30 px-4 py-1.5 rounded-full bg-herbal/5">
                <Leaf className="w-3 h-3" /> 100% Herbal Solution
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-3 tracking-tight">
              RIWAYAT
            </h1>
            <h2 className="text-2xl md:text-3xl font-display text-herbal mb-2 tracking-wide">
              Joint Pain &
            </h2>
            <h2 className="text-2xl md:text-3xl font-display text-foreground/70 mb-6 tracking-wide">
              Joint Repair Oil
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Relieves Pain", "Reduces Swelling", "Improves Flexibility"].map((tag) => (
                <span key={tag} className="text-xs text-herbal border border-herbal/30 px-3 py-1.5 rounded-full bg-herbal/5 font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>

            <p className="text-foreground/60 text-base leading-relaxed mb-8 max-w-md">
              A powerful blend of 8 ancient herbs — scientifically formulated to penetrate deep into joints,
              relieve pain, reduce inflammation and restore your natural mobility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(34,197,94,0.2)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="px-8 py-4 bg-herbal text-white font-display text-base rounded-full uppercase tracking-widest font-semibold shadow-lg transition-all"
              >
                Order Now — Rs. 1,299
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border-2 border-herbal/40 text-herbal bg-transparent hover:bg-herbal/10 font-display text-base rounded-full transition-all uppercase tracking-widest"
              >
                Learn More
              </motion.button>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-card border-2 border-background overflow-hidden -ml-2 first:ml-0">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=joint${i}&backgroundColor=transparent`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-herbal text-sm">{Array(5).fill("★").join("")}</div>
                <p className="text-foreground/50 text-xs">3k+ satisfied customers</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Bottle + Ingredients infographic */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] translate-x-0 sm:translate-x-4 md:translate-x-8 lg:translate-x-16 xl:translate-x-24 scale-[0.85] sm:scale-100 origin-center">
            {/* Left ingredients */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 z-20 w-[60px] sm:w-[90px] md:w-[150px]">
              {ingredients.slice(0, 4).map((ing, i) => (
                <motion.div key={ing.name}
                  animate={{ opacity: [0, 1, 1, 0], x: [30, 0, 0, 30] }}
                  transition={{ duration: 5, times: [0, 0.2, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.1 }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <span className="text-xl sm:text-3xl md:text-4xl flex-shrink-0">{ing.icon}</span>
                  <div className="text-right flex-1">
                    <p className={`text-[7px] sm:text-[10px] md:text-xs font-bold uppercase tracking-tight sm:tracking-wide leading-tight ${ing.color}`}>{ing.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Left arrows */}
            <div className="flex flex-col gap-3 sm:gap-5 z-20 mx-0.5 sm:mx-1">
              {ingredients.slice(0, 4).map((_, i) => (
                <motion.div key={i}
                  animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
                  transition={{ duration: 5, times: [0, 0.25, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.1 }}
                  className="flex items-center origin-left"
                >
                  <div className="w-3 sm:w-6 h-px border-t border-dashed border-herbal/40" />
                  <svg width="7" height="7" viewBox="0 0 8 8" className="text-herbal/50 flex-shrink-0"><path d="M0 4 L6 0 L6 8 Z" fill="currentColor" /></svg>
                </motion.div>
              ))}
            </div>

            {/* Bottle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="relative z-30 w-28 sm:w-44 md:w-56 lg:w-[320px] h-auto flex-shrink-0 mx-1 sm:mx-0"
            >
              <img src={jointsBottle} alt="Riwayat Joint Pain Oil" className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-40 h-8 bg-herbal/20 blur-2xl rounded-full" />
            </motion.div>

            {/* Right arrows */}
            <div className="flex flex-col gap-3 sm:gap-5 z-20 mx-0.5 sm:mx-1">
              {ingredients.slice(4).map((_, i) => (
                <motion.div key={i}
                  animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
                  transition={{ duration: 5, times: [0, 0.25, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.1 }}
                  className="flex items-center origin-right"
                >
                  <svg width="7" height="7" viewBox="0 0 8 8" className="text-herbal/50 flex-shrink-0"><path d="M8 4 L2 0 L2 8 Z" fill="currentColor" /></svg>
                  <div className="w-3 sm:w-6 h-px border-t border-dashed border-herbal/40" />
                </motion.div>
              ))}
            </div>

            {/* Right ingredients */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 z-20 w-[60px] sm:w-[90px] md:w-[150px]">
              {ingredients.slice(4).map((ing, i) => (
                <motion.div key={ing.name}
                  animate={{ opacity: [0, 1, 1, 0], x: [-30, 0, 0, -30] }}
                  transition={{ duration: 5, times: [0, 0.2, 0.85, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.1 }}
                  className="flex items-center gap-1 sm:gap-2 flex-row-reverse"
                >
                  <span className="text-xl sm:text-3xl md:text-4xl flex-shrink-0">{ing.icon}</span>
                  <div className="text-left flex-1">
                    <p className={`text-[7px] sm:text-[10px] md:text-xs font-bold uppercase tracking-tight sm:tracking-wide leading-tight ${ing.color}`}>{ing.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VIDEO SECTION
      ═══════════════════════════════════════════════════ */}
      <section id="videos" className="relative py-24 bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }} className="text-center mb-12"
          >
            <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-3 block">See It In Action</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Real Results, <span className="text-herbal">Real Stories</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-herbal to-transparent mx-auto" />
          </motion.div>

          {/* Video tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {videos.map((v, i) => (
              <button key={i} onClick={() => setActiveVideo(i)}
                className={`px-5 py-2 rounded-full text-xs font-display uppercase tracking-widest transition-all ${activeVideo === i ? "bg-herbal text-white" : "border border-herbal/30 text-herbal/60 hover:border-herbal/60"}`}>
                {v.label}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="max-w-sm mx-auto">
            <div className="glass-card p-2 md:p-3 rounded-3xl relative group shadow-2xl border border-herbal/20">
              <div className="relative rounded-2xl overflow-hidden bg-navy-light aspect-[9/16] shadow-inner">
                <video
                  ref={videoRef}
                  key={videos[activeVideo].src}
                  className="w-full h-full object-cover"
                  src={videos[activeVideo].src}
                  autoPlay muted={isMuted} loop playsInline
                />
                <button onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-black/70 transition-all z-20">
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-herbal/20 blur-[40px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BENEFITS
      ═══════════════════════════════════════════════════ */}
      <section id="benefits" className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Why Choose Riwayat</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground">
              6 Powerful <span className="text-herbal">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl border border-herbal/10 bg-card/40 hover:border-herbal/30 hover:bg-card/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-herbal/10 flex items-center justify-center text-herbal mb-4 group-hover:bg-herbal/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-foreground font-display font-bold text-base mb-2">{b.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INGREDIENTS
      ═══════════════════════════════════════════════════ */}
      <section id="ingredients" className="relative py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Nature's Power</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground">
              8 Herbal <span className="text-herbal">Ingredients</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-5 rounded-2xl border border-white/5 bg-card/40 hover:border-herbal/20 hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{ing.icon}</div>
                <h3 className={`font-display font-bold text-sm mb-1.5 ${ing.color}`}>{ing.name}</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">{ing.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section id="results" className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-3 block">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground">
              Real People, <span className="text-herbal">Real Relief</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl border border-herbal/10 bg-card/40 flex flex-col gap-3"
              >
                <div className="flex text-herbal text-sm">{Array(t.rating).fill("★").join("")}</div>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div>
                  <p className="text-foreground font-display font-bold text-sm">{t.name}</p>
                  <p className="text-foreground/40 text-xs">Age {t.age}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-herbal/10 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-herbal/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-4 block">Limited Stock Available</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              Move Without <span className="text-herbal">Pain</span>
            </h2>
            <p className="text-foreground/60 max-w-lg mx-auto text-base mb-10 leading-relaxed">
              Join thousands of satisfied customers who have reclaimed their mobility with Riwayat Joint Oil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="px-10 py-4 bg-herbal text-white font-display font-bold text-base rounded-full uppercase tracking-widest shadow-lg"
              >
                Order Now — Rs. 1,299
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/")}
                className="px-10 py-4 border-2 border-herbal/40 text-herbal rounded-full font-display font-semibold text-base uppercase tracking-widest hover:bg-herbal/10 transition-all flex items-center gap-2 justify-center"
              >
                See All Products <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center text-foreground/30 text-xs tracking-widest uppercase">
        <p>© 2024 Riwayat — Herbal Wisdom · Joint Pain & Repair Oil</p>
      </footer>
    </main>
  );
};

export default JointsOilPage;
