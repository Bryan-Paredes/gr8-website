import { Button } from "@/components/ui/button";
import { getHomeInfo } from "@/lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ArrowRight } from "@/components/ui/icons";
import Link from "next/link";

export default async function Hero() {
  const { Titulo, Descripcion, image } = await getHomeInfo();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Modern kitchen interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {Titulo}
          </h1>
          <div className="text-lg md:text-xl text-gray-300 mb-8">
            <BlocksRenderer content={Descripcion} />
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-lg border-2 hover:bg-primary hover:border-primary text-white"
          >
            <Link
              href="/productos"
              className="hover:scale-105 transition-transform"
            >
              Ver Productos
              <ArrowRight size={30} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
