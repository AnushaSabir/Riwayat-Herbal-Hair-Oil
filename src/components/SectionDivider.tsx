import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center py-4 pointer-events-none">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full max-w-7xl h-[2px] bg-gradient-gold shadow-[0_2px_10px_rgba(191,149,63,0.3)] rounded-full origin-center"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full blur-[8px] opacity-40 animate-pulse" />
        </div>
    );
};

export default SectionDivider;
