"use client";

import { useQuoteStore } from "@/store/useQuoteStore";
import { AnimatePresence, motion } from "framer-motion";
import EventSelector from "./steps/EventSelector";
import EventDetailsStep from "./steps/EventDetailsStep"; // Nuevo
import ServicesStep from "./steps/ServicesStep";         // Nuevo
import OrderSummary from "./steps/OrderSummary";
import CartSummary from "./CartSummary"; // Floating cart

export default function WizardContainer() {
    const { step, setStep, prevStep } = useQuoteStore();

    const steps = [
        { number: 1, title: "Evento", component: EventSelector },
        { number: 2, title: "Detalles", component: EventDetailsStep },
        { number: 3, title: "Servicios", component: ServicesStep },
        { number: 4, title: "Resumen", component: OrderSummary },
    ];

    const currentStepIndex = step - 1;
    // Fallback simple: si el paso es inválido, mostrar el primero
    const CurrentStepComponent = steps[currentStepIndex]?.component || EventSelector;

    return (
        <section id="cotizar" className="relative z-20 px-4 pb-20 sm:px-6 lg:px-8 py-20 bg-gray-50 from-gray-50 to-white">
            <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-900/5 sm:p-12 overflow-hidden min-h-[600px]">

                {/* --- Step Indicator (Progress Bar) --- */}
                <div className="mb-12 relative max-w-3xl mx-auto">
                    {/* Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full -z-10" />

                    {/* Active Line (Animated) */}
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    />

                    <div className="flex justify-between w-full">
                        {steps.map((s) => {
                            const isActive = step >= s.number;
                            const isCurrent = step === s.number;

                            return (
                                <div key={s.number} className="flex flex-col items-center gap-2 relative">
                                    <button
                                        onClick={() => s.number < step && setStep(s.number)}
                                        disabled={s.number >= step}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 z-10 border-4
                                            ${isActive
                                                ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/30"
                                                : "bg-white border-gray-200 text-gray-400"}`}
                                    >
                                        {isActive ? (isCurrent ? s.number : "✓") : s.number}
                                    </button>
                                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 absolute -bottom-6 whitespace-nowrap
                                        ${isActive ? "text-primary" : "text-gray-400"}`}>
                                        {s.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* --- Step Content --- */}
                <div className="relative mt-8">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="absolute top-0 left-0 -mt-14 md:-mt-0 md:-left-8 text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1 z-20"
                        >
                            ← Volver
                        </button>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="min-h-[400px]"
                        >
                            <CurrentStepComponent />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Floating Cart for Step 3 (Services) */}
                {step === 3 && <CartSummary />}

            </div>
        </section>
    );
}
