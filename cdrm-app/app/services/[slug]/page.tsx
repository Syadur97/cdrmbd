import services from "@/app/data/services.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetails({ params }: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
    
      <h1 className="text-4xl font-bold mb-4">
        {service.title}
      </h1>
      <img
        src={service.image}
        alt={service.title}
        className="rounded-xl mb-6"
      />

      

      <p className="text-lg text-base-content/80">
        {service.description}
      </p>

<Link
  href={{
    pathname: "/contact",
    query: { service: service.title },
  }}
  className="btn btn-primary mt-6"
>
  Contact Us
</Link>
    </div>
  );
}
