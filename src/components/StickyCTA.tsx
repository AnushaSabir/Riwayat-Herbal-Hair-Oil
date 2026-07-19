import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import bottleImage from "@/assets/riwayat-bottle.png";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";

const StickyCTA = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY]);

    const handleAddToCart = () => {
        addItem({
            id: 'riwayat-oil-250ml',
            name: 'Riwayat Herbal Hair Oil (250ml)',
            price: 1499,
            quantity: 1,
            image: bottleImage
        });
        toast.success("Added to basket!");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-8 pointer-events-none md:pb-4"
                >
                    <div className="max-w-4xl mx-auto bg-black/10 backdrop-blur-2xl border border-black/30 rounded-[32px] md:rounded-full p-3 md:p-2 shadow-2xl pointer-events-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 pl-4">
                            <img src={bottleImage} alt="Bottle" className="w-10 h-10 object-contain drop-shadow-lg" />
                            <div className="hidden sm:block">
                                <p className="text-foreground font-display font-bold text-sm tracking-tight leading-none">Riwayat Herbal Hair Oil</p>
                                <p className="text-gold font-elegant text-[10px] uppercase tracking-widest mt-1">Order Magic Now</p>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="px-8 md:px-12 py-3 bg-herbal text-white font-display text-xs md:text-sm rounded-full shadow-xl hover:bg-herbal-dark transition-all uppercase tracking-widest font-bold"
                        >
                            Order Your Bottle
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
