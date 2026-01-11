export interface Product {
    id: string;
    name: string;
    category: 'mobiliario' | 'manteleria' | 'accesorios' | 'decoracion' | 'servicios';
    price: number;
    image: string;
    description?: string;
}

export const products: Product[] = [
    // --- INFANTIL & GENERAL ---
    {
        id: 'decoracion-tematica',
        name: 'Decoración Temática Completa',
        category: 'decoracion',
        price: 250.00,
        image: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=600&auto=format&fit=crop',
        description: 'Montaje completo con paneles, figuras y detalles de la temática elegida.'
    },
    {
        id: 'arco-globos',
        name: 'Arco de Globos Orgánico',
        category: 'decoracion',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1598468792619-33dd420c2957?q=80&w=600&auto=format&fit=crop',
        description: 'Diseño moderno con globos de diferentes tamaños y colores.'
    },
    {
        id: 'globos-extra',
        name: 'Bouquet de Globos Helio',
        category: 'accesorios',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1574620058245-8b3d64c12dc9?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'candy-bar',
        name: 'Mobiliario para Candy Bar',
        category: 'mobiliario',
        price: 80.00,
        image: 'https://images.unsplash.com/photo-1623838271052-a8c6606a2468?q=80&w=600&auto=format&fit=crop',
        description: 'Mesas cilindro o carros decorativos para dulces.'
    },
    {
        id: 'centros-mesa',
        name: 'Centros de Mesa Temáticos (x10)',
        category: 'accesorios',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1544130089-8a8c4391e4a1?q=80&w=600&auto=format&fit=crop'
    },

    // --- XV AÑOS & BODAS ---
    {
        id: 'backdrop-premium',
        name: 'Backdrop Premium con Flores',
        category: 'decoracion',
        price: 350.00,
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=600&auto=format&fit=crop',
        description: 'Pared de flores o tela drapeada con estructura elegante.'
    },
    {
        id: 'backdrop-elegante',
        name: 'Backdrop Elegante Bodas',
        category: 'decoracion',
        price: 400.00,
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'mesa-principal',
        name: 'Decoración Mesa Principal',
        category: 'decoracion',
        price: 200.00,
        image: 'https://images.unsplash.com/photo-1478146896981-b80c463b4372?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'decoracion-mesa-principal',
        name: 'Mesa Principal Novios',
        category: 'decoracion',
        price: 250.00,
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'letras-gigantes',
        name: 'Letras Gigantes (XV / Nombre)',
        category: 'decoracion',
        price: 100.00,
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'letras-love',
        name: 'Letras Gigantes LOVE',
        category: 'decoracion',
        price: 100.00,
        image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'silla-tiffany',
        name: 'Silla Tiffany (x10)',
        category: 'mobiliario',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1549488352-7d2949c8f921?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'iluminacion-deco',
        name: 'Paquete Iluminación Decorativa',
        category: 'servicios',
        price: 180.00,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'iluminacion-ambiental',
        name: 'Iluminación Ámbar (Uplighting)',
        category: 'servicios',
        price: 200.00,
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'pista-baile',
        name: 'Pista de Baile Vinil',
        category: 'mobiliario',
        price: 450.00,
        image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'arco-floral',
        name: 'Arco Floral Ceremonia',
        category: 'decoracion',
        price: 300.00,
        image: 'https://images.unsplash.com/photo-1532053676778-d1421715494c?q=80&w=600&auto=format&fit=crop'
    },

    // --- CORPORATIVO ---
    {
        id: 'backdrop-corporativo',
        name: 'Backdrop con Logos (Branding)',
        category: 'servicios',
        price: 280.00,
        image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'mesa-registro',
        name: 'Estación de Registro',
        category: 'mobiliario',
        price: 90.00,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'pantallas',
        name: 'Renta de Pantalla LED 55"',
        category: 'servicios',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'coffee-break',
        name: 'Estación de Café Básica',
        category: 'servicios',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop'
    },

    // --- BASICOS ---
    {
        id: 'mesa-redonda',
        name: 'Mesa Redonda (10 pax)',
        category: 'mobiliario',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'sala-lounge',
        name: 'Sala Lounge Blanca',
        category: 'mobiliario',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff0d91?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'mantel-satin',
        name: 'Mantel Satín Blanco',
        category: 'manteleria',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1563297621-4f18b335606d?q=80&w=600&auto=format&fit=crop',
    }
];
