export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ===== HERO SECTION ===== */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight">
          IIED is an independent research organisation that delivers
          positive change on a global scale
        </h1>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full border px-6 py-2 text-sm hover:bg-gray-100">
            What we do
          </button>
          <button className="rounded-full border px-6 py-2 text-sm hover:bg-gray-100">
            How we work
          </button>
          <button className="rounded-full border px-6 py-2 text-sm hover:bg-gray-100">
            See our impact
          </button>
        </div>
      </section>

      {/* ===== FEATURED CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Large Feature Card */}
          <article className="lg:col-span-2 rounded-xl overflow-hidden border">
            <img
              src="https://i.ibb.co.com/5zDWdzB/Chat-GPT-Image-Jan-13-2026-11-39-44-AM.png"
              alt="Article"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <span className="inline-block mb-3 rounded-md bg-cyan-600 px-3 py-1 text-xs text-white">
                Article
              </span>
              <h2 className="text-2xl font-serif leading-snug">
                Supporting women-led digital innovation in rural communities
              </h2>
            </div>
          </article>

          {/* Right Column Cards */}
          <div className="space-y-8">

            <article className="rounded-xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Insight"
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <span className="inline-block mb-2 rounded-md bg-cyan-600 px-3 py-1 text-xs text-white">
                  Article
                </span>
                <h3 className="text-lg font-serif leading-snug">
                  IIED's best of 2025: insights
                </h3>
              </div>
            </article>

            <article className="rounded-xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                alt="Insight"
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <span className="inline-block mb-2 rounded-md bg-cyan-600 px-3 py-1 text-xs text-white">
                  Insight
                </span>
                <h3 className="text-lg font-serif leading-snug">
                  Putting pledges into practice: what did COP30 mean for climate funds?
                </h3>
              </div>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}
