import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./AddCart";

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
                <div className="w-40 truncate">
                    {product.name}
                </div>
                <div className="text-md text-teal-300">
                    {formatPrice(product.price)}
                </div>
            </div>
            <AddCart product={product} />
        </div>
    )
}