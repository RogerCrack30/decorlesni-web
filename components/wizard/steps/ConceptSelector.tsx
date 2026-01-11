"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, User, Palette } from "lucide-react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { kidThemes, eleganceThemes } from "@/data/themes";

export default function ConceptSelector() {
    const { eventType, setTheme, nextStep, theme: selectedTheme, customTheme } = useQuoteStore();
    const [inputValue, setInputValue] = useState(customTheme);

    const isInfantil = eventType === "infantil";

    // Encontrar el tema seleccionado actual para obtener su galería
    const currentList = isInfantil ? kidThemes : eleganceThemes;
    const activeThemeData = currentList.find(t => t.id === selectedTheme);

    const handleSelect = (id: string) => {
        setTheme(id, "");
        setInputValue("");
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setTheme("custom", e.target.value);
    };

    const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        setTheme(selectedTheme || "custom", e.target.value);
    }

    const isValid = selectedTheme && (selectedTheme !== "custom" || inputValue.trim().length > 0);

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center mb-2 font-[family-name:var(--font-playfair)] text-gray-800">
                {isInfantil ? "¿Qué personaje le gusta al cumpleañero?" : "¿Qué estilo tienes en mente?"}
            </h2>
            <p className="text-center text-gray-500 mb-8">
                Selecciona una de nuestras opciones populares o cuéntanos tu idea.
            </p>

            {/* CASE A: INFANTIL */}
            {isInfantil && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {kidThemes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => handleSelect(t.id)}
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 hover:shadow-md
                ${selectedTheme === t.id ? "border-primary bg-yellow-50" : "border-gray-200 hover:border-primary/50"}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <User size={24} />
                            </div>
                            <span className="font-medium text-gray-700">{t.label}</span>
                        </button>
                    ))}

                    {/* Opción Personalizada */}
                    <div className={`col-span-2 md:col-span-1 p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3
            ${selectedTheme === "custom" ? "border-primary bg-yellow-50" : "border-gray-200"}`}
                    >
                        <span className="font-medium text-gray-700">¿Otro personaje?</span>
                        <input
                            type="text"
                            placeholder="Escribe el nombre..."
                            value={selectedTheme === "custom" ? inputValue : ""}
                            onChange={handleCustomChange}
                            onFocus={() => setTheme("custom", inputValue)}
                            className="w-full text-sm p-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>
            )}

            {/* CASE B: ELEGANTE (Boda, XV, Corp) */}
            {!isInfantil && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {eleganceThemes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleSelect(t.id)}
                                className={`p-6 text-left rounded-xl border-2 transition-all hover:shadow-md
                  ${selectedTheme === t.id ? "border-primary bg-yellow-50" : "border-gray-200 hover:border-primary/50"}`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Palette className={`${selectedTheme === t.id ? 'text-primary' : 'text-gray-400'}`} />
                                    <h3 className="font-bold text-lg text-gray-800">{t.label}</h3>
                                </div>
                                <p className="text-sm text-gray-500">{t.desc}</p>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cuéntanos más detalles (colores, ideas específicas...):
                        </label>
                        <textarea
                            rows={3}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="Ej: Quiero que predomine el color dorado y blanco..."
                            value={inputValue}
                            onChange={handleDetailsChange}
                        />
                    </div>
                </div>
            )}

            {/* PRUEBA SOCIAL / INSPIRACIÓN */}
            <AnimatePresence mode="wait">
                {activeThemeData && activeThemeData.gallery && activeThemeData.gallery.length > 0 && (
                    <motion.div
                        key={selectedTheme}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="mt-8 border-t border-gray-100 pt-8"
                    >
                        <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                            <Sparkles size={18} />
                            <h3>Inspiración Real ✨</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            Mira algunos de nuestros montajes anteriores con estilo <span className="font-semibold text-gray-700">{activeThemeData.label}</span>:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {activeThemeData.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="rounded-xl overflow-hidden h-40 shadow-sm border border-gray-100 group"
                                >
                                    <img
                                        src={img}
                                        alt={`Ejemplo ${activeThemeData.label} ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botón Siguiente */}
            <div className="mt-10 flex justify-end">
                <button
                    onClick={nextStep}
                    disabled={!isValid}
                    className={`group flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all
            ${isValid
                            ? "bg-primary text-white hover:bg-yellow-600 shadow-lg hover:shadow-primary/30"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                >
                    Siguiente: Elegir Mobiliario
                    <ArrowRight className={`h-5 w-5 ${isValid ? "group-hover:translate-x-1 transition-transform" : ""}`} />
                </button>
            </div>
        </div>
    );
}
