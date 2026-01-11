"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Image as ImageIcon } from "lucide-react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { eventConfigs } from "@/data/eventConfig";
import { kidThemes, eleganceThemes } from "@/data/themes";

export default function EventDetailsStep() {
    const { eventType, setEventDetails, nextStep, eventDetails } = useQuoteStore();
    const config = eventType ? eventConfigs[eventType] : eventConfigs["otros"];

    // Estado local para manejar las respuestas del formulario
    const [answers, setAnswers] = useState<Record<string, any>>(eventDetails || {});

    // Estado para la galería sugerida (búsqueda inteligente)
    const [suggestedGallery, setSuggestedGallery] = useState<string[]>([]);
    const [detectedThemeName, setDetectedThemeName] = useState<string>("");

    // Efecto para buscar galería cuando cambia el input de temática
    useEffect(() => {
        if (!answers.themeKeyword) {
            setSuggestedGallery([]);
            return;
        }

        const keyword = String(answers.themeKeyword).toLowerCase();

        // Buscar en temas infantiles
        const foundKidTheme = kidThemes.find(t =>
            t.keywords?.some(k => keyword.includes(k)) ||
            t.label.toLowerCase().includes(keyword)
        );

        if (foundKidTheme) {
            setSuggestedGallery(foundKidTheme.gallery);
            setDetectedThemeName(foundKidTheme.label);
            return;
        }

        // Buscar en temas elegantes (por si acaso)
        const foundElegantTheme = eleganceThemes.find(t =>
            t.label.toLowerCase().includes(keyword)
        );

        if (foundElegantTheme) {
            setSuggestedGallery(foundElegantTheme.gallery);
            setDetectedThemeName(foundElegantTheme.label);
            return;
        }

        // Si no encuentra nada explícito
        setSuggestedGallery([]);

    }, [answers.themeKeyword]);


    const handleChange = (id: string, value: any) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const handleNext = () => {
        setEventDetails(answers);
        nextStep();
    };

    // Validación básica: todos los campos requeridos deben tener valor
    const isValid = config.questions.every(q => {
        if (!q.required) return true;
        return answers[q.id] && String(answers[q.id]).trim() !== "";
    });

    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 font-[family-name:var(--font-playfair)] text-gray-800">
                Detalles del Evento
            </h2>
            <p className="text-center text-gray-500 mb-10">
                Ayúdanos a visualizar lo que necesitas
            </p>

            <div className="space-y-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                {config.questions.map((q) => (
                    <div key={q.id} className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">
                            {q.label} {q.required && <span className="text-primary">*</span>}
                        </label>

                        {q.type === "text" && (
                            <input
                                type="text"
                                placeholder={q.placeholder}
                                value={answers[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full text-gray-900 bg-white placeholder:text-gray-400"
                            />
                        )}

                        {q.type === "number" && (
                            <input
                                type="number"
                                placeholder={q.placeholder}
                                value={answers[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full md:w-1/3 text-gray-900 bg-white placeholder:text-gray-400"
                            />
                        )}

                        {q.type === "select" && (
                            <select
                                value={answers[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full text-gray-900 bg-white"
                            >
                                <option value="">Selecciona una opción...</option>
                                {q.options?.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        )}

                        {q.type === "radio" && (
                            <div className="flex flex-wrap gap-4">
                                {q.options?.map(opt => (
                                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${answers[q.id] === opt ? "border-primary bg-primary" : "border-gray-400 group-hover:border-primary"}`}>
                                            {answers[q.id] === opt && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                        <span className={`text-sm ${answers[q.id] === opt ? "font-medium text-gray-900" : "text-gray-600"}`}>
                                            {opt}
                                        </span>
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value={opt}
                                            checked={answers[q.id] === opt}
                                            onChange={() => handleChange(q.id, opt)}
                                            className="hidden"
                                        />
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* GALERÍA DINÁMICA (WOW EFFECT) */}
            <AnimatePresence>
                {suggestedGallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 overflow-hidden"
                    >
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                                <Sparkles size={20} />
                                <h3>¡Excelente elección! Así lucen nuestros eventos de {detectedThemeName}:</h3>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {suggestedGallery.slice(0, 4).map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="aspect-square relative rounded-xl overflow-hidden shadow-sm"
                                    >
                                        <img src={img} alt="Inspiración" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-xs text-center text-primary/70 mt-3 font-medium">
                                *Imágenes reales de eventos DecorLesni
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <div className="mt-10 flex justify-end">
                <button
                    onClick={handleNext}
                    disabled={!isValid}
                    className={`group flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all
            ${isValid
                            ? "bg-primary text-white hover:bg-pink-600 shadow-lg hover:shadow-primary/30"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                >
                    Ver Servicios Recomendados
                    <ArrowRight className={`h-5 w-5 ${isValid ? "group-hover:translate-x-1 transition-transform" : ""}`} />
                </button>
            </div>
        </div>
    );
}
