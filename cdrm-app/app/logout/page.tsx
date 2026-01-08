// app/logout/page.tsx
import Link from "next/link";

export default function Logout() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center text-2xl">
            Confirm Logout
          </h2>

          <p className="text-gray-600">
            Are you sure you want to log out from the system?
          </p>

          <div className="card-actions justify-center mt-6 gap-4">
            {/* Cancel */}
            <Link href="/dashboard" className="btn btn-outline">
              Cancel
            </Link>

            {/* Logout */}
            <Link href="/" className="btn btn-error">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
