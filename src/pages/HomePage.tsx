import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Leaf, Heart, Star, CheckCircle } from "lucide-react";
import AnimatedLogo from "../components/AnimatedLogo";
import hairOilBottle from "@/assets/riwayat-bottle.png";
import jointsOilBottle from "@/assets/joints/joints-bottle.png";
import Footer from "@/components/Footer";

const products = [
  {
    id: "hair-oil",
    route: "/hair-oil",
    name: "Herbal Hair Oil",
    tagline: "Root se Growth tak",
    description: "Premium herbal formula with 8 powerful ingredients for stronger, thicker, silky hair.",
    bottle: hairOilBottle,
    video: "/videos/hair-hero.mp4",
    color: "from-herbal/20 to-gold/10",
    borderColor: "border-gold/30",
    glowColor: "bg-gold/20",
    badgeColor: "text-gold border-gold/40",
    accentColor: "text-gold",
    btnClass: "bg-gold hover:bg-gold/90 text-white",
    tags: ["Amla", "Neem", "Shikakai", "Kalonji"],
    badge: "Best Seller",
    volume: "250ml",
  },
  {
    id: "joints-oil",
    route: "/joints-oil",
    name: "Joint Pain & Repair Oil",
    tagline: "Relieves Pain. Restores Life.",
    description: "100% herbal solution that relieves pain, reduces swelling and improves joint flexibility.",
    bottle: jointsOilBottle,
    video: "/videos/joints-hero.mp4",
    color: "from-blue-900/20 to-herbal/10",
    borderColor: "border-herbal/30",
    glowColor: "bg-herbal/20",
    badgeColor: "text-herbal border-herbal/40",
    accentColor: "text-herbal",
    btnClass: "bg-herbal hover:bg-herbal/90 text-white",
    tags: ["Adrak", "Eucalyptus", "Rosemary", "Kalonji"],
    badge: "New Arrival",
    volume: "200ml",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-herbal/5 blur-[150px] rounded-full" />
      </div>

      {/* Simple top nav */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <div className="flex flex-col cursor-pointer" onClick={() => navigate("/")}>
          <AnimatedLogo className="text-2xl md:text-3xl font-display font-bold tracking-[0.25em] uppercase" textColor="text-herbal" glowColor="text-herbal drop-shadow-sm" />
          <span className="text-[10px] text-gold tracking-[0.3em] uppercase font-serif">Herbal Wisdom</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-foreground/60 font-display uppercase tracking-widest">
          <span
            className="hover:text-gold cursor-pointer transition-colors hidden md:block"
            onClick={() => navigate("/hair-oil")}
          >
            Hair Oil
          </span>
          <span
            className="hover:text-herbal cursor-pointer transition-colors hidden md:block"
            onClick={() => navigate("/joints-oil")}
          >
            Joint Oil
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center pt-10 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.4em] uppercase font-serif mb-4">
            <Sparkles className="w-4 h-4" /> The Essence of Herbal Wisdom
          </span>
          <div className="mb-2 flex justify-center drop-shadow-sm">
            <AnimatedLogo className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-none tracking-widest uppercase" textColor="text-gold" glowColor="text-gold drop-shadow-lg" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display text-herbal/90 mb-6 tracking-wide">
            Nature's Best, Bottled for You
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-base md:text-lg font-medium">
            Two powerful herbal solutions — crafted from centuries-old wisdom, made for modern lives.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-6 flex-wrap"
        >
          {[
            { icon: <Leaf className="w-4 h-4" />, text: "100% Herbal" },
            { icon: <Shield className="w-4 h-4" />, text: "Lab Tested" },
            { icon: <Sparkles className="w-4 h-4" />, text: "No Chemicals" },
          ].map((b) => (
            <span key={b.text} className="flex items-center gap-1.5 text-xs text-foreground/50 border border-black/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="text-gold">{b.icon}</span> {b.text}
            </span>
          ))}
        </motion.div>
      </section>


      {/* Product Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
              onClick={() => navigate(product.route)}
              className={`
                relative group cursor-pointer rounded-3xl border ${product.borderColor}
                bg-gradient-to-br ${product.color}
                backdrop-blur-md overflow-hidden
                hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
              `}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 ${product.glowColor} blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-3xl`} />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className={`text-[10px] font-bold uppercase tracking-widest border px-3 py-1 rounded-full backdrop-blur-sm bg-background/30 ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Volume */}
              <div className="absolute top-5 right-5 z-20">
                <span className="text-[10px] text-foreground/40 border border-black/10 px-2.5 py-1 rounded-full bg-background/20">
                  {product.volume}
                </span>
              </div>

              {/* Product Video */}
              <div className="flex justify-center pt-14 pb-4 relative h-72 md:h-80 lg:h-[26rem] px-4">
                <video
                  src={product.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10 pointer-events-none rounded-3xl"
                />
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 ${product.glowColor} blur-2xl rounded-full`} />
              </div>

              {/* Content */}
              <div className="px-6 pb-8 relative z-10">
                <p className={`text-xs tracking-[0.3em] uppercase font-serif mb-1 ${product.accentColor}`}>
                  {product.tagline}
                </p>
                <h2 className="text-xl md:text-2xl font-display font-bold text-herbal mb-2">
                  {product.name}
                </h2>
                <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Ingredient tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-foreground/50 border border-black/10 px-2.5 py-1 rounded-full bg-black/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 rounded-xl font-display font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3 ${product.btnClass}`}>
                  Explore Product
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-y border-black/5 py-10"
        >
          <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-serif mb-4 block">Our Philosophy</span>
          <p className="text-foreground/70 md:text-xl font-display leading-relaxed italic max-w-3xl mx-auto">
            "For generations, our ancestors relied on the purity of nature to heal and nourish. At Riwayat, we bring back that lost heritage. Every drop in our bottles is a promise of 100% natural, unadulterated herbal power — crafted exactly the way nature intended."
          </p>
        </motion.div>
      </section>


      {/* Why Choose Riwayat */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-herbal text-xs uppercase tracking-[0.4em] font-serif mb-3 block">The Riwayat Promise</span>
          <h2 className="text-3xl md:text-4xl font-display text-herbal">Why Choose Us?</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Leaf className="w-6 h-6" />, title: "Pure Ingredients", desc: "Sourced directly from nature, completely free from harsh chemicals, parabens, and artificial preservatives." },
            { icon: <Star className="w-6 h-6" />, title: "Proven Results", desc: "Trusted by thousands of satisfied customers for genuine, visible results that speak for themselves." },
            { icon: <Heart className="w-6 h-6" />, title: "Heritage Formula", desc: "Crafted using age-old traditional methods passed down through generations, blended with modern precision." }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl animated-border transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center text-gold mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
