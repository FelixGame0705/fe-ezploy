import { getTranslations, type Locale } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Ezploy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

