import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trees, Microscope, Droplets, Sparkles } from "lucide-react";

const steps = [
    {
        icon: Trees,
        title: "Organic Harvest",
        description: "Sourcing the purest Amla, Neem, and Reetha from certified organic harvests.",
        year: "Step 01"
    },
    {
        icon: Microscope,
        title: "Triple Refinement",
        description: "Our unique triple-refining process ensures zero impurities and maximum potency.",
        year: "Step 02"
    },
    {
        icon: Droplets,
        title: "Ancient Infusion",
        description: "Cold-pressed infusion that preserves the active natural vitamins and nutrients.",
        year: "Step 03"
    },
    {
        icon: Sparkles,
        title: "Magical Results",
        description: "A bottle of legacy ready to transform your hair from root to growth.",
        year: "Final Step"
    }
];

const JourneySection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-40 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-32">
                    <span className="text-gold font-elegant tracking-[0.5em] uppercase text-xs mb-6 block opacity-70">The Heritage</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium text-herbal tracking-tight uppercase leading-tight">
                        Journey To <span className="italic">Pure</span> Excellence
                    </h2>
                    <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-12" />
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Central Progress Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-background/10 hidden md:block">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-gold/50"
                        />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                                    {/* Timeline Node */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gold z-20 hidden md:block" />

                                    {/* Content Left (Even) or Right (Odd) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                        className={`w-full md:w-1/2 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:order-last'}`}
                                    >
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'} gap-4`}>
                                            <span className="text-gold font-elegant tracking-widest text-[10px] uppercase font-bold">{step.year}</span>
                                            <div className="p-4 bg-herbal backdrop-blur-md rounded-2xl border border-herbal-dark shadow-sm group hover:bg-herbal-dark transition-colors">
                                                <step.icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="text-2xl font-display font-medium text-herbal tracking-tight">{step.title}</h3>
                                            <p className="text-foreground/50 font-elegant text-sm leading-relaxed max-w-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[180px] rounded-full -z-10 translate-x-1/3 translate-y-1/3" />
        </section>
    );
};

export default JourneySection;
