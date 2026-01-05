import { getTranslations, type Locale } from "@/lib/i18n";
import { ComingSoon } from "@/components/ComingSoon";
import Image from "next/image";
import { Gift, Zap, CheckCircle2, CreditCard, MessageCircle, ShoppingCart, Cloud, Server, Wrench, Users, Bot, Code, Sparkles } from "lucide-react";

export default async function WebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === 'vi' || locale === 'en') ? locale as Locale : 'vi';
  const t = getTranslations(validLocale);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <ComingSoon locale={validLocale} />
          <div className="mt-8 flex justify-center">
            <div className="relative h-48 w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
                alt="Website Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/70 to-teal-600/70"></div>
              <div className="relative z-10 flex h-full items-center justify-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {t.website.title}
                  </h1>
                  <p className="mt-4 text-lg text-white/90 sm:text-xl">
                    {t.website.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Free Website Section */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg transition-all hover:shadow-2xl dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                  <Gift className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.website.free.title}
                </h2>
              </div>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {t.website.free.subtitle}
              </p>
              <div>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  {t.website.free.pages.title}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t.website.free.pages.home}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t.website.free.pages.about}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t.website.free.pages.contact}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg transition-all hover:shadow-2xl dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.website.addons.title}
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.addons.autoReply}
                  </span>
                </li>
                <li>
                  <div className="mb-2 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {t.website.addons.ecommerce.title}
                    </span>
                  </div>
                  <ul className="ml-7 space-y-2">
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t.website.addons.ecommerce.payos}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t.website.addons.ecommerce.zalo}
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.addons.other}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 shadow-xl dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t.website.process.title}
          </h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Human + AI Workflow */}
            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="rounded-full bg-pink-100 p-3 dark:bg-pink-900/30">
                  <Bot className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t.website.process.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t.website.process.description}
              </p>
            </div>

            {/* Module Optimization */}
            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {validLocale === 'vi' ? 'Tối ưu hóa Module' : 'Module Optimization'}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {t.website.process.optimization}
              </p>
            </div>

            {/* Agent Modules */}
            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-gray-800/90">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                  <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t.website.process.agents.title}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.process.agents.chatbot}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.process.agents.seo}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Model Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t.website.pricing.title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 shadow-md dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.website.pricing.free}
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-700">
              <div className="mb-4 flex items-center gap-3">
                <Cloud className="h-5 w-5 text-blue-500" />
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.website.pricing.monthly}
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.pricing.items.cloud}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.pricing.items.infrastructure}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.website.pricing.items.services}
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="text-gray-700 dark:text-gray-300">
                {t.website.pricing.contact}
              </p>
            </div>
          </div>
        </div>

        {/* Website Showcase Images */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80"
              alt="Website Design"
              fill
              className="object-cover transition-transform hover:scale-110"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
              alt="E-commerce"
              fill
              className="object-cover transition-transform hover:scale-110"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
              alt="Business Website"
              fill
              className="object-cover transition-transform hover:scale-110"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            disabled
            className="rounded-lg border-2 border-gray-300 bg-gray-100 px-8 py-3 text-base font-medium text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
          >
            {t.common.comingSoon}
          </button>
        </div>
      </div>
    </div>
  );
}

