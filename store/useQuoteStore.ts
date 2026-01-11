import { create } from 'zustand';
import { Product } from '@/data/products';

export interface CartItem {
    product: Product;
    quantity: number;
}

type EventType = 'boda' | 'infantil' | 'xv' | 'corporativo' | null;

interface QuoteState {
    step: number;
    eventType: EventType;
    theme: string | null;
    customTheme: string;
    cart: CartItem[];
    eventDetails: Record<string, any>;
    setStep: (step: number) => void;
    setEventType: (type: EventType) => void;
    setEventDetails: (details: Record<string, any>) => void;
    setTheme: (theme: string, customTheme?: string) => void;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
}

export const useQuoteStore = create<QuoteState>((set, get) => ({
    step: 1,
    eventType: null,
    theme: null,
    customTheme: '',
    eventDetails: {},
    cart: [],

    setStep: (step) => set({ step }),

    setEventType: (type) => set((state) => ({
        eventType: type,
        step: state.step + 1
    })),

    setEventDetails: (details) => set((state) => ({
        eventDetails: { ...state.eventDetails, ...details }
    })),

    setTheme: (theme, customTheme = '') => set({ theme, customTheme }),

    addItem: (product) => set((state) => {
        const existing = state.cart.find(item => item.product.id === product.id);
        if (existing) {
            return {
                cart: state.cart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }
        return { cart: [...state.cart, { product, quantity: 1 }] };
    }),

    removeItem: (productId) => set((state) => {
        const existing = state.cart.find(item => item.product.id === productId);
        if (existing && existing.quantity > 1) {
            return {
                cart: state.cart.map(item =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        }
        return { cart: state.cart.filter(item => item.product.id !== productId) };
    }),

    clearCart: () => set({ cart: [] }),

    getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },

    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
    reset: () => set({ step: 1, eventType: null, theme: null, customTheme: '', cart: [] }),
}));
