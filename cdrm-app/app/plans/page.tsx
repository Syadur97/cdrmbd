// app/plans/page.tsx
import Navbar from "../components/Navbar";

export default function PlansPage() {
  return (
    <div>
            <main className="p-6 min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">DRR Plans</h1>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="font-semibold">Flood Preparedness Plan</h2>
            <p>Status: Active</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="font-semibold">Fire Safety Plan</h2>
            <p>Status: Draft</p>
          </div>
        </div>
      </main>
    </div>
  );
}
