// app/page.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>
      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 text-center">
          Welcome to Consultancy Co.
        </h1>
        <p className="text-gray-700 text-center max-w-md mb-6">
          Professional solutions for disaster risk management, community resilience, and environmental planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/dashboard" className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 text-center">
            Go to Dashboard
          </a>
          <a href="#services" className="bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-300 text-center">
            Test
          </a>
          <button className="btn btn-primary">Primary</button>
        </div>
      </main>

      <section id="services" className="p-6 sm:p-12 bg-white w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">Community Risk Assessment</h3>
            <p>Identify and mitigate disaster risks effectively.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">Training & Capacity Building</h3>
            <p>Practical DRR training for local stakeholders.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">Early Warning Systems</h3>
            <p>Implement systems to reduce disaster impact.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
}
