import { getTranslations, type Locale } from "@/lib/i18n";
import { ComingSoon } from "@/components/ComingSoon";
import Image from "next/image";
import { CheckCircle2, RefreshCw, Database, Server, Cpu, HardDrive, Zap, TrendingUp, Users, Clock } from "lucide-react";

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
      {/* Main Background Image - Cloud & Network */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
          alt="Cloud Computing & Network Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/75 to-purple-900/85 dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/95 dark:via-gray-900/40 dark:to-gray-900/98"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <ComingSoon locale={validLocale} />
          <div className="mt-8 flex justify-center">
            <div className="relative h-48 w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Cloud Computing & Network Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-600/70"></div>
              <div className="relative z-10 flex h-full items-center justify-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {t.deploy.title}
                  </h1>
                  <p className="mt-4 text-lg text-white/90 sm:text-xl">
                    {t.deploy.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl">
            {t.deploy.pricing.title}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl border-2 p-6 backdrop-blur-sm ${
                  plan.highlight
                    ? "border-blue-400 bg-blue-50/95 shadow-2xl dark:bg-blue-900/30"
                    : "border-white/30 bg-white/95 shadow-xl dark:border-gray-700/50 dark:bg-gray-800/95"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      {validLocale === 'vi' ? 'Phổ biến' : 'Popular'}
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    {plan.custom ? (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {plan.price}
                      </p>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          {plan.price}
                        </span>
                        <span className="ml-1 text-gray-600 dark:text-gray-400">
                          {plan.currency}
                        </span>
                        {validLocale === 'vi' && (
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-500">
                            /tháng
                          </span>
                        )}
                        {validLocale === 'en' && (
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-500">
                            /mo
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
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
                    {t.common.comingSoon}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

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
              <div className="flex flex-col items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-md dark:bg-gray-800/90">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">99.9%</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {validLocale === 'vi' ? 'Uptime' : 'Uptime'}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-md dark:bg-gray-800/90">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {validLocale === 'vi' ? 'Autoscale' : 'Autoscale'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {validLocale === 'vi' ? 'Tự động mở rộng' : 'Auto Scaling'}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-md dark:bg-gray-800/90">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {validLocale === 'vi' ? 'Cá nhân & Freelancer' : 'Individuals & Freelancers'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {validLocale === 'vi' ? 'Sắp ra mắt' : 'Coming Soon'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl dark:bg-gray-800/95">
          <h3 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
            {validLocale === 'vi' ? 'Hỗ trợ' : 'Support'}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {validLocale === 'vi' ? 'Replicate' : 'Replication'}
                </h4>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {t.deploy.pricing.features.replicate}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {validLocale === 'vi' ? 'Backup' : 'Backup'}
                </h4>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {t.deploy.pricing.features.backup}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Image */}
        <div className="mt-16">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-4342c1f3d6b0?w=1200&q=80"
              alt="Cloud Network Infrastructure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

