"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortBy() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("sortBy") ?? "all";

  const handleClick = (filter: string) => () => {
    const query = filter === "all" ? "" : `?sort=${filter}`;
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex items-center justify-center py-4 flex-wrap gap-4">
      <button
        type="button"
        onClick={handleClick("all")}
        className={`inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          currentFilter === "all"
            ? "bg-white text-gray-700"
            : "bg-transparent border border-gray-300"
        }`}
      >
        Restablecer
      </button>
      <button
        type="button"
        onClick={handleClick("price")}
        className={`inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          currentFilter !== "all" ? "text-blue-500" : ""
        }`}
      >
        Precio Asc ⬆️
      </button>
      <button
        type="button"
        onClick={handleClick("price:desc")}
        className={`inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          currentFilter !== "all" ? "text-blue-500" : ""
        }`}
      >
        Precio Des ⬇️
      </button>
    </div>
  );
}
