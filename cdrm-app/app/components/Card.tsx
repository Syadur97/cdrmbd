// app/components/Card.tsx
interface CardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function Card({ title, value, color = "blue" }: CardProps) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className={`p-4 rounded shadow ${colorMap[color]}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
