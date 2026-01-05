import { getTranslations, type Locale } from "@/lib/i18n";
import { BackgroundImage } from "@/components/common";
import { HeroSection } from "@/components/common";
import { FeaturesSection } from "@/components/sections";
import { ImageShowcase } from "@/components/common";
import { Button } from "@/components/ui";
import { Zap } from "lucide-react";

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
      <BackgroundImage
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
        alt="Cloud Computing Background"
        overlayGradient="from-green-900/85 via-emerald-900/75 to-purple-900/85"
        priority
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <HeroSection
          locale={validLocale}
          title={t.home.title}
          subtitle={t.home.subtitle}
          description={t.home.description}
          imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
          imageAlt="Cloud Computing & Network"
          gradientFrom="from-green-600/80"
          gradientTo="to-purple-600/80"
        />
        
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            href={`/${validLocale}/deploy`}
            icon={Zap}
            variant="primary"
          >
            {t.home.cta}
          </Button>
        </div>

        <FeaturesSection locale={validLocale} />

        <div className="mt-24">
          <ImageShowcase
            images={[
              {
                src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
                alt: "Cloud Network",
              },
              {
                src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
                alt: "Network Infrastructure",
              },
            ]}
            columns={2}
          />
        </div>
      </div>
    </div>
  );
}

