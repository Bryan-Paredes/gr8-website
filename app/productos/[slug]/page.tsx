import { getSingleProduct } from "@/lib/get-products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { product } = await getSingleProduct({ slug });

  if (product.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link
        href="/productos"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">{slug}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {product.map((signleProduct, index) => (
          <div key={index}>
            {signleProduct.name}
            {signleProduct.price}
            <img src={signleProduct.images} alt="" />
            <BlocksRenderer content={signleProduct.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
