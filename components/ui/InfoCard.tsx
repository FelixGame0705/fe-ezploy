import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  iconColor?: string;
  iconBgColor?: string;
  variant?: "horizontal" | "vertical";
}

export function InfoCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-blue-600 dark:text-blue-400",
  iconBgColor = "bg-blue-100 dark:bg-blue-900/30",
  variant = "horizontal",
}: InfoCardProps) {
  if (variant === "vertical") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-md dark:bg-gray-800/90">
        <div className={`rounded-full ${iconBgColor} p-3`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
      <div className={`rounded-full ${iconBgColor} p-3`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        {description && (
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{description}</p>
        )}
      </div>
    </div>
  );
}

