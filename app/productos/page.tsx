/* eslint-disable @typescript-eslint/no-explicit-any */
import SortBy from "@/components/SortBy";
import { getProducts } from "@/lib/get-products";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { sort } = await searchParams;

  const { products } = await getProducts({ sort: sort });

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-72 bg-back-metrics bg-cover bg-center"
        style={{ maskImage: "linear-gradient(black 80%, transparent 100%)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-4xl text-white">Nuestros Productos</h1>
        </div>
      </div>

      <div>{products.length > 0 && <SortBy />}</div>

      <div className="lg:col-span-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 &&
            products.map(
              (product: {
                id: number;
                name: string;
                slug: string;
                images: string;
                description: any;
                price: number;
              }) => (
                <div
                  key={product.id}
                  className="group bg-gray-900 hover:bg-gray-800 p-3 rounded-lg"
                >
                  <a href={`/productos/${product.slug}`}>
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
                      </h3>
                      <p>{product.price}</p>
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
