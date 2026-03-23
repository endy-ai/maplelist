export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maple-light to-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-maple/20 bg-white px-4 py-1.5 text-sm font-medium text-maple shadow-sm">
          <span>🇨🇦</span>
          <span>Discover Canadian-made products you&apos;ll love</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Buy{" "}
          <span className="bg-gradient-to-r from-maple to-red-500 bg-clip-text text-transparent">
            Canadian
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Find Canadian-made alternatives to everyday products. Support local
          brands, strengthen our economy, and discover quality goods made right
          here at home.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 transition-all focus-within:border-maple/40 focus-within:shadow-maple/10">
            <svg
              className="ml-5 h-5 w-5 shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Find a Canadian alternative to..."
              className="w-full bg-transparent px-4 py-4 text-base text-gray-900 placeholder-gray-400 outline-none"
            />
            <button className="mr-2 shrink-0 rounded-xl bg-maple px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-maple-dark">
              Search
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Try &quot;coffee&quot;, &quot;running shoes&quot;, or &quot;skincare&quot;
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8">
          {[
            { value: "1,200+", label: "Canadian Brands" },
            { value: "8,500+", label: "Products Listed" },
            { value: "45+", label: "Categories" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
