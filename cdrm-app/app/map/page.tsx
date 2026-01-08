"use client"; // optional for page if you use dynamic import

import dynamic from "next/dynamic";

// Dynamically import CommunityMap so Leaflet only runs on client
const CommunityMap = dynamic(
  () => import("../components/CommunityMaps"),
  { ssr: false } // important: disables server-side rendering
);

export default function MapPage() {
  return <CommunityMap />;
}
