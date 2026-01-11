// app/page.tsx

import Base from "./components/Base";
import Services from "./components/Services"

export default function Home() {
  return (
    <div className="px-30">
      <Base/>
      <Services/>
    </div>
  );
}
