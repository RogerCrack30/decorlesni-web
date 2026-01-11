"use client";

import { useEffect } from "react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { generateWhatsAppLink } from "@/lib/whatsappGenerator";
import { Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function OrderSummary() {
    const { eventType, theme, customTheme, cart, getTotalPrice } = useQuoteStore();

    const totalPrice = getTotalPrice();
    const themeDisplay = theme === 'custom' ? customTheme : theme;

    useEffect(() => {
        // Disparar confeti al montar el componente
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const handleWhatsAppClick = () => {
        const link = generateWhatsAppLink({
            eventType,
            theme,
            customTheme,
            cart,
            totalPrice
        });
        window.open(link, '_blank');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-800">
                    ¡Tu Cotización está Lista!
                </h2>
                <p className="text-gray-500 mt-2">
                    Revisa los detalles antes de enviar a nuestro equipo.
                </p>
            </div>

            <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm">
                {/* Header del Recibo */}
                <div className="border-b border-dashed border-gray-300 pb-6 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block text-gray-500">Tipo de Evento</span>
                            <span className="font-semibold text-gray-900 capitalize">{eventType}</span>
                        </div>
                        <div className="text-right">
                            <span className="block text-gray-500">Temática / Estilo</span>
                            <span className="font-semibold text-gray-900 capitalize">{themeDisplay || "Por definir"}</span>
                        </div>
                    </div>
                </div>

                {/* Tabla de Productos */}
                <div className="space-y-4 mb-6">
                    <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">Desglose del Pedido</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="py-2 px-3 text-left rounded-l-lg">Producto</th>
                                    <th className="py-2 px-3 text-center">Cant.</th>
                                    <th className="py-2 px-3 text-right">Precio</th>
                                    <th className="py-2 px-3 text-right rounded-r-lg">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {cart.map((item) => (
                                    <tr key={item.product.id}>
                                        <td className="py-3 px-3">
                                            <div className="font-medium text-gray-900">{item.product.name}</div>
                                        </td>
                                        <td className="py-3 px-3 text-center text-gray-600">{item.quantity}</td>
                                        <td className="py-3 px-3 text-right text-gray-600">${item.product.price.toFixed(2)}</td>
                                        <td className="py-3 px-3 text-right font-medium text-gray-900">
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Total Final */}
                <div className="border-t border-gray-200 pt-6 flex flex-col items-end">
                    <div className="flex items-center gap-4 text-2xl font-bold font-[family-name:var(--font-playfair)]">
                        <span className="text-gray-500 text-lg">Total Estimado:</span>
                        <span className="text-primary">${totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 max-w-xs text-right">
                        * Precios sujetos a cambios. Disponibilidad y costos de transporte se verifican al contactar.
                    </p>
                </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[#25D366]/40 transition-all transform hover:-translate-y-1 flex items-center gap-3"
                >
                    <Send size={24} />
                    Enviar Cotización por WhatsApp
                </button>
            </div>

        </div>
    );
}
