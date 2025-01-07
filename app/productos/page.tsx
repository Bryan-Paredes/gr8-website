/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProducts } from "@/lib/get-products";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function ProductsPage() {
  const { products } = await getProducts();

  return (
    <div className="min-h-screen ">
      {/* Hero Banner */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 &&
            products.map(
              (product: {
                id: number;
                name: string;
                images: string;
                description: any;
              }) => (
                <div
                  key={product.id}
                  className="group bg-gray-900 hover:bg-gray-800 p-3 rounded-lg"
                >
                  <a href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.images}
                        alt={product.name}
                        height={200}
                        width={200}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <h3 className="text-sm font-medium text-white ">
                        {product.name}
                        {product.id}
                      </h3>
                      <BlocksRenderer content={product.description} />
                    </div>
                  </a>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
