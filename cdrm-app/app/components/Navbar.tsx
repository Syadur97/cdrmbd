// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CDRM App</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link href="/map" className="hover:text-blue-300">Map</Link>
        <Link href="/plans" className="hover:text-blue-300">Plans</Link>
        <Link href="/reports" className="hover:text-blue-300">Reports</Link>
      </div>
    </nav>
  );
}
