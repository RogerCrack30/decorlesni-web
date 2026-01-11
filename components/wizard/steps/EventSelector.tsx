"use client";

import { motion } from "framer-motion";
import { useQuoteStore } from "@/store/useQuoteStore";

const events = [
    {
        id: "boda",
        label: "Boda & Matrimonio",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "xv",
        label: "15 Años",
        image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "infantil",
        label: "Fiesta Infantil",
        image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "corporativo",
        label: "Evento Corporativo",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
] as const;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function EventSelector() {
    const setEventType = useQuoteStore((state: any) => state.setEventType);

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center mb-8 font-[family-name:var(--font-playfair)] text-gray-800">
                ¿Qué tipo de evento estás planeando?
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {events.map((event) => (
                    <motion.button
                        key={event.id}
                        variants={item}
                        onClick={() => setEventType(event.id)}
                        className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        {/* Background Image with Hover Zoom */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${event.image}')` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                            <span className="block text-xl font-semibold text-white font-[family-name:var(--font-playfair)]">
                                {event.label}
                            </span>
                            <span className="mt-2 block text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Seleccionar →
                            </span>
                        </div>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
}
