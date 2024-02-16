import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types/ProductType';

type CartState = {
    cart: ProductType[]
    addToCart: (product: ProductType) => void
    removeFromCart: (product: ProductType) => void
    isOpen: boolean
    toggleCart: () => void
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        cart: [],
        isOpen: false,
        addToCart: (product: ProductType) => set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart: (product: ProductType) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }), {name: 'cart-storage'}
    )
)