import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Regular Customer",
        content: "The shine this oil gives is unreal! My hair feels thicker and much more manageable after just 3 weeks.",
        stars: 5
    },
    {
        name: "Zainab Khan",
        role: "Verified Buyer",
        content: "I've tried many herbal oils, but Riwayat is different. The consistency and results are definitely premium.",
        stars: 5
    },
    {
        name: "Fatima Noor",
        role: "Professional Stylist",
        content: "As a stylist, I'm picky about what I recommend. Riwayat is my go-to for natural hair restoration.",
        stars: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-gold font-elegant tracking-[0.5em] uppercase text-xs mb-6 block opacity-80">Words of Magic</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium text-herbal leading-[1.1] tracking-tight">
                        Customer <span className="italic">Stories.</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-herbal animated-border backdrop-blur-xl border border-herbal-dark p-12 rounded-[48px] shadow-xl hover:shadow-herbal/20 hover:bg-herbal-dark transition-all duration-500 relative group"
                        >
                            <Quote className="absolute top-8 right-12 w-12 h-12 text-white/10 group-hover:text-white/20 transition-colors" />

                            <div className="flex gap-1 mb-8">
                                {[...Array(t.stars)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-white fill-white" />
                                ))}
                            </div>

                            <p className="text-white/80 font-elegant italic text-lg leading-relaxed mb-10">
                                "{t.content}"
                            </p>

                            <div className="pt-8 border-t border-white/10">
                                <h4 className="text-xl font-display font-medium text-white mb-1 tracking-tight">{t.name}</h4>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
