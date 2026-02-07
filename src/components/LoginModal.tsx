import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'sonner';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success("Account created successfully!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Logged in successfully!");
            }
            onClose();
        } catch (error: any) {
            toast.error(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-navy/95 backdrop-blur-xl border-white/10 rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display text-foreground text-center mb-4">
                        {isRegister ? "Create Account" : "Welcome Back"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground/80">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-xl border-white/10 bg-white/5 text-foreground focus:border-gold focus:ring-gold placeholder:opacity-30"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-foreground/80">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-xl border-white/10 bg-white/5 text-foreground focus:border-gold focus:ring-gold placeholder:opacity-30"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-navy hover:bg-navy-light text-white py-6 rounded-xl font-elegant text-lg shadow-xl"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : (isRegister ? "Sign Up" : "Login")}
                    </Button>
                    <div className="text-center pt-2">
                        <button
                            type="button"
                            onClick={() => setIsRegister(!isRegister)}
                            className="text-sm font-elegant text-navy-light hover:text-gold transition-colors"
                        >
                            {isRegister ? "Already have an account? Login" : "Don't have an account? Sign up"}
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
