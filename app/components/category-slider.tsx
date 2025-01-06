"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    title: "Kitchen",
    image: "/placeholder.svg?height=600&width=400",
    link: "/categories/kitchen",
  },
  {
    title: "Bathroom",
    image: "/placeholder.svg?height=600&width=400",
    link: "/categories/bathroom",
  },
  {
    title: "Lighting",
    image: "/placeholder.svg?height=600&width=400",
    link: "/categories/lighting",
  },
];

export default function CategorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`w-full flex-shrink-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className="relative h-full">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-2xl font-light mb-2">{category.title}</h2>
                <Link
                  href={category.link}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  View Collection →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 flex space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-white/20 hover:bg-white/10"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-white/20 hover:bg-white/10"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}
