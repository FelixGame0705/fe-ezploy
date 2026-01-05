import { getTranslations, type Locale } from "@/lib/i18n";
import { HeroSection, ImageShowcase } from "@/components/common";
import { InfoCard } from "@/components/ui";
import Image from "next/image";
import { Building2, Lightbulb, Wrench, MapPin } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === 'vi' || locale === 'en') ? locale as Locale : 'vi';
  const t = getTranslations(validLocale);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
      
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <HeroSection
          locale={validLocale}
          title={t.about.title}
          imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          imageAlt="About Us"
          gradientFrom="from-purple-600/70"
          gradientTo="to-pink-600/70"
          showComingSoon={false}
        />

        <div className="mt-16 space-y-12">
          {/* Company Info */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl dark:from-gray-800 dark:to-gray-700">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                  <Building2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t.about.company}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.about.description}
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-xl dark:from-blue-900/20 dark:to-indigo-900/20">
            <h3 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
              {t.about.focus.title}
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard
                icon={Lightbulb}
                title={validLocale === 'vi' ? 'Chuyển đổi số' : 'Digital Transformation'}
                description={t.about.focus.digital}
                iconColor="text-yellow-600 dark:text-yellow-400"
                iconBgColor="bg-yellow-100 dark:bg-yellow-900/30"
              />
              <InfoCard
                icon={Wrench}
                title={validLocale === 'vi' ? 'Đơn giản hóa' : 'Simplification'}
                description={t.about.focus.simplify}
                iconColor="text-blue-600 dark:text-blue-400"
                iconBgColor="bg-blue-100 dark:bg-blue-900/30"
              />
            </div>
          </div>

          {/* Address */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900/30">
                <MapPin className="h-6 w-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t.about.address.title}
              </h3>
            </div>
            <div className="mb-6 space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
              <p className="text-gray-700 dark:text-gray-300">{t.about.address.line1}</p>
              <p className="text-gray-700 dark:text-gray-300">{t.about.address.line2}</p>
              <p className="text-gray-700 dark:text-gray-300">{t.about.address.line3}</p>
              <p className="text-gray-700 dark:text-gray-300">{t.about.address.line4}</p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d106.7!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiAxMDbCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          <div className="mt-8">
            <ImageShowcase
              images={[
                {
                  src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
                  alt: "Office",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

