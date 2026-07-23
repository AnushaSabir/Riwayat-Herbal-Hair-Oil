import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import LoginModal from './LoginModal';
import CartSidebar from './CartSidebar';
import { useCartStore } from '@/lib/cartStore';
import AnimatedLogo from './AnimatedLogo';

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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-herbal text-white backdrop-blur-md border-b border-herbal-light/10">
                <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <AnimatedLogo className="text-2xl lg:text-3xl font-display font-medium tracking-[0.4em] uppercase" textColor="text-white" glowColor="text-gold" />
                        <span className="text-[9px] lg:text-[10px] font-elegant tracking-[0.5em] text-gold uppercase mt-1 ml-0.5 opacity-80 font-bold">Herbal Wisdom</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-10">
                            <a href="#features" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-white/80 hover:text-gold transition-colors font-bold">Benefits</a>
                            <a href="#ingredients" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-white/80 hover:text-gold transition-colors font-bold">Ingredients</a>
                            <a href="#results" className="text-[11px] uppercase tracking-[0.3em] font-elegant text-white/80 hover:text-gold transition-colors font-bold">Results</a>
                        </div>

                        <div className="flex items-center gap-6 ml-10 pl-10 border-l border-white/10">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-white hover:text-gold transition-all group"
                            >
                                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gold text-background text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold shadow-lg border border-background">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Welcome</span>
                                        <span className="text-xs font-elegant text-white font-bold italic">{user.email?.split('@')[0]}</span>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="p-2 text-white/60 hover:text-brand-red transition-colors"
                                        title="Sign Out"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="flex items-center gap-3 px-8 py-3 bg-gold text-background rounded-full text-xs font-display uppercase tracking-widest hover:bg-gold-light transition-all shadow-xl font-bold"
                                >
                                    <User className="w-3.5 h-3.5" />
                                    <span>Login</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
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
                            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-herbal text-center uppercase tracking-widest font-bold">Benefits</a>
                                <a href="#ingredients" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-herbal text-center uppercase tracking-widest font-bold">Ingredients</a>
                                <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-elegant text-herbal text-center uppercase tracking-widest font-bold">Results</a>
                                <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsLoginOpen(true);
                                        }}
                                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gold text-background rounded-full font-bold uppercase tracking-widest text-sm"
                                    >
                                        <User className="w-5 h-5" />
                                        Login
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsCartOpen(true);
                                        }}
                                        className="flex items-center justify-center gap-2 px-6 py-4 border border-foreground/20 text-herbal rounded-full border-herbal font-bold uppercase tracking-widest text-sm"
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
