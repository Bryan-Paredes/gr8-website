"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  onFilterChange,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["All", ...categories].map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "ghost"}
          onClick={() => handleCategoryClick(category)}
          className="text-sm font-light rounded-full px-6"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
