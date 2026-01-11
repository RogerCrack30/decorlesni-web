export interface ThemeOption {
    id: string;
    label: string;
    desc?: string; // Opcional, solo para estilos elegantes
    gallery: string[];
}

export const kidThemes: ThemeOption[] = [
    {
        id: "mickey",
        label: "Mickey & Minnie",
        gallery: [
            "https://images.unsplash.com/photo-1579294572237-64010373dfd7?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543881373-b26a19f2913e?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "princesas",
        label: "Princesas",
        gallery: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "superheros",
        label: "Superhéroes",
        gallery: [
            "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560964175-99d949cf0622?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "granja",
        label: "Granja",
        gallery: [
            "https://images.unsplash.com/photo-1628151276099-2e11ac5877f8?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1457805177242-7c154465d21a?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "dinosaurios",
        label: "Dinosaurios",
        gallery: [
            "https://images.unsplash.com/photo-1569588661706-5381aa0db80f?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582234032549-c179262f6b86?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "selva",
        label: "Selva / Safari",
        gallery: [
            "https://images.unsplash.com/photo-1557007557-0a257ae20790?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1561731216-c3a4d994e8d6?q=80&w=1080&auto=format&fit=crop"
        ]
    },
];

export const eleganceThemes: ThemeOption[] = [
    {
        id: "clasico",
        label: "Clásico / Elegante",
        desc: "Tonos blancos, dorados y cristal.",
        gallery: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "boho",
        label: "Boho / Rústico",
        desc: "Madera, flores secas y tonos tierra.",
        gallery: [
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "jardin",
        label: "Jardín / Floral",
        desc: "Mucha vegetación y flores frescas.",
        gallery: [
            "https://images.unsplash.com/photo-1507915977619-6ccfe8003a12?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1080&auto=format&fit=crop"
        ]
    },
    {
        id: "moderno",
        label: "Moderno / Neón",
        desc: "Luces, acrílico y tendencias actuales.",
        gallery: [
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1478146896981-b80c463b4372?q=80&w=1080&auto=format&fit=crop"
        ]
    },
];
