const products = [
  {
    name: "Birch Benders Pancake Mix",
    brand: "Canadian Heritage Foods",
    category: "Food & Beverage",
    description:
      "Organic, stone-ground pancake and waffle mix made with 100% Canadian wheat and maple syrup.",
    logo: "🥞",
  },
  {
    name: "Tundra Winter Parka",
    brand: "Northern Outfitters",
    category: "Clothing & Apparel",
    description:
      "Insulated winter parka designed and manufactured in Winnipeg. Built for real Canadian winters.",
    logo: "🧥",
  },
  {
    name: "Cedarwood Home Candle",
    brand: "Boreal Botanics",
    category: "Home & Living",
    description:
      "Hand-poured soy candles with essential oils sourced from BC forests. Clean-burning and long-lasting.",
    logo: "🕯️",
  },
  {
    name: "Glacier Moisturizer",
    brand: "True North Skincare",
    category: "Beauty & Skincare",
    description:
      "Hydrating daily moisturizer formulated with glacial water and Canadian-grown botanicals.",
    logo: "✨",
  },
  {
    name: "MapleTech Webcam",
    brand: "MapleTech",
    category: "Tech & Electronics",
    description:
      "4K webcam designed in Toronto with built-in privacy shutter and low-light correction.",
    logo: "📷",
  },
  {
    name: "Summit Trail Runners",
    brand: "Ridgeline Athletics",
    category: "Outdoor & Sports",
    description:
      "Lightweight trail running shoes made in Montreal with recycled materials and Vibram soles.",
    logo: "👟",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Canadian products
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Quality goods made in Canada, from coast to coast to coast.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  {p.logo}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-maple-light px-2.5 py-0.5 text-xs font-medium text-maple">
                  🍁 Made in Canada
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-0.5 text-sm text-gray-500">
                by {p.brand}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {p.description}
              </p>

              <div className="mt-4">
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  {p.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
            Browse all products →
          </button>
        </div>
      </div>
    </section>
  );
}
