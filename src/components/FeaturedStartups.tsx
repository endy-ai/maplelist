const startups = [
  {
    name: "NorthNode AI",
    city: "Toronto, ON",
    category: "Artificial Intelligence",
    description: "Enterprise AI agents for Canadian financial institutions.",
    stage: "Series A",
    hiring: true,
    logo: "🤖",
  },
  {
    name: "TerraFlux",
    city: "Vancouver, BC",
    category: "CleanTech",
    description: "Carbon capture technology powered by ocean-based minerals.",
    stage: "Seed",
    hiring: true,
    logo: "🌊",
  },
  {
    name: "PayNorth",
    city: "Montreal, QC",
    category: "FinTech",
    description: "Instant cross-border payments for Canadian businesses.",
    stage: "Series B",
    hiring: false,
    logo: "💸",
  },
  {
    name: "MedLeaf",
    city: "Waterloo, ON",
    category: "HealthTech",
    description: "AI-powered diagnostic tools for rural Canadian clinics.",
    stage: "Series A",
    hiring: true,
    logo: "🏥",
  },
  {
    name: "Boreal Robotics",
    city: "Calgary, AB",
    category: "Robotics",
    description: "Autonomous drones for energy infrastructure inspection.",
    stage: "Seed",
    hiring: true,
    logo: "🛸",
  },
  {
    name: "Canopy Commerce",
    city: "Ottawa, ON",
    category: "E-Commerce",
    description: "Headless commerce platform built for Canadian retail.",
    stage: "Pre-Seed",
    hiring: false,
    logo: "🛍️",
  },
];

export default function FeaturedStartups() {
  return (
    <section id="startups" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured startups
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Handpicked companies building the future from coast to coast.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  {s.logo}
                </div>
                {s.hiring && (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Hiring
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
              <p className="mt-0.5 text-sm text-gray-500">
                {s.city} · {s.stage}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {s.description}
              </p>

              <div className="mt-4">
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  {s.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
            View all startups →
          </button>
        </div>
      </div>
    </section>
  );
}
