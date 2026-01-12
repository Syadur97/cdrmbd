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

      {/* ===== MISSION ===== */}
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

      {/* ===== HISTORY ===== */}
      <section >
        <h1 className="text-5xl font-extrabold text-primary mb-4">
        Box Office News!
      </h1>
      <div className="bg-base-200 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 p-4 flex justify-center">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Box Office"
        className="w-96 h-96 object-cover rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
      <p className="text-lg text-gray-700 mb-6 hover:text-secondary transition-colors duration-300">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-gradient btn-lg w-40 hover:scale-105 transform transition-transform duration-300">
        Get Started
      </button>
    </div>
  </div>
      </div>
  
</section>


      {/* ===== HOW WE WORK ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-medium mb-4">How we work</h2>
        <p className="text-gray-700 leading-relaxed">
          We work collaboratively with partners across regions and disciplines.
          Our approach combines research, action and influence to ensure evidence
          supports policy change and practical solutions at local, national and
          international levels.
        </p>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium mb-4">Our values</h2>
          <p className="text-gray-700 leading-relaxed">
            Our work is guided by integrity, inclusion and respect. We prioritise
            ethical partnerships, accountability and long-term impact, ensuring
            that knowledge and power are shared fairly.
          </p>
        </div>
      </section>

      {/* ===== PEOPLE & LEADERSHIP ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-medium mb-4">
          People and leadership
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our organisation brings together researchers, practitioners and policy
          experts from diverse backgrounds. Leadership and governance structures
          guide strategic direction, accountability and organisational learning.
        </p>
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
