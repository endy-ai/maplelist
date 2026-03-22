export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maple-light to-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-maple/20 bg-white px-4 py-1.5 text-sm font-medium text-maple shadow-sm">
          <span>🇨🇦</span>
          <span>The Canadian startup ecosystem, all in one place</span>
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Where Canada{" "}
          <span className="bg-gradient-to-r from-maple to-red-500 bg-clip-text text-transparent">
            builds
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Discover top Canadian startups, find world-class talent, and connect
          with investors shaping the future of tech north of the border.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-xl bg-maple px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-maple/25 transition-all hover:bg-maple-dark hover:shadow-xl hover:shadow-maple/30 sm:w-auto">
            Explore startups
          </button>
          <button className="w-full rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md sm:w-auto">
            Post a job
          </button>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8">
          {[
            { value: "2,400+", label: "Startups" },
            { value: "18K+", label: "Open roles" },
            { value: "$4.2B", label: "Raised" },
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
