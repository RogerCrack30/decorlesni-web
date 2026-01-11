import { CartItem } from "@/store/useQuoteStore";

interface QuoteData {
    eventType: string | null;
    theme: string | null;
    customTheme: string;
    cart: CartItem[];
    totalPrice: number;
}

export const generateWhatsAppLink = (data: QuoteData) => {
    const PHONE_NUMBER = "+50577458725"; // Reemplazar con el número real de la empresa

    const eventLabel = data.eventType?.toUpperCase() || "EVENTO";
    const themeLabel = data.theme === 'custom' ? data.customTheme : data.theme;

    let message = `Hola DecorLesni 👋, quiero cotizar este evento:\n\n`;
    message += `📅 *Evento:* ${eventLabel}\n`;
    message += `🎨 *Temática:* ${themeLabel || "No definida"}\n\n`;

    message += `📦 *Mi Pedido:*\n`;

    data.cart.forEach((item) => {
        const subtotal = item.product.price * item.quantity;
        message += `- ${item.quantity}x ${item.product.name} ($${subtotal.toFixed(2)})\n`;
    });

    message += `\n💰 *Total Estimado: $${data.totalPrice.toFixed(2)}*\n\n`;
    message += `Quedo pendiente de confirmar disponibilidad.`;

    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
