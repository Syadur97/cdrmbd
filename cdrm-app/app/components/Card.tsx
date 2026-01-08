// app/components/Card.tsx
interface CardProps {
  title: string;
  value: string | number;
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
}

export default function Card({ title, value, color = "primary" }: CardProps) {
  return (
    <div className={`card bg-${color} text-white shadow-lg p-4`}>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
