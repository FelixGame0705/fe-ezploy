import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "disabled";
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  onClick,
  disabled = false,
  variant = "primary",
  icon: Icon,
  children,
  className = "",
}: ButtonProps) {
  const baseStyles = "flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-600 to-purple-600 text-white shadow-lg hover:from-green-700 hover:to-purple-700 hover:shadow-xl hover:scale-105",
    secondary: "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300",
    disabled: "border-2 border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (disabled || variant === "disabled") {
    return (
      <button disabled className={buttonClasses}>
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
}

