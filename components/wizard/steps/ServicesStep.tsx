"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Plus, Star } from "lucide-react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { eventConfigs } from "@/data/eventConfig";
import { products } from "@/data/products";

// Helper para encontrar producto por ID (o slug/keyword)
const findProduct = (idKeyword: string) => {
    // Intenta encontrar coincidencia parcial en ID o Nombre
    return products.find(p =>
        p.id.toLowerCase().includes(idKeyword) ||
        p.name.toLowerCase().replace(/\s/g, '-').includes(idKeyword)
    );
};

export default function ServicesStep() {
    const { eventType, cart, addItem, removeItem, nextStep } = useQuoteStore();
    const config = eventType ? eventConfigs[eventType] : eventConfigs["otros"];

    // Filtrar productos sugeridos y extras basados en la config
    // Como no tenemos IDs exactos aun en products.ts, haremos un "best effort" match
    const recommendedProducts = config.suggestedServices
        .map(id => findProduct(id))
        .filter(p => p !== undefined) as typeof products;

    const extraProducts = products.filter(p =>
        !recommendedProducts.find(rp => rp.id === p.id) &&
        // Opcional: filtrar por categoría si quisiéramos ser más estrictos
        true
    );

    const isInCart = (id: string) => cart.some(item => item.product.id === id);

    const toggleItem = (product: typeof products[0]) => {
        if (isInCart(product.id)) {
            removeItem(product.id);
        } else {
            addItem(product);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 font-[family-name:var(--font-playfair)] text-gray-800">
                Arma tu Paquete Ideal
            </h2>
            <p className="text-center text-gray-500 mb-10">
                Seleccionamos lo esencial para tu tipo de evento. ¡Personalízalo a tu gusto!
            </p>

            {/* SECCIÓN RECOMENDADOS */}
            {recommendedProducts.length > 0 && (
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Te recomendamos incluir (Lo Esencial)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -5 }}
                                className={`relative rounded-xl border-2 overflow-hidden transition-all cursor-pointer
                                    ${isInCart(product.id) ? "border-primary bg-primary/5 shadow-md" : "border-gray-100 bg-white shadow-sm hover:border-gray-200"}`}
                                onClick={() => toggleItem(product)}
                            >
                                <div className="h-40 w-full bg-gray-100 relative">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    {isInCart(product.id) && (
                                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[1px]">
                                            <div className="bg-white text-primary p-2 rounded-full shadow-lg">
                                                <Check size={24} strokeWidth={3} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-800">{product.name}</h4>
                                        <span className="text-primary font-bold">${product.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

                                    <button className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-colors
                                        ${isInCart(product.id) ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                                        {isInCart(product.id) ? "Agregado" : "Agregar al evento"}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* SECCIÓN EXTRAS */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <Plus size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Complementos y Extras</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {extraProducts.slice(0, 8).map((product) => ( // Limitamos a 8 para no saturar
                        <div
                            key={product.id}
                            className={`flex flex-col p-4 rounded-xl border transition-all cursor-pointer
                                    ${isInCart(product.id) ? "border-primary bg-primary/5" : "border-gray-100 bg-white hover:border-gray-300"}`}
                            onClick={() => toggleItem(product)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">${product.price}</p>
                                </div>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors
                                        ${isInCart(product.id) ? "bg-primary border-primary text-white" : "border-gray-300 text-transparent"}`}>
                                    <Check size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex justify-end">
                <button
                    onClick={nextStep}
                    className="group flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-primary text-white hover:bg-pink-600 shadow-lg hover:shadow-primary/30 transition-all"
                >
                    Ver Resumen Final
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
