import Link from "next/link";
import services from "@/app/data/services.json";

export default function Service() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="card bg-base-100 shadow hover:shadow-xl transition"
        >
          <figure>
            <img src={service.image} alt={service.title} />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <p>{service.description}</p>

            <div className="card-actions justify-end">
              <Link
                href={`/services/${service.slug}`}
                className="btn btn-primary btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
