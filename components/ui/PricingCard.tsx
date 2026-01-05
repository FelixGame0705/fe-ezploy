import { CheckCircle2 } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface PricingCardProps {
  name: string;
  price: string;
  currency: string;
  features: string[];
  highlight?: boolean;
  custom?: boolean;
  locale: Locale;
  comingSoonText: string;
  popularText?: string;
}

export function PricingCard({
  name,
  price,
  currency,
  features,
  highlight = false,
  custom = false,
  locale,
  comingSoonText,
  popularText,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl border-2 p-6 backdrop-blur-sm ${
        highlight
          ? "border-blue-400 bg-blue-50/95 shadow-2xl dark:bg-blue-900/30"
          : "border-white/30 bg-white/95 shadow-xl dark:border-gray-700/50 dark:bg-gray-800/95"
      }`}
    >
      {highlight && popularText && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {popularText}
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <div className="mt-4">
          {custom ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">{price}</p>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
              <span className="ml-1 text-gray-600 dark:text-gray-400">{currency}</span>
              {locale === "vi" && (
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-500">
                  /tháng
                </span>
              )}
              {locale === "en" && (
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-500">
                  /mo
                </span>
              )}
            </div>
          )}
        </div>
        <ul className="mt-6 space-y-3 text-left">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          disabled
          className="mt-6 w-full rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
        >
          {comingSoonText}
        </button>
      </div>
    </div>
  );
}

