"use client";

import { useQuoteStore } from "@/store/useQuoteStore";
import { AnimatePresence, motion } from "framer-motion";
import EventSelector from "./steps/EventSelector";
import ConceptSelector from "./steps/ConceptSelector";
import FurnitureSelector from "./steps/FurnitureSelector";
import CartSummary from "./CartSummary";
import OrderSummary from "./steps/OrderSummary";

export default function WizardContainer() {
    const { step, prevStep, reset, setStep } = useQuoteStore();

    return (
        <section id="cotizar" className="relative z-20 px-4 pb-20 sm:px-6 lg:px-8">
            <div className="-mt-24 mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-900/5 sm:p-12 overflow-hidden">

                {/* Step Indicator */}
                <div className="mb-8 flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <button
                        onClick={() => step > 1 && setStep(1)}
                        disabled={step === 1}
                        className={`transition-colors ${step >= 1 ? "text-primary font-bold hover:underline" : ""}`}
                    >
                        1. Evento
                    </button>
                    <span>→</span>
                    <button
                        onClick={() => step > 2 && setStep(2)}
                        disabled={step <= 2}
                        className={`transition-colors ${step >= 2 ? "text-primary font-bold hover:underline" : ""}`}
                    >
                        2. Concepto
                    </button>
                    <span>→</span>
                    <button
                        onClick={() => step > 3 && setStep(3)}
                        disabled={step <= 3}
                        className={`transition-colors ${step >= 3 ? "text-primary font-bold hover:underline" : ""}`}
                    >
                        3. Mobiliario
                    </button>
                </div>

                {/* Note: I'm using a direct prevStep implementation in buttons, 
                    but for correct random access navigation we'd usually use setStep action in store */}

                {/* Dynamic Step Content with Animation */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && <EventSelector />}

                            {step === 2 && (
                                <div>
                                    <button
                                        onClick={prevStep}
                                        className="mb-4 text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        ← Volver atrás
                                    </button>
                                    <ConceptSelector />
                                </div>
                            )}

                            {step === 3 && (
                                <div>
                                    <button
                                        onClick={prevStep}
                                        className="mb-4 text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        ← Volver atrás
                                    </button>
                                    <FurnitureSelector />
                                </div>
                            )}

                            {step === 4 && (
                                <div>
                                    <button
                                        onClick={prevStep}
                                        className="mb-4 text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        ← Volver a editar
                                    </button>
                                    <OrderSummary />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Floating Cart Summary - Only show in relevant steps if user has items */}
                {step === 3 && <CartSummary />}

            </div>
        </section>
    );
}
