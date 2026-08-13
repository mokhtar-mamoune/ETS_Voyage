import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('hero.subtitle')}
            </p>
            <Link
              href={`/${locale}/services`}
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              {t('services.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('services.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['billetterie', 'voyages', 'hadj', 'oumra'].map((service) => (
                <div
                  key={service}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">
                    {service === 'billetterie' && '✈️'}
                    {service === 'voyages' && '🌍'}
                    {service === 'hadj' && '🕋'}
                    {service === 'oumra' && '🕌'}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t(`services.${service}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`services.${service}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('why.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['experience', 'trust', 'support'].map((feature) => (
                <div key={feature} className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">
                      {feature === 'experience' && '⭐'}
                      {feature === 'trust' && '🤝'}
                      {feature === 'support' && '💬'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t(`why.${feature}`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`why.${feature}_desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à planifier votre prochain voyage ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous dès aujourd'hui pour commencer votre aventure
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
