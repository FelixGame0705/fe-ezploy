import { getTranslations, type Locale } from "@/lib/i18n";
import { ComingSoon } from "@/components/ComingSoon";
import Link from "next/link";
import Image from "next/image";
import { Rocket, DollarSign, Globe, Zap, CheckCircle2 } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === 'vi' || locale === 'en') ? locale as Locale : 'vi';
  const t = getTranslations(validLocale);

  return (
    <div className="relative min-h-screen">
      {/* Main Background Image - Cloud & Network */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-4342c1f3d6b0?w=1920&q=80"
          alt="Cloud Computing Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay Gradients - Green & Purple */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-emerald-900/75 to-purple-900/85 dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/95 dark:via-gray-900/40 dark:to-gray-900/98"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <ComingSoon locale={validLocale} />
          <div className="mt-8 flex justify-center">
            <div className="relative h-64 w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-4342c1f3d6b0?w=1200&q=80"
                alt="Cloud Computing & Network"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-purple-600/80"></div>
              <div className="relative z-10 flex h-full items-center justify-center p-8">
                <div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {t.home.title}
                  </h1>
                  <p className="mt-6 text-xl text-white/90 sm:text-2xl">
                    {t.home.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-lg text-white/90 sm:text-xl drop-shadow-lg">
            {t.home.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href={`/${validLocale}/deploy`}
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-green-700 hover:to-purple-700 hover:shadow-xl hover:scale-105"
            >
              <Zap className="h-5 w-5" />
              {t.home.cta}
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl transition-all hover:shadow-2xl hover:scale-105 dark:bg-gray-800/95">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-green-100 p-4 dark:bg-green-900/30">
                <Rocket className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {validLocale === 'vi' ? 'Deploy Tự Động' : 'Auto Deploy'}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {validLocale === 'vi' 
                  ? 'Deploy ứng dụng và website một cách tự động, không cần cấu hình phức tạp'
                  : 'Automatically deploy applications and websites without complex configuration'}
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl transition-all hover:shadow-2xl hover:scale-105 dark:bg-gray-800/95">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-green-100 p-4 dark:bg-green-900/30">
                <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {validLocale === 'vi' ? 'Chi Phí Rẻ' : 'Low Cost'}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {validLocale === 'vi'
                  ? 'Chi phí minh bạch, chỉ trả tiền cho những gì bạn sử dụng'
                  : 'Transparent pricing, pay only for what you use'}
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl transition-all hover:shadow-2xl hover:scale-105 dark:bg-gray-800/95">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4 dark:bg-purple-900/30">
                <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {validLocale === 'vi' ? 'Website Miễn Phí' : 'Free Website'}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {validLocale === 'vi'
                  ? 'Website cơ bản miễn phí cho doanh nghiệp, chỉ trả phí duy trì hạ tầng'
                  : 'Free basic website for businesses, only pay for infrastructure maintenance'}
              </p>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
              alt="Cloud Network"
              fill
              className="object-cover transition-transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              alt="Network Infrastructure"
              fill
              className="object-cover transition-transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

