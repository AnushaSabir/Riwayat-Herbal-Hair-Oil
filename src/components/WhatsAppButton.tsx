import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "923222461264";
    const message = encodeURIComponent("Hello Riwayat, I want to order the Herbal Hair Oil.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[60] group"
        >
            <div className="relative">
                {/* Ring Animation */}
                <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping" />

                {/* Main Button */}
                <div className="relative bg-gradient-to-tr from-green-600 to-green-400 p-4 rounded-full shadow-2xl border border-white/20 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                </div>

                {/* Floating Label */}
                <div className="absolute right-[calc(100%+1rem)] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    <p className="text-navy font-elegant text-sm font-bold tracking-tight">Order via WhatsApp</p>
                </div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
