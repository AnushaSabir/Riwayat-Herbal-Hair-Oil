import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "@/assets/beard/beard-gallery-1.jpg";
import img2 from "@/assets/beard/beard-gallery-2.jpg";
import img3 from "@/assets/beard/beard-bottle.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    { src: img1, title: "Fuller & Thicker Beard", label: "Density & Growth" },
    { src: img2, title: "100% Pure Organic Oils", label: "Natural Ingredients" },
    { src: img3, title: "Riwayat Beard Formula", label: "Root Activation" }
];

const BeardShowcaseSection = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-12">
                        <span className="text-amber-500 font-serif tracking-[0.4em] uppercase text-xs mb-3 block">Product Showcase</span>
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-herbal uppercase tracking-tight">
                            The Science of <span className="text-amber-500 italic">Growth</span>
                        </h2>
                    </div>

                    <div className="relative w-full group">
                        <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full -z-10" />
                        <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] border border-amber-500/30 shadow-2xl p-4 bg-black/40 backdrop-blur-md flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={images[index].src}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                    className="w-full h-auto max-h-[65vh] rounded-[32px] md:rounded-[48px] object-cover"
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.stopPropagation(); prev(); }}
                                    className="p-3 md:p-4 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all pointer-events-auto shadow-lg"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); next(); }}
                                    className="p-3 md:p-4 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all pointer-events-auto shadow-lg"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${i === index ? "w-10 bg-amber-500" : "w-3 bg-white/30"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center h-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-amber-500 font-elegant tracking-[0.5em] uppercase text-xs mb-2 block font-semibold">{images[index].label}</span>
                                <h3 className="text-2xl md:text-4xl font-display font-medium text-herbal tracking-tight italic">
                                    {images[index].title}
                                </h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeardShowcaseSection;
