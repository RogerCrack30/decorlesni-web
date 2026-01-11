"use client";

import { useState } from "react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { products, Product } from "@/data/products";
import { Minus, Plus } from "lucide-react";

type Category = 'mobiliario' | 'manteleria' | 'accesorios';

export default function FurnitureSelector() {
    const [activeTab, setActiveTab] = useState<Category>('mobiliario');
    const { cart, addItem, removeItem } = useQuoteStore();

    const filteredProducts = products.filter(p => p.category === activeTab);

    const getQuantity = (productId: string) => {
        const item = cart.find((i: { product: { id: string }, quantity: number }) => i.product.id === productId);
        return item ? item.quantity : 0;
    };

    const tabs: { id: Category; label: string }[] = [
        { id: 'mobiliario', label: 'Mobiliario' },
        { id: 'manteleria', label: 'Mantelería' },
        { id: 'accesorios', label: 'Accesorios' },
    ];

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center mb-6 font-[family-name:var(--font-playfair)] text-gray-800">
                Arma tu paquete
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 
                            ${activeTab === tab.id
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                    const quantity = getQuantity(product.id);
                    return (
                        <div
                            key={product.id}
                            className={`group rounded-xl overflow-hidden border transition-all duration-300 bg-white
                                ${quantity > 0 ? "border-primary shadow-lg ring-1 ring-primary" : "border-gray-200 hover:shadow-md"}`}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                                    <span className="text-sm font-semibold text-primary">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                {/* Quantity Control */}
                                <div className="mt-4 flex items-center justify-between bg-gray-50 rounded-lg p-1">
                                    <button
                                        onClick={() => quantity > 0 && removeItem(product.id)}
                                        disabled={quantity === 0}
                                        className="p-2 text-gray-500 hover:text-red-500 disabled:opacity-30 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>

                                    <span className={`font-semibold w-8 text-center ${quantity > 0 ? "text-gray-900" : "text-gray-400"}`}>
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => addItem(product)}
                                        className="p-2 text-gray-500 hover:text-green-600 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
