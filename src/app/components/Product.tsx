import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";

type ProductProps = {
    product: ProductType; 
}

export default function Product({ product }: ProductProps ) {
    return (
        <div className="flex flex-col items-center shadow-lg h-96 bg-salte-800 p-5 text-gray-300">
            <div className="relative max-h-72 overflow-hidden flex-1">
                <ProductImage product={product} />
            </div>
            <div className="flex justify-between font-bold my-3">
                {product.title}
            </div>
            <button className="bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center rounded-md">
                Adicionar ao carrinho
            </button>
        </div>
    )
}