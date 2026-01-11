"use client";

import ContactForm from "./ContactForm";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const service = searchParams?.get("service") || "";

  return (
    <main className="min-h-screen p-8 bg-base-200">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-base-content/70 mt-2">
            Fill the form below and we will get back to you shortly.
          </p>
        </div>

        {/* Pass service name to form */}
        <ContactForm defaultService={service} />
      </div>
    </main>
  );
}
