import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import bottleImage from "@/assets/riwayat-bottle.png";
import { useRef } from "react";

const BottleExplorer = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 100, damping: 30 });

    function onMouseMove(event: React.MouseEvent) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    function onMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <section className="py-40 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-gold font-elegant tracking-[0.5em] uppercase text-xs mb-8 block opacity-80">Immersive Experience</span>
                        <h2 className="text-5xl md:text-8xl font-display font-medium text-navy mb-10 leading-[1.1] tracking-tight">
                            Inspect the <span className="italic">Magic.</span>
                        </h2>
                        <p className="text-navy/60 font-elegant text-xl md:text-2xl leading-relaxed mb-12 italic">
                            "Drag your cursor to explore every detail of the Riwayat bottle. A masterpiece of herbal engineering, designed to be held as much as used."
                        </p>

                        <div className="flex items-center gap-4 text-xs font-elegant tracking-[0.3em] uppercase text-navy/40">
                            <span className="w-12 h-[1px] bg-gold/40" />
                            <span>360 Degree Insight</span>
                        </div>
                    </motion.div>

                    <div
                        ref={containerRef}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                        className="lg:w-1/2 flex justify-center items-center relative py-20 cursor-move"
                    >
                        {/* Glossy Background Circle */}
                        <motion.div
                            style={{
                                background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)"
                            }}
                            className="absolute inset-0 z-0"
                        />

                        <motion.div
                            style={{
                                perspective: 1000,
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative z-10"
                        >
                            <img
                                src={bottleImage}
                                alt="Bottle"
                                className="w-64 md:w-96 h-auto drop-shadow-xl"
                                style={{
                                    filter: "brightness(1.02)"
                                }}
                            />

                            {/* Hotspot Indicators */}
                            <motion.div
                                className="absolute top-1/4 -right-10 md:-right-20 flex items-center gap-4"
                                style={{ translateZ: 100 }}
                            >
                                <div className="w-4 h-4 rounded-full bg-gold animate-ping" />
                                <span className="text-[10px] font-elegant tracking-widest uppercase text-navy/60">Sealed for Freshness</span>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-1/4 -left-10 md:-left-20 flex items-center gap-4"
                                style={{ translateZ: 150 }}
                            >
                                <span className="text-[10px] font-elegant tracking-widest uppercase text-navy/60">99% Glass Eco-Bottle</span>
                                <div className="w-4 h-4 rounded-full bg-gold animate-ping" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottleExplorer;
