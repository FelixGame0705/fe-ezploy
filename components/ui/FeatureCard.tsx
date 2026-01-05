import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
  hoverGradient?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-green-600 dark:text-green-400",
  iconBgColor = "bg-green-100 dark:bg-green-900/30",
  hoverGradient = "from-green-500/10",
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl transition-all hover:shadow-2xl hover:scale-105 dark:bg-gray-800/95">
      <div className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} to-transparent opacity-0 transition-opacity group-hover:opacity-100`}></div>
      <div className="relative">
        <div className={`mb-4 inline-flex rounded-full ${iconBgColor} p-4`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

