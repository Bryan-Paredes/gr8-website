/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleProduct } from "@/lib/get-products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ServerSideComponentProp } from "@/types/params";

export default async function ProductPage({
  params,
}: ServerSideComponentProp<{ slug: string }>) {
  try {
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
          {product.map(
            (
              singleProduct: {
                id: number;
                name: string;
                slug: string;
                description: any;
                images: string;
                price: number;
                category: { slug: string };
              },
              index: number
            ) => (
              <div key={singleProduct.id ?? index}>
                {singleProduct.name}
                {singleProduct.price}
                {/* <img src={singleProduct.images} alt={singleProduct.name} /> */}
                <Carousel opts={{ align: "start" }} className="w-full max-w-lg">
                  <CarouselContent>
                    <CarouselItem key={index}>
                      <img
                        className="rounded-xl w-full"
                        src={singleProduct.images}
                        alt={singleProduct.name}
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <BlocksRenderer content={singleProduct.description} />
                <p>{singleProduct.category.slug}</p>
              </div>
            )
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}
