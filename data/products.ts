export interface Product {
    id: string;
    name: string;
    category: 'mobiliario' | 'manteleria' | 'accesorios';
    price: number;
    image: string;
}

export const products: Product[] = [
    // Mobiliario
    {
        id: 'silla-tiffany',
        name: 'Silla Tiffany Dorada',
        category: 'mobiliario',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1549488352-7d2949c8f921?q=80&w=600&auto=format&fit=crop',
    },
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

    // Mantelería
    {
        id: 'mantel-satin',
        name: 'Mantel Satín Blanco',
        category: 'manteleria',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1563297621-4f18b335606d?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'camino-mesa',
        name: 'Camino de Mesa Dorado',
        category: 'manteleria',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1544673628-984bb3e945c8?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'servilletas',
        name: 'Set Servilletas Tela',
        category: 'manteleria',
        price: 1.50,
        image: 'https://images.unsplash.com/photo-1603095906788-b271d70a3c4b?q=80&w=600&auto=format&fit=crop',
    },

    // Accesorios
    {
        id: 'arco-globos',
        name: 'Arco de Globos Organic',
        category: 'accesorios',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1598468792619-33dd420c2957?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'centro-mesa',
        name: 'Centro de Mesa Floral',
        category: 'accesorios',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1532053676778-d1421715494c?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'letras-gigantes',
        name: 'Letras Gigantes (LOVE)',
        category: 'accesorios',
        price: 80.00,
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
    },
];
