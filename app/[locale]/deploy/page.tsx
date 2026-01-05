import { getTranslations, type Locale } from "@/lib/i18n";
import { BackgroundImage, HeroSection, ImageShowcase } from "@/components/common";
import { PricingSection } from "@/components/sections";
import { InfoCard } from "@/components/ui";
import Image from "next/image";
import { RefreshCw, Database, Server, TrendingUp, Users, Clock } from "lucide-react";

export default async function DeployPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === 'vi' || locale === 'en') ? locale as Locale : 'vi';
  const t = getTranslations(validLocale);

  const plans = [
    {
      name: t.deploy.pricing.free.name,
      price: "0",
      currency: validLocale === 'vi' ? 'đ' : '$',
      features: [
        t.deploy.pricing.free.storage,
        t.deploy.pricing.free.ram,
        t.deploy.pricing.free.cpu,
        t.deploy.pricing.free.suitable,
      ],
      highlight: false,
    },
    {
      name: t.deploy.pricing.basic.name,
      price: "99",
      currency: validLocale === 'vi' ? 'k đ' : '$',
      features: [
        t.deploy.pricing.basic.cpu,
        t.deploy.pricing.basic.ram,
        t.deploy.pricing.basic.storage,
      ],
      highlight: true,
    },
    {
      name: t.deploy.pricing.premium.name,
      price: "299",
      currency: validLocale === 'vi' ? 'k đ' : '$',
      features: [
        t.deploy.pricing.premium.cpu,
        t.deploy.pricing.premium.ram,
        t.deploy.pricing.premium.storage,
        t.deploy.pricing.premium.addons,
      ],
      highlight: false,
    },
    {
      name: t.deploy.pricing.business.name,
      price: t.deploy.pricing.business.contact,
      currency: "",
      features: [],
      highlight: false,
      custom: true,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
        alt="Cloud Computing & Network Background"
        overlayGradient="from-blue-900/85 via-indigo-900/75 to-purple-900/85"
        priority
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <HeroSection
          locale={validLocale}
          title={t.deploy.title}
          subtitle={t.deploy.description}
          imageSrc="/bg-ezploy.jpg"
          imageAlt="Cloud Computing & Network Services"
          gradientFrom="from-blue-600/70"
          gradientTo="to-indigo-600/70"
        />

        <PricingSection locale={validLocale} plans={plans} />

        {/* Additional Info Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-xl dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {validLocale === 'vi' ? 'Thông tin hạ tầng' : 'Infrastructure Information'}
              </h3>
            </div>
            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                {t.deploy.additionalInfo}
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <InfoCard
                icon={Clock}
                title="99.9%"
                description={validLocale === 'vi' ? 'Uptime' : 'Uptime'}
                iconColor="text-green-600 dark:text-green-400"
                iconBgColor="bg-green-100 dark:bg-green-900/30"
                variant="vertical"
              />
              <InfoCard
                icon={TrendingUp}
                title={validLocale === 'vi' ? 'Autoscale' : 'Autoscale'}
                description={validLocale === 'vi' ? 'Tự động mở rộng' : 'Auto Scaling'}
                iconColor="text-blue-600 dark:text-blue-400"
                iconBgColor="bg-blue-100 dark:bg-blue-900/30"
                variant="vertical"
              />
              <InfoCard
                icon={Users}
                title={validLocale === 'vi' ? 'Cá nhân & Freelancer' : 'Individuals & Freelancers'}
                description={validLocale === 'vi' ? 'Sắp ra mắt' : 'Coming Soon'}
                iconColor="text-purple-600 dark:text-purple-400"
                iconBgColor="bg-purple-100 dark:bg-purple-900/30"
                variant="vertical"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl dark:bg-gray-800/95">
          <h3 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
            {validLocale === 'vi' ? 'Hỗ trợ' : 'Support'}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <InfoCard
              icon={RefreshCw}
              title={validLocale === 'vi' ? 'Replicate' : 'Replication'}
              description={t.deploy.pricing.features.replicate}
              iconColor="text-blue-600 dark:text-blue-400"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
            />
            <InfoCard
              icon={Database}
              title={validLocale === 'vi' ? 'Backup' : 'Backup'}
              description={t.deploy.pricing.features.backup}
              iconColor="text-green-600 dark:text-green-400"
              iconBgColor="bg-green-100 dark:bg-green-900/30"
            />
          </div>
        </div>

        <div className="mt-16">
          <ImageShowcase
            images={[
              {
                src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
                alt: "Modern Office",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

