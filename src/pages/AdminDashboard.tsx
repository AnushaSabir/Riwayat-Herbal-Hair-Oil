import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, XCircle, Search } from 'lucide-react';
import { toast } from 'sonner';

interface Order {
    id: string;
    userEmail: string;
    total: number;
    status: string;
    shippingInfo: {
        fullName: string;
        phone: string;
        address: string;
        city: string;
    };
    items: any[];
    createdAt: any;
}

const AdminDashboard = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ordersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Order[];
            setOrders(ordersData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateStatus = async (orderId: string, newStatus: string) => {
        try {
            await updateDoc(doc(db, "orders", orderId), {
                status: newStatus
            });
            toast.success(`Order marked as ${newStatus}`);
        } catch (error) {
            toast.error("Error updating status");
        }
    };

    const filteredOrders = orders.filter(order =>
        order.shippingInfo.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-herbal">Riwayat Admin</h1>
                        <p className="text-slate-500 font-elegant">Manage your COD orders here</p>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by name or ID"
                            className="pl-10 pr-4 py-2 rounded-xl border-slate-200 focus:ring-navy w-full md:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </header>

                <div className="grid gap-6">
                    {loading ? (
                        <div className="text-center py-20">Loading orders...</div>
                    ) : filteredOrders.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500 font-elegant italic">No orders found</p>
                        </div>
                    ) : (
                        filteredOrders.map((order) => (
                            <motion.div
                                layout
                                key={order.id}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                            >
                                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                                                #{order.id.slice(0, 8)}
                                            </span>
                                            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${order.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                                                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                                            'bg-rose-100 text-rose-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-herbal">{order.shippingInfo.fullName}</h3>
                                            <p className="text-slate-500">{order.shippingInfo.phone}</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl text-sm">
                                            <p className="font-bold text-slate-400 uppercase text-[10px] mb-2 tracking-tighter">Delivery Address</p>
                                            <p className="text-foreground/80">{order.shippingInfo.address}, {order.shippingInfo.city}</p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-64 space-y-4">
                                        <div className="bg-background p-6 rounded-2xl text-white">
                                            <p className="text-white/60 text-xs mb-1">Total Amount</p>
                                            <p className="text-2xl font-bold">Rs. {order.total}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {order.status === 'pending' && (
                                                <button
                                                    onClick={() => updateStatus(order.id, 'shipped')}
                                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Package className="w-4 h-4" /> Ship
                                                </button>
                                            )}
                                            {order.status === 'shipped' && (
                                                <button
                                                    onClick={() => updateStatus(order.id, 'delivered')}
                                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <CheckCircle className="w-4 h-4" /> Deliver
                                                </button>
                                            )}
                                            <button
                                                onClick={() => updateStatus(order.id, 'cancelled')}
                                                className="p-3 bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-xl transition-colors"
                                                title="Cancel Order"
                                            >
                                                <XCircle className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Items detail */}
                                <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-slate-50 pt-4 mt-auto">
                                    <div className="flex flex-wrap gap-4">
                                        {order.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs bg-slate-50 px-3 py-1 rounded-lg">
                                                <span className="font-bold text-foreground">{item.quantity}x</span>
                                                <span className="text-slate-600">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
