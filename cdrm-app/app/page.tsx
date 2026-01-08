// app/page.tsx

import Base from "./components/Base";
import Services from "./components/Services"

export default function Home() {
  return (
    <div className="px-30">
      <Base/>
      <Services/>
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
