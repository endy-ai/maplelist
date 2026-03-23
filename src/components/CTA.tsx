export default function CTA() {
  return (
    <section id="for-brands" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maple to-red-600 px-8 py-16 text-center shadow-2xl shadow-maple/20 sm:px-16">
          {/* Background decoration */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Grow your Canadian brand with MapleList
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-red-100">
              Whether you make it, grow it, or craft it in Canada — list your
              products on MapleList and reach thousands of shoppers who want to
              buy Canadian.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-maple shadow-lg transition-all hover:shadow-xl sm:w-auto">
                List your brand
              </button>
              <button className="w-full rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto">
                Join as a shopper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
