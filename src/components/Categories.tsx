const categories = [
  { icon: "🍽️", name: "Food & Beverage", count: 320 },
  { icon: "👕", name: "Clothing & Apparel", count: 275 },
  { icon: "🏠", name: "Home & Living", count: 240 },
  { icon: "💄", name: "Beauty & Skincare", count: 195 },
  { icon: "💻", name: "Tech & Electronics", count: 160 },
  { icon: "⛷️", name: "Outdoor & Sports", count: 185 },
  { icon: "💊", name: "Health & Wellness", count: 150 },
  { icon: "🧸", name: "Baby & Kids", count: 110 },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by category
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Find Canadian-made products in every category you need.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((c) => (
            <button
              key={c.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-maple/30 hover:shadow-md"
            >
              <span className="text-3xl">{c.icon}</span>
              <span className="text-sm font-semibold text-gray-900">
                {c.name}
              </span>
              <span className="text-xs text-gray-400">
                {c.count} products
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
