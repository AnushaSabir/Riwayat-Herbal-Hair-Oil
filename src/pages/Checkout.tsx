import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/cartStore';
import { useAuth } from '@/lib/AuthContext';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

const Checkout = () => {
    const { items, total, clearCart } = useCartStore();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        instructions: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            toast.error("Please login to place an order");
            return;
        }
        if (items.length === 0) {
            toast.error("Your basket is empty");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, "orders"), {
                userId: user.uid,
                userEmail: user.email,
                items: items,
                total: total(),
                shippingInfo: formData,
                status: 'pending',
                paymentMethod: 'COD',
                createdAt: serverTimestamp()
            });

            toast.success("Order placed successfully! We will contact you soon.");
            clearCart();
            navigate('/');
        } catch (error: any) {
            console.error("Order error:", error);
            toast.error("Error placing order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-glossy-green pt-32 pb-20 px-4">
                <Navbar />
                <div className="max-w-2xl mx-auto text-center bg-white/60 backdrop-blur-xl p-12 rounded-[40px] shadow-2xl">
                    <h2 className="text-3xl font-display text-navy mb-6">Your Basket is Empty</h2>
                    <Button onClick={() => navigate('/')} className="bg-navy hover:bg-navy-light text-white rounded-xl px-12 py-6 text-lg font-elegant">
                        Start Shopping
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-glossy-green pt-32 pb-20">
            <Navbar />
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/70 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-white"
                    >
                        <h2 className="text-3xl font-display text-navy mb-8">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input
                                        required
                                        className="rounded-xl border-navy/10 py-6"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone Number</Label>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="03xx-xxxxxxx"
                                        className="rounded-xl border-navy/10 py-6"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Delivery Address</Label>
                                <Input
                                    required
                                    className="rounded-xl border-navy/10 py-6"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>City</Label>
                                <Input
                                    required
                                    className="rounded-xl border-navy/10 py-6"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Special Instructions (Optional)</Label>
                                <Input
                                    className="rounded-xl border-navy/10 py-6"
                                    value={formData.instructions}
                                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                                />
                            </div>
                            <div className="pt-6">
                                <div className="bg-herbal/5 p-6 rounded-2xl mb-8 border border-herbal/10">
                                    <p className="text-navy/70 font-elegant italic text-sm">
                                        <strong>Note:</strong> We only accept Cash on Delivery (COD) at the moment. You will pay the rider when your Riwayat oil arrives.
                                    </p>
                                </div>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-navy hover:bg-navy-light text-white py-8 rounded-2xl text-xl font-elegant shadow-2xl transition-all hover:scale-[1.02]"
                                >
                                    {loading ? "Placing Order..." : "Confirm COD Order"}
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-navy/80 backdrop-blur-lg text-white p-8 rounded-[40px] shadow-2xl">
                            <h3 className="text-2xl font-display mb-8 tracking-widest uppercase">Order Summary</h3>
                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                        <div className="flex gap-4 items-center">
                                            <img src={item.image} className="w-16 h-16 object-contain bg-white rounded-xl p-2" />
                                            <div>
                                                <p className="font-display text-sm tracking-wide uppercase">{item.name}</p>
                                                <p className="text-white/60 text-xs">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="font-bold">Rs. {item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 pt-6 border-t border-white/10 text-lg">
                                <div className="flex justify-between opacity-70">
                                    <span>Shipping</span>
                                    <span className="font-elegant italic">FREE</span>
                                </div>
                                <div className="flex justify-between text-2xl font-display font-bold text-gold tracking-tight pt-2">
                                    <span>Total</span>
                                    <span>Rs. {total()}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
