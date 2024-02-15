import { ProductType } from "@/types/ProductType";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  return response.json();
}

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto py-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
}
