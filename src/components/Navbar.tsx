import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import LoginModal from './LoginModal';
import CartSidebar from './CartSidebar';
import { useCartStore } from '@/lib/cartStore';

const Navbar = () => {
    const { user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const items = useCartStore((state) => state.items);
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/20">
                <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <span className="text-2xl font-display font-medium text-navy tracking-[0.4em] uppercase">RIWAYAT</span>
                        <span className="text-[9px] font-elegant tracking-[0.5em] text-gold uppercase -mt-1 ml-0.5 opacity-80">Herbal Magic</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-10">
                            <a href="#features" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-navy/60 hover:text-navy transition-colors font-bold">Benefits</a>
                            <a href="#ingredients" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-navy/60 hover:text-navy transition-colors font-bold">Ingredients</a>
                            <a href="#results" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-navy/60 hover:text-navy transition-colors font-bold">Results</a>
                        </div>

                        <div className="flex items-center gap-6 ml-10 pl-10 border-l border-navy/5">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-navy hover:text-gold transition-all group"
                            >
                                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Welcome</span>
                                        <span className="text-xs font-elegant text-navy font-bold italic">{user.email?.split('@')[0]}</span>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="p-2 text-navy/40 hover:text-brand-red transition-colors"
                                        title="Sign Out"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="flex items-center gap-3 px-8 py-3 bg-navy text-white rounded-full text-xs font-elegant uppercase tracking-widest hover:bg-gold transition-all shadow-xl hover:shadow-gold/20"
                                >
                                    <User className="w-3.5 h-3.5" />
                                    <span>Login</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-navy"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-navy/10 overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-navy text-center">Benefits</a>
                                <a href="#ingredients" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-navy text-center">Ingredients</a>
                                <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-navy text-center">Results</a>
                                <div className="flex justify-center gap-6 pt-4 border-t border-navy/5">
                                    <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-2 text-navy font-elegant">
                                        <User className="w-5 h-5" />
                                        Login
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsCartOpen(true);
                                        }}
                                        className="flex items-center gap-2 text-navy font-elegant"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Cart ({cartCount})
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onLoginClick={() => {
                    setIsCartOpen(false);
                    setIsLoginOpen(true);
                }}
            />
        </>
    );
};

export default Navbar;
