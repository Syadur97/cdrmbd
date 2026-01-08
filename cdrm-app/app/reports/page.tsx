// app/reports/page.tsx
import Navbar from "../components/Navbar";

export default function ReportsPage() {
  return (
    <div>
      
      <main className="p-6 min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Community Reports</h1>
        <table className="min-w-full border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Reporter</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b">
              <td className="px-4 py-2">2026-01-08</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">Flood</td>
              <td className="px-4 py-2">Pending</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">2026-01-07</td>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">Fire</td>
              <td className="px-4 py-2">Resolved</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
