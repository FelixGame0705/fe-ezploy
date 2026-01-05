import { FeatureCard } from "@/components/ui/FeatureCard";
import { Rocket, DollarSign, Globe } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface Feature {
  icon: typeof Rocket;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
  hoverGradient: string;
}

export function FeaturesSection({ locale }: { locale: Locale }) {
  const features: Feature[] = [
    {
      icon: Rocket,
      title: locale === "vi" ? "Deploy Tự Động" : "Auto Deploy",
      description:
        locale === "vi"
          ? "Deploy ứng dụng và website một cách tự động, không cần cấu hình phức tạp"
          : "Automatically deploy applications and websites without complex configuration",
      iconColor: "text-green-600 dark:text-green-400",
      iconBgColor: "bg-green-100 dark:bg-green-900/30",
      hoverGradient: "from-green-500/10",
    },
    {
      icon: DollarSign,
      title: locale === "vi" ? "Chi Phí Rẻ" : "Low Cost",
      description:
        locale === "vi"
          ? "Chi phí minh bạch, chỉ trả tiền cho những gì bạn sử dụng"
          : "Transparent pricing, pay only for what you use",
      iconColor: "text-green-600 dark:text-green-400",
      iconBgColor: "bg-green-100 dark:bg-green-900/30",
      hoverGradient: "from-green-500/10",
    },
    {
      icon: Globe,
      title: locale === "vi" ? "Website Miễn Phí" : "Free Website",
      description:
        locale === "vi"
          ? "Website cơ bản miễn phí cho doanh nghiệp, chỉ trả phí duy trì hạ tầng"
          : "Free basic website for businesses, only pay for infrastructure maintenance",
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBgColor: "bg-purple-100 dark:bg-purple-900/30",
      hoverGradient: "from-purple-500/10",
    },
  ];

  return (
    <div className="mt-24 grid gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}

