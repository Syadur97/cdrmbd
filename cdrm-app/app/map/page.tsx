// app/map/page.tsx
import Navbar from "../components/Navbar";

export default function MapPage() {
  return (
    <div>
      
      <main className="p-6 min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Community Map</h1>
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded">
          <p className="text-gray-500">Map placeholder (Leaflet/Google Maps can be added later)</p>
        </div>
      </main>
    </div>
  );
}
