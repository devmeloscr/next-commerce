'use client'
import Image from "next/image";
import { useCartStore } from "@/store";

export default function Cart() {
    const useStore = useCartStore();

    return (
        <>
            <div 
                className="flex items-center hover:cursor-pointer relative" 
                onClick={() => useCartStore.getState().toggleCart()}
            >
                <Image
                    src="cart.svg"
                    alt="Cart Icon"
                    width={24}
                    height={24}
                >
                </Image>
                <span className='bg-teal-600 text-xs font-bold rounded-full h-4 w-4 text-center absolute left-4 bottom-3'>2</span>
            </div>
            {
                useCartStore.getState().isOpen && (
                    <div className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50" onClick={() => useCartStore.getState().toggleCart()}>
                        <div className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">
                            <h1>Meu carrinho</h1>
                            {
                                useCartStore.getState().cart.map((product) => (
                                    <div key={product.id}>{product.name}</div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}