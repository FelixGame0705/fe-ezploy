import Image from "next/image";
import { ComingSoon } from "@/components/ui";
import { type Locale } from "@/lib/i18n";

interface HeroSectionProps {
  locale: Locale;
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  gradientFrom?: string;
  gradientTo?: string;
  showComingSoon?: boolean;
}

export function HeroSection({
  locale,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  gradientFrom = "from-blue-600/80",
  gradientTo = "to-purple-600/80",
  showComingSoon = true,
}: HeroSectionProps) {
  return (
    <div className="text-center">
      {showComingSoon && <ComingSoon locale={locale} />}
      <div className="mt-8 flex justify-center">
        <div className="relative h-48 w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl md:h-64">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
          <div className="relative z-10 flex h-full items-center justify-center p-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="mt-8 text-lg text-white/90 sm:text-xl drop-shadow-lg">
          {description}
        </p>
      )}
    </div>
  );
}

