const categories = [
  { icon: "🧠", name: "AI & Machine Learning", count: 340 },
  { icon: "💰", name: "FinTech", count: 285 },
  { icon: "🌱", name: "CleanTech", count: 210 },
  { icon: "🏥", name: "HealthTech", count: 195 },
  { icon: "🛒", name: "E-Commerce", count: 175 },
  { icon: "🔐", name: "Cybersecurity", count: 145 },
  { icon: "🎮", name: "Gaming", count: 120 },
  { icon: "🏗️", name: "PropTech", count: 98 },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore by sector
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Find startups and roles in the industries that matter to you.
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
                {c.count} companies
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
