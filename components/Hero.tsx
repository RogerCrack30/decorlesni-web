import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-[85vh] w-full overflow-hidden">
            {/* Background Image Setup */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')", // Asegúrate de tener este archivo en la carpeta 'public'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] sm:text-6xl lg:text-7xl drop-shadow-lg">
                    Creamos Momentos <span className="text-primary">Inolvidables</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 font-[family-name:var(--font-inter)] sm:text-xl">
                    Eventos Infantiles • Bodas • Quinceaños • Eventos Corporativos
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="#cotizar"
                        className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-yellow-600 hover:shadow-primary/30"
                    >
                        Empezar a Cotizar
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
