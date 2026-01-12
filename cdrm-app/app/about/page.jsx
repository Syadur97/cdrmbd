export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ===== HERO ===== */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-serif font-semibold leading-tight">
          About the International Institute for Environment and Development
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          We are an independent research organisation working to influence policy,
          practice and action for a more equitable and sustainable world.
        </p>
      </section>

      <section className="py-20 bg-purple-600">
  <div className="flex px-8 md:px-30 items-center">
    {/* Image Section */}
    <div className="w-1/3 flex justify-center">
      <figure>
        <img
          className="rounded-full object-cover w-48 h-48"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
    </div>

    {/* Text Section */}
    <div className="w-2/3">
      <h2 className="text-center text-4xl text-white font-serif font-semibold">
        Get closer to our latest research on critical issues by signing up to our range of email newsletters
      </h2>
    </div>
  </div>
</section>

      {/* ===== GLOBAL REACH ===== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium mb-4">Global reach</h2>
          <p className="text-gray-700 leading-relaxed">
            Working primarily in low- and middle-income countries, we collaborate
            across regions to ensure local perspectives inform global debates.
            Our work spans multiple continents through long-term partnerships.
          </p>
        </div>
      </section>

    </main>
  );
}
