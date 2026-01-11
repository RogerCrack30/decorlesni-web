import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Utensils, Armchair, Music, Palette, Camera } from "lucide-react";

const services = [
    {
        icon: <Palette className="w-8 h-8 text-primary" />,
        title: "Decoración Integral",
        description: "Transformamos cualquier espacio con diseños florales, iluminación ambiental y estructuras personalizadas que reflejan tu estilo."
    },
    {
        icon: <Utensils className="w-8 h-8 text-primary" />,
        title: "Catering & Banquetes",
        description: "Experiencias gastronómicas deliciosas. Desde bocadillos gourmet hasta cenas de gala, nos encargamos de deleitar a tus invitados."
    },
    {
        icon: <Armchair className="w-8 h-8 text-primary" />,
        title: "Alquiler de Mobiliario",
        description: "Contamos con sillas Tiffany, mesas de lujo, salas lounge y mantelería fina. Todo lo necesario para el confort y la elegancia."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "Planificación de Eventos",
        description: "Olvídate del estrés. Nuestro equipo coordina proveedores y tiempos para que tu evento fluya a la perfección sin que muevas un dedo."
    },
    {
        icon: <Camera className="w-8 h-8 text-primary" />,
        title: "Fotografía & Video",
        description: "Capturamos los momentos más emotivos de tu celebración con profesionales que saben cómo contar tu historia visualmente."
    },
    {
        icon: <Music className="w-8 h-8 text-primary" />,
        title: "Entretenimiento & Sonido",
        description: "DJs profesionales, pistas de baile iluminadas y shows en vivo para mantener el ambiente festivo toda la noche."
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            {/* Header */}
            <section className="bg-dark-nav py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6">
                    Nuestros Servicios
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Soluciones completas para eventos inolvidables. Todo lo que necesitas en un solo lugar.
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                            >
                                <div className="mb-6 bg-secondary/50 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 font-[family-name:var(--font-playfair)] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Bottom */}
                    <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 font-[family-name:var(--font-playfair)]">
                            ¿Tienes una idea específica?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Nos encanta personalizar cada detalle. Si buscas algo que no ves aquí, contáctanos y lo haremos realidad.
                        </p>
                        <a
                            href="/#cotizar"
                            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg shadow-primary/30"
                        >
                            Solicitar Cotización Personalizada
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
