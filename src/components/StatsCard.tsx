import { AnimatedCounter } from './AnimatedCounter';

interface StatsCardProps {
  percentage: number;
  description: string;
  color: string;
}

export function StatsCard({ percentage, description, color }: StatsCardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg border-t-4 ${color}`}>
      <div className="text-4xl font-bold text-gray-800 mb-4">
        <AnimatedCounter value={percentage} />
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}