// app/dashboard/page.tsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Total Households" value={120} color="green" />
            <Card title="Hazards Reported" value={15} color="red" />
            <Card title="Active Plans" value={8} color="blue" />
            <Card title="Trained Volunteers" value={25} color="yellow" />
          </div>
        </main>
      </div>
    </div>
  );
}
