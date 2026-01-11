"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  service?: string;
  message: string;
};

type Props = {
  defaultService?: string;
};

export default function ContactForm({ defaultService }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { service: defaultService || "" },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md">
      {submitted && (
        <div className="alert alert-success mb-4">
          Thank you! We will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your full name"
            className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
          />
          {errors.name && <p className="text-error mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="your@email.com"
            className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
          />
          {errors.email && <p className="text-error mt-1">{errors.email.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label className="label">
            <span className="label-text">Service</span>
          </label>
          <input
            {...register("service")}
            type="text"
            placeholder="Service"
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        {/* Message */}
        <div>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Type your message here"
            className={`textarea textarea-bordered w-full ${errors.message ? "textarea-error" : ""}`}
            rows={5}
          ></textarea>
          {errors.message && <p className="text-error mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
