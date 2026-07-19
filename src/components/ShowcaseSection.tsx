import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "@/assets/infographic-product.jpg";
import img2 from "@/assets/infographic-results.jpg";
import img3 from "@/assets/brand-creative-1.jpg";
import img4 from "@/assets/brand-creative-2.jpg";
import img5 from "@/assets/brand-creative-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    { src: img1, title: "Anatomy of Excellence", label: "Pure Formula" },
    { src: img2, title: "Proven Results", label: "Real Growth" },
    { src: img3, title: "Herbal Wisdom", label: "Traditional Art" },
    { src: img4, title: "Natural Glow", label: "Shine & Strength" },
    { src: img5, title: "Root Deep", label: "Complete Care" }
];

const ShowcaseSection = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center">

                    <div className="relative w-full rounded-[40px] md:rounded-[60px] overflow-hidden border border-black/40 shadow-2xl bg-black/5 backdrop-blur-md group flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index].src}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="p-4 rounded-full bg-black/10 backdrop-blur-md border border-black/20 text-foreground hover:bg-gold hover:text-white transition-all pointer-events-auto"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                className="p-4 rounded-full bg-black/10 backdrop-blur-md border border-black/20 text-foreground hover:bg-gold hover:text-white transition-all pointer-events-auto"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {images.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${i === index ? "w-12 bg-gold" : "w-3 bg-black/40"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center h-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-gold font-elegant tracking-[0.6em] uppercase text-xs mb-4 block opacity-80">{images[index].label}</span>
                                <h3 className="text-3xl md:text-5xl font-display font-medium text-herbal tracking-tight italic">
                                    {images[index].title.split(' ')[0]} <span className="text-gold">{images[index].title.split(' ').slice(1).join(' ')}</span>
                                </h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
