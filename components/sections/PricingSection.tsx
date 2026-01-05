import { PricingCard } from "@/components/ui/PricingCard";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

interface PricingSectionProps {
  locale: Locale;
  plans: Array<{
    name: string;
    price: string;
    currency: string;
    features: string[];
    highlight?: boolean;
    custom?: boolean;
  }>;
}

export function PricingSection({ locale, plans }: PricingSectionProps) {
  const t = getTranslations(locale);

  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl">
        {t.deploy.pricing.title}
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            locale={locale}
            comingSoonText={t.common.comingSoon}
            popularText={locale === "vi" ? "Phổ biến" : "Popular"}
          />
        ))}
      </div>
    </div>
  );
}

