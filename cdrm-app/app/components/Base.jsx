"use client";

export default function Base() {
  return (
    <section className="min-h-screen bg-base-100">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full max-w-7xl gap-10">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consultancy Co.
            </h1>

            <p className="mb-6 text-base md:text-lg">
              Delivering data-driven disaster risk management, GIS solutions,
              and decision-support systems for resilient communities.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
              alt="Consultancy"
              className="rounded-xl shadow-lg w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
