import { getTranslations, type Locale } from '@/lib/i18n';

export function ComingSoon({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
      {t.common.comingSoon}
    </span>
  );
}

