import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from '@/lib/cartStore';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginClick: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, onLoginClick }) => {
    const { items, removeItem, addItem, total } = useCartStore();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!user) {
            onLoginClick();
            return;
        }
        onClose();
        navigate('/checkout');
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full sm:max-w-md bg-white/95 backdrop-blur-xl border-navy/10">
                <SheetHeader className="pb-6 border-b border-navy/5">
                    <SheetTitle className="text-2xl font-display text-foreground flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6" />
                        Your Basket
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full pt-6">
                    <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                        {items.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-foreground/50 font-elegant italic">Your basket is empty</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-background/5 rounded-2xl">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain bg-white rounded-xl p-2" />
                                    <div className="flex-1">
                                        <h4 className="font-display font-medium text-foreground uppercase text-sm">{item.name}</h4>
                                        <p className="text-gold font-elegant font-bold">Rs. {item.price}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => item.quantity > 1 && addItem({ ...item, quantity: -1 })}
                                                className="p-1 rounded-md hover:bg-background/10 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addItem({ ...item, quantity: 1 })}
                                                className="p-1 rounded-md hover:bg-background/10 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="ml-auto p-1 text-foreground-light hover:text-brand-red transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="pb-8 pt-6 border-t border-navy/5 space-y-4">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-foreground/60 font-elegant italic">Subtotal</span>
                            <span className="text-2xl font-display font-bold text-foreground tracking-tight">Rs. {total()}</span>
                        </div>
                        <Button
                            className="w-full bg-background hover:bg-background-light text-white py-8 rounded-2xl text-lg font-elegant shadow-2xl"
                            disabled={items.length === 0}
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </Button>
                        {!user && items.length > 0 && (
                            <p className="text-center text-[10px] text-foreground/40 font-elegant">
                                Login is required to place an order
                            </p>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartSidebar;
