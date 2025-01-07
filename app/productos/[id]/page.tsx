import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
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
