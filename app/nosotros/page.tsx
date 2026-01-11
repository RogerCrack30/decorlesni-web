import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
                        Nuestra Historia
                    </h1>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                        Pasión por los detalles y amor por las celebraciones.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image/Team */}
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                                alt="Equipo DecorLesni"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 font-[family-name:var(--font-playfair)]">
                                Creando magia desde el primer día
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                En <strong>DecorLesni</strong>, no solo decoramos eventos; contamos historias. Fundada con la visión de transformar espacios ordinarios en escenarios de ensueño, nos hemos dedicado a perfeccionar el arte de la celebración.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Entendemos que cada evento es único, ya sea una boda íntima, una fiesta infantil llena de color o un evento corporativo de alto nivel. Nuestro compromiso es quitarte el estrés de la planificación para que tú solo te preocupes por disfrutar.
                            </p>

                            <div className="pt-4 space-y-3">
                                {[
                                    "Asesoría personalizada en cada paso.",
                                    "Diseños únicos y tendencias actuales.",
                                    "Compromiso con la puntualidad y la calidad.",
                                    "Pasión por los pequeños detalles."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="text-primary h-5 w-5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Values Section */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-2">5+</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Años de Experiencia</p>
                        </div>
                        <div className="p-6 border-l-0 md:border-l border-r-0 md:border-r border-gray-100">
                            <h3 className="text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-2">200+</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Eventos Realizados</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-2">100%</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Clientes Felices</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
