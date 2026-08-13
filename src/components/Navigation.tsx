'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const locales = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLocale = pathname.split('/')[1] || 'fr';

  const changeLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const navItems = [
    { key: 'home', href: `/${currentLocale}` },
    { key: 'services', href: `/${currentLocale}/services` },
    { key: 'about', href: `/${currentLocale}/about` },
    { key: 'contact', href: `/${currentLocale}/contact` }
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="text-xl font-bold">
              ETS MALOUM VOYAGES
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`hover:text-blue-200 transition-colors ${
                  pathname === item.href ? 'text-blue-200 font-semibold' : ''
                }`}
              >
                {t(item.key as any)}
              </Link>
            ))}

            <div className="relative">
              <select
                value={currentLocale}
                onChange={(e) => changeLocale(e.target.value)}
                className="bg-blue-800 text-white px-3 py-1 rounded border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locales.map((locale) => (
                  <option key={locale.code} value={locale.code}>
                    {locale.flag} {locale.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-3 py-2 rounded-md hover:bg-blue-700 ${
                  pathname === item.href ? 'bg-blue-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(item.key as any)}
              </Link>
            ))}

            <div className="px-3 py-2">
              <select
                value={currentLocale}
                onChange={(e) => changeLocale(e.target.value)}
                className="bg-blue-700 text-white px-3 py-1 rounded border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                {locales.map((locale) => (
                  <option key={locale.code} value={locale.code}>
                    {locale.flag} {locale.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
