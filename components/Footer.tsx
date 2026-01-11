import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#002B36] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Navegación Superior */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base font-medium tracking-wide">
                    <Link href="/" className="hover:text-primary transition-colors">
                        INICIO
                    </Link>
                    <Link href="/nosotros" className="hover:text-primary transition-colors">
                        NOSOTROS
                    </Link>
                    <Link href="/servicios" className="hover:text-primary transition-colors">
                        SERVICIOS
                    </Link>
                    <Link href="/galeria" className="hover:text-primary transition-colors">
                        GALERÍAS
                    </Link>
                    <Link href="/#cotizar" className="hover:text-primary transition-colors">
                        CONTACTO
                    </Link>
                </div>

                {/* 2. Contenido Central (Logo & Contacto) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">

                    {/* Columna Izquierda: Logo y Redes */}
                    <div className="flex flex-col items-center md:items-end md:pr-12 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0">
                        <Link href="/" className="mb-6">
                            <span className="text-3xl font-bold font-[family-name:var(--font-playfair)]">
                                decorlesni
                            </span>
                        </Link>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Información de Contacto */}
                    <div className="flex flex-col items-center md:items-start md:pl-4 space-y-4 text-gray-300 text-sm md:text-base">
                        <div className="font-semibold text-white tracking-widest uppercase mb-1">
                            DecorLesni Eventos
                        </div>

                        <div className="flex items-start gap-3 max-w-xs text-center md:text-left">
                            <MapPin className="text-primary mt-1 shrink-0" size={18} />
                            <span>
                                De los semáforos del Ministerio del Interior, <br />
                                4c. al Norte, 4c. al Oeste. Managua.
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="text-primary shrink-0" size={18} />
                            <span>+505 7745 8725</span>
                        </div>
                    </div>
                </div>

                {/* 3. Copyright */}
                <div className="text-center text-xs text-gray-500 pt-8 border-t border-white/10">
                    &copy; {new Date().getFullYear()} DecorLesni. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
