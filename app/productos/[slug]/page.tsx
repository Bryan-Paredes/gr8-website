import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Minimalist Sofa",
    price: "$999",
    image: "/placeholder.svg?height=600&width=600",
    category: "Living Room",
    description:
      "A sleek and comfortable sofa perfect for modern living spaces. Features clean lines and premium upholstery.",
  },
  {
    id: 2,
    name: "Modern Coffee Table",
    price: "$299",
    image: "/placeholder.svg?height=600&width=600",
    category: "Living Room",
    description:
      "Elevate your living room with this stylish coffee table. Its minimalist design complements any decor.",
  },
  {
    id: 3,
    name: "Sleek Dining Chair",
    price: "$149",
    image: "/placeholder.svg?height=600&width=600",
    category: "Dining Room",
    description:
      "Comfortable and chic dining chairs that add a touch of elegance to your dining area.",
  },
  {
    id: 4,
    name: "Contemporary Bookshelf",
    price: "$399",
    image: "/placeholder.svg?height=600&width=600",
    category: "Office",
    description:
      "A versatile bookshelf with a contemporary design, perfect for organizing your books and displaying decor.",
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: "$249",
    image: "/placeholder.svg?height=600&width=600",
    category: "Office",
    description:
      "Work in comfort with this ergonomic office chair, designed to support your body during long hours.",
  },
  {
    id: 6,
    name: "Modern Dining Table",
    price: "$699",
    image: "/placeholder.svg?height=600&width=600",
    category: "Dining Room",
    description:
      "A stunning dining table that serves as the centerpiece of your dining room, perfect for family meals and entertaining.",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16"></div>
    </div>
  );
}
