"use client"

import Image from "next/image";
import { ProductType } from "@/types/ProductType";
import { useState } from "react";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage( {product, fill}: ProductImageProps ) {
    const [loading, setLoading] = useState(true);
    return fill ? (
            <Image 
                src={product.image} 
                alt={product.title} 
                fill={true} 
                sizes='(max-width: 768px) 10vw, (max-width: 1024px) 5vw, (max-width: 1280px) 5vw, (max-width: 1536px) 5vw, 3vw' 
                className={`object-cover ${
                    loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                }`}  
                onLoad={() => setLoading(false)}
            />
        ) : (
            <Image 
                src={product.image} 
                alt={product.title} 
                width={400}
                height={700}
                className={`object-cover ${
                    loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                }`}  
                onLoad={() => setLoading(false)}
            />
    ); 
}