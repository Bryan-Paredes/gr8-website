"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button";
import CategoryFilter from "./category-filter";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Minimalist Sofa",
    price: "$999",
    image: "/placeholder.svg?height=400&width=400",
    category: "Living Room",
  },
  {
    id: 2,
    name: "Modern Coffee Table",
    price: "$299",
    image: "/placeholder.svg?height=400&width=400",
    category: "Living Room",
  },
  {
    id: 3,
    name: "Sleek Dining Chair",
    price: "$149",
    image: "/placeholder.svg?height=400&width=400",
    category: "Dining Room",
  },
  {
    id: 4,
    name: "Contemporary Bookshelf",
    price: "$399",
    image: "/placeholder.svg?height=400&width=400",
    category: "Office",
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: "$249",
    image: "/placeholder.svg?height=400&width=400",
    category: "Office",
  },
  {
    id: 6,
    name: "Modern Dining Table",
    price: "$699",
    image: "/placeholder.svg?height=400&width=400",
    category: "Dining Room",
  },
];

const categories = Array.from(
  new Set(products.map((product) => product.category))
);

export default function FeaturedProducts() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 text-center">
          Featured Products
        </h2>
        <CategoryFilter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link
                href={`/products/${product.id}`}
                className="block overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-light text-gray-900 dark:text-white">
                    <Link
                      href={`/products/${product.id}`}
                      className="hover:underline"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                </div>
                <p className="text-lg font-light text-gray-900 dark:text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
