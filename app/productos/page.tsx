"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
// import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { categories } from "@/data/site";

const products = [
  {
    id: 1,
    name: "Delphine Cane Velvet Accent Chair",
    price: 249.7,
    originalPrice: 299.0,
    image: "/backcategory.webp",
    category: "Living Room",
    rating: 5.0,
    delivery: "2 Day Delivery",
    discount: "-14%",
  },
  {
    id: 2,
    name: "CH24 Wishbone Chair",
    price: 231.0,
    originalPrice: 275.0,
    image: "/backcategory.webp",
    category: "Dining Room",
    rating: 5.0,
    delivery: "2 Day Delivery",
    discount: "-11%",
  },
  {
    id: 3,
    name: "Linea Sofa Sofa, Ash",
    price: 5753.0,
    originalPrice: 5753.0,
    image: "/backcategory.webp",
    category: "Living Room",
    rating: 5.0,
    delivery: "2 Day Delivery",
  },
  {
    id: 4,
    name: "Around Coffee Table",
    price: 649.0,
    originalPrice: 649.0,
    image: "/backcategory.webp",
    category: "Living Room",
    rating: 5.0,
    delivery: "3 Day Delivery",
  },
];

const colors = [
  { name: "Natural", class: "bg-[#eab676]" },
  { name: "Caoba", class: "bg-[#7C3319]" },
  { name: "Pino", class: "bg-[#E5C878]" },
];

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([90, 5800]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((oldColor) => oldColor !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="min-h-screen  ">
      {/* Hero Banner */}
      <div
        className="relative h-72 bg-back-metrics bg-cover bg-center"
        style={{ maskImage: "linear-gradient(black 80%, transparent 100%)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-4xl text-white">{selectedCategory}</h1>
        </div>
      </div>

      {/* Category Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`p-4 rounded-lg border-2 border-transparent text-center transition-colors duration-200 ${
                selectedCategory === category.name
                  ? "bg-primary"
                  : "hover:border-white hover:border"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={category.icon}
                  alt={category.name}
                  width={40}
                  height={40}
                  loading="eager"
                  decoding="async"
                />
                <span className="text-white text-base font-bold">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtero Precio */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Filtro por Precio
              </h3>
              <div className="px-2">
                <Slider
                  max={5800}
                  min={90}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4 bg-white"
                />
                <div className="flex justify-between text-sm text-white">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            {/* Filtro Color */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Filtro por Color
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`w-full p-2 rounded-md flex items-center justify-center space-x-2 ${
                      selectedColors.includes(color.name) ? "bg-primary" : ""
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${color.class}`} />
                    <span className="text-sm text-white">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gray-900 hover:bg-gray-800 p-3 rounded-lg"
                >
                  <a href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                      {product.discount && (
                        <div className="absolute top-2 left-2 text-white px-2 py-1 text-xs rounded">
                          {product.discount}
                        </div>
                      )}
                      <img
                        src={product.image}
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
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current text-yellow-400"
                          />
                        ))}
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-medium text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
