
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Imágenes de ejemplo de eventos anteriores (Alta Calidad)
const eventImages = [
    "/gallery/cumple 1.png",
    "/gallery/cumple 2.png",
    "/gallery/cumple 3.jpg",
    "/gallery/cumple 4.jpg",
    "/gallery/cumple 5.png",
    "/gallery/cumple 6.png",
    "/gallery/cumple 7.png",
    "/gallery/cumple 8.jpg",// Decoración Floral
];

export default function EventGallery() {
    return (
        <section className="py-16 bg-[#002B36] overflow-hidden mt-20 border-t-4 border-primary">
            <div className="text-center mb-10 px-4">
                {/* Logo Brand */}
                <div className="mb-6 flex justify-center">
                    <span className="text-4xl font-bold text-white font-[family-name:var(--font-playfair)] tracking-wide">
                        decorlesni
                    </span>
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/90 mb-3">
                    NUESTRO TRABAJO
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    Sonrisas, colores y celebraciones hechas realidad
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden">
                {/* Degradados laterales para suavizar bordes */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#002B36] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#002B36] to-transparent z-10 pointer-events-none" />

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
