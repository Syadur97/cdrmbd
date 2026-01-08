// app/components/Sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li><Link href="/dashboard" className="hover:text-blue-700">Dashboard</Link></li>
        <li><Link href="/map" className="hover:text-blue-700">Community Map</Link></li>
        <li><Link href="/plans" className="hover:text-blue-700">DRR Plans</Link></li>
        <li><Link href="/reports" className="hover:text-blue-700">Reports</Link></li>
      </ul>
    </aside>
  );
}
