import { getCategories } from "@/lib/get-categories";

export default async function Categories() {
  const categories = await getCategories();

  if (categories.length === 0) return null;

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ name, image }) => (
            <div
              key={name}
              // href={`/products/${slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] rounded-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-light">{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
