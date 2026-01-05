import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === 'vi' || locale === 'en') ? locale as Locale : 'vi';
  return (
    <>
      <Navigation locale={validLocale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={validLocale} />
    </>
  );
}

