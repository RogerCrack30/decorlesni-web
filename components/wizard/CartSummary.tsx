"use client";

import { useQuoteStore } from "@/store/useQuoteStore";
import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CartSummary() {
    const { cart, getTotalPrice, nextStep, clearCart } = useQuoteStore();

    // Calcular items totales (suma de cantidades)
    const totalItems = cart.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
    const totalPrice = getTotalPrice();

    if (totalItems === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-50 md:w-96"
            >
                <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex flex-col gap-3 border border-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/20 p-2 rounded-full">
                                <ShoppingBag className="text-primary h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-400">{totalItems} productos seleccionados</p>
                                <p className="text-lg font-bold text-white">${totalPrice.toFixed(2)}</p>
                            </div>
                        </div>

                        <button
                            onClick={clearCart}
                            className="text-gray-500 hover:text-red-400 transition-colors"
                            title="Vaciar carrito"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <button
                        onClick={nextStep}
                        className="w-full bg-primary hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        Ver Resumen Final
                        <ArrowRight size={18} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
