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

      <div className="bg-fuchsia-400 py-5">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
    
    {/* Image: hidden on mobile */}
    <img
      src="https://i.ibb.co.com/5zDWdzB/Chat-GPT-Image-Jan-13-2026-11-39-44-AM.png"
      alt="Section"
      className="hidden lg:block h-64 max-w-xs rounded-lg shadow-md"
    />

    <div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">
        Box Office News!
      </h1>
      <p className="text-base-content">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>

  </div>
</div>



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
