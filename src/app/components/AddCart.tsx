'use client';

import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType"; 

export default function AddCart({product}: {product: ProductType}) {
    return (
        <button className="bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center rounded-md" onClick={() => useCartStore.getState().addToCart(product)}>
            Adicionar ao carrinho
        </button>
    )
}