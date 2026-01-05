'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTranslations, type Locale } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Rocket, Menu, X } from 'lucide-react';

export function Navigation({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/deploy`, label: t.nav.deploy },
    { href: `/${locale}/website`, label: t.nav.website },
    { href: `/${locale}/about`, label: t.nav.about },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
            <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span>Ezploy</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden dark:border-gray-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

