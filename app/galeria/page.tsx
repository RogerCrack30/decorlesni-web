"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample Data (Replace with real refined photos later)
const photos = [
    { id: 1, type: "boda", src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop" },
    { id: 2, type: "infantil", src: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=800&auto=format&fit=crop" },
    { id: 3, type: "xv", src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop" },
    { id: 4, type: "boda", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" },
    { id: 5, type: "corporativo", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
    { id: 6, type: "infantil", src: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=800&auto=format&fit=crop" },
    { id: 7, type: "boda", src: "https://images.unsplash.com/photo-1507915977619-6ccfe8003a12?q=80&w=800&auto=format&fit=crop" },
    { id: 8, type: "infantil", src: "https://images.unsplash.com/photo-1557007557-0a257ae20790?q=80&w=800&auto=format&fit=crop" },
    { id: 9, type: "xv", src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" },
];

const categories = [
    { id: "all", label: "Todo" },
    { id: "boda", label: "Bodas" },
    { id: "infantil", label: "Infantiles" },
    { id: "xv", label: "XV Años" },
    { id: "corporativo", label: "Corporativos" },
];

export default function GalleryPage() {
    const [filter, setFilter] = useState("all");

    const filteredPhotos = filter === "all"
        ? photos
        : photos.filter(p => p.type === filter);

    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            {/* Header */}
            <section className="bg-white pt-20 pb-10 px-4 text-center border-b border-gray-100">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] mb-4">
                    Nuestra Galería
                </h1>
                <p className="text-gray-500 mb-8">Momentos inolvidables capturados en imágenes</p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                                ${filter === cat.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-[500px]">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {filteredPhotos.map((photo) => (
                                <motion.div
                                    layout
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative aspect-square rounded-xl overflow-hidden shadow-md group"
                                >
                                    <img
                                        src={photo.src}
                                        alt="Evento DecorLesni"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
