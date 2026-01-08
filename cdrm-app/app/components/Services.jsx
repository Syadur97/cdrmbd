"use client";

import servicesData from "../data/services.json";

export default function Services() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We provide innovative solutions tailored to your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 rounded-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
