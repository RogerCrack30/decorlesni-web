
import { Product } from "./products";

export interface Question {
    id: string;
    label: string;
    type: "text" | "select" | "radio" | "number";
    options?: string[];
    placeholder?: string;
    required?: boolean;
}

export interface EventConfig {
    id: string;
    questions: Question[];
    suggestedServices: string[]; // IDs de servicios/productos sugeridos
    commonExtras: string[];
}

export const eventConfigs: Record<string, EventConfig> = {
    infantil: {
        id: "infantil",
        questions: [
            {
                id: "age",
                label: "¿Qué edad cumple el festejado/a?",
                type: "number",
                placeholder: "Ej: 5",
                required: true
            },
            {
                id: "gender",
                label: "¿Festejado?",
                type: "radio",
                options: ["Niño", "Niña", "Ambos"],
                required: true
            },
            {
                id: "themeKeyword",
                label: "¿Qué personaje o temática le gusta?",
                type: "text",
                placeholder: "Ej: Spiderman, Frozen, Dinosaurios...",
                required: true
            },
            {
                id: "cake",
                label: "¿Necesitas que incluyamos el pastel?",
                type: "radio",
                options: ["Sí, incluir pastel", "No, ya lo tengo"],
                required: false
            }
        ],
        suggestedServices: ["decoracion-tematica", "arco-globos", "backdrop", "centros-mesa"],
        // Nota: Estos IDs deben coincidir o mapearse a tus productos reales en products.ts. 
        // Asumiremos que crearemos lógica para seleccionarlos o que existen.
        commonExtras: ["globos-extra", "candy-bar", "iluminacion", "transporte"]
    },
    xv: {
        id: "xv",
        questions: [
            {
                id: "style",
                label: "Estilo del evento",
                type: "select",
                options: ["Elegante / Clásico", "Glam / Brillo", "Moderno / Neón", "Temático"],
                required: true
            },
            {
                id: "colors",
                label: "¿Cuáles son los colores principales?",
                type: "text",
                placeholder: "Ej: Dorado y palo rosa",
                required: true
            },
            {
                id: "photoshoot",
                label: "¿Incluye sesión de fotos previa?",
                type: "radio",
                options: ["Sí", "No"],
                required: false
            }
        ],
        suggestedServices: ["backdrop-premium", "mesa-principal", "letras-gigantes", "iluminacion-deco"],
        commonExtras: ["alfombra", "sillas-tiffany", "pantalla-led"]
    },
    boda: {
        id: "boda",
        questions: [
            {
                id: "ceremonyType",
                label: "Tipo de ceremonia",
                type: "select",
                options: ["Civil", "Religiosa", "Simbólica", "Solo Recepción"],
                required: true
            },
            {
                id: "style",
                label: "Estilo de la boda",
                type: "select",
                options: ["Clásico", "Romántico", "Minimalista", "Vintage", "Campestre"],
                required: true
            },
            {
                id: "guests",
                label: "Número estimado de invitados",
                type: "number",
                placeholder: "Ej: 100",
                required: true
            }
        ],
        suggestedServices: ["decoracion-mesa-principal", "centros-mesa-floral", "backdrop-elegante"],
        commonExtras: ["arco-floral", "letras-love", "iluminacion-ambiental", "pista-baile"]
    },
    corporativo: {
        id: "corporativo",
        questions: [
            {
                id: "eventType",
                label: "Tipo de evento corporativo",
                type: "select",
                options: ["Lanzamiento de producto", "Conferencia", "Fiesta de fin de año", "Activación de marca"],
                required: true
            },
            {
                id: "companyName",
                label: "Nombre de la empresa / Marca",
                type: "text",
                placeholder: "Ej: DecorLesni Corp",
                required: true
            },
            {
                id: "tone",
                label: "¿El tono del evento es?",
                type: "radio",
                options: ["Formal", "Casual / Relajado"],
                required: true
            }
        ],
        suggestedServices: ["backdrop-corporativo", "mesa-registro", "mobiliario-basico", "branding"],
        commonExtras: ["pantallas", "audio-profesional", "coffee-break"]
    },
    otros: {
        id: "otros",
        questions: [
            {
                id: "description",
                label: "Cuéntanos qué tipo de celebración es",
                type: "text",
                placeholder: "Ej: Bautizo, Primera Comunión, Aniversario...",
                required: true
            },
            {
                id: "ideas",
                label: "¿Tienes alguna idea en mente?",
                type: "text",
                placeholder: "Colores, temática, etc...",
                required: false
            }
        ],
        suggestedServices: [],
        commonExtras: []
    }
};
