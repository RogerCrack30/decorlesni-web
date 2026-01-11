import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-dark-nav shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                            decorlesni
                        </Link>
                    </div>

                    {/* CTA Button (Centered/Right) */}
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
