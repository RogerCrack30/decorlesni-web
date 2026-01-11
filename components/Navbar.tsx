import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/gallery/logo.png"
                                alt="DecorLesni Logo"
                                width={180}
                                height={80}
                                className="h-20 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary transition-colors text-sm font-bold tracking-wide">
                            INICIO
                        </Link>
                        <Link href="/nosotros" className="text-gray-700 hover:text-primary transition-colors text-sm font-bold tracking-wide">
                            NOSOTROS
                        </Link>
                        <Link href="/servicios" className="text-gray-700 hover:text-primary transition-colors text-sm font-bold tracking-wide">
                            SERVICIOS
                        </Link>
                        <Link href="/galeria" className="text-gray-700 hover:text-primary transition-colors text-sm font-bold tracking-wide">
                            GALERÍAS
                        </Link>
                        <Link href="/#cotizar" className="text-gray-700 hover:text-primary transition-colors text-sm font-bold tracking-wide">
                            CONTACTO
                        </Link>
                    </div>

                    {/* CTA Button (Right) */}
                    <div>
                        <Link
                            href="#cotizar"
                            className="bg-primary text-primary-foreground hover:bg-yellow-600 transition-colors duration-300 px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Cotizar Ahora
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
