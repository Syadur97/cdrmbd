export type Feature = {
  type: string;
  properties: { name: string };
  geometry: { type: string; coordinates: [number, number] };
};

export type GeoJSONData = {
  type: string;
  features: Feature[];
};
