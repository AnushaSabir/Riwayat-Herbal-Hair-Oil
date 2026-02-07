import { motion } from "framer-motion";
import productInfographic from "@/assets/infographic-product.jpg";

const ShowcaseSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="w-full relative group"
                    >
                        {/* Soft Ambient Glow */}
                        <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full -z-10" />

                        <div className="relative overflow-hidden rounded-[80px] border border-white/50 shadow-[0_50px_100px_rgba(0,0,0,0.1)] p-6 bg-white/20 backdrop-blur-md">
                            <motion.img
                                src={productInfographic}
                                alt="Riwayat Product Benefits Infographic"
                                className="w-full h-auto rounded-[60px] object-cover"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 1 }}
                            />
                        </div>

                        {/* Premium Caption */}
                        <div className="mt-12 text-center">
                            <span className="text-gold font-elegant tracking-[0.6em] uppercase text-xs mb-4 block opacity-80">Scientific Sophistication</span>
                            <h3 className="text-3xl md:text-5xl font-display font-medium text-navy tracking-tight italic">
                                The Anatomy of <span className="text-gold">Excellence.</span>
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
