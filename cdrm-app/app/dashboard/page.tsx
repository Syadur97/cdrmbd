// app/dashboard/page.tsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card title="Total Households" value={120} color="success" />
            <Card title="Hazards Reported" value={15} color="error" />
            <Card title="Active Plans" value={8} color="info" />
            <Card title="Trained Volunteers" value={25} color="warning" />
          </div>

          {/* Reports Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reporter</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-01-08</td>
                  <td>John Doe</td>
                  <td>Flood</td>
                  <td><span className="badge badge-error">Pending</span></td>
                </tr>
                <tr>
                  <td>2026-01-07</td>
                  <td>Jane Smith</td>
                  <td>Fire</td>
                  <td><span className="badge badge-success">Resolved</span></td>
                </tr>
                <tr>
                  <td>2026-01-06</td>
                  <td>Ali Rahman</td>
                  <td>Storm</td>
                  <td><span className="badge badge-warning">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Optional Summary Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Hazard Trends</h3>
              <p className="text-gray-500">Chart placeholder (add chart later)</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Volunteer Participation</h3>
              <p className="text-gray-500">Chart placeholder (add chart later)</p>
            </div>
          </div>
        </main>
      </div>

      
    </div>
  );
}
