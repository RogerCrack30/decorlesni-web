
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Imágenes de ejemplo de eventos anteriores (Alta Calidad)
const eventImages = [
    "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=600&auto=format&fit=crop", // Boda Mesa
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop", // Boda Exterior
    "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=600&auto=format&fit=crop", // Fiesta Privada
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", // Boda Elegante
    "https://images.unsplash.com/photo-1478146896981-b80c463b4372?q=80&w=600&auto=format&fit=crop", // Mesa Postres
    "https://images.unsplash.com/photo-1507915977619-6ccfe8003a12?q=80&w=600&auto=format&fit=crop", // Decoración Floral
];

export default function EventGallery() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="text-center mb-8 px-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                    Nuestra Experiencia
                </p>
                <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                    Momentos unicos que hemos creado
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden mask-fade-sides">
                {/* Degradados laterales para suavizar bordes */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                        x: [0, -100 * eventImages.length], // Mueve el equivalente al ancho de las imágenes
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Velocidad controlada (más segundos = más lento)
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicamos las imágenes para el efecto loop infinito */}
                    {[...eventImages, ...eventImages, ...eventImages].map((src, idx) => (
                        <div
                            key={idx}
                            className="relative min-w-[280px] h-[350px] md:min-w-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]"
                        >
                            <img
                                src={src}
                                alt={`Evento DecorLesni ${idx}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Overlay sutil */}
                            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
