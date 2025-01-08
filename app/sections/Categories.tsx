import { getCategories } from "@/lib/get-categories";

export default async function Categories() {
  const categories = await getCategories();

  if (categories.length === 0) return null;

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto p-12 sm:p-12 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(
            (categorie: { name: string; slug: string; image: string }) => (
              <div
                key={categorie.slug}
                className="group relative overflow-hidden rounded-lg"
              >
                <div
                  className="aspect-[3/4] rounded-lg"
                  style={{
                    maskImage: "linear-gradient(black 80%, transparent 100%)",
                  }}
                >
                  <img
                    src={categorie.image}
                    alt={categorie.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-12 left-6">
                    <h3 className="text-2xl font-light text-white">
                      {categorie.name}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
