'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';

export function LangSetter() {
  const pathname = usePathname();
  
  useEffect(() => {
    const locale = locales.find((loc) => pathname.startsWith(`/${loc}`)) || 'vi';
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}

