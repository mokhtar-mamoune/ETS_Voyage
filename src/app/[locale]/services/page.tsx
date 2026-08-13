import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('services');
  
  // Pre-fetch features data
  const servicesData = {
    billetterie: { features: t.raw('billetterie.features') as string[] },
    voyages: { features: t.raw('voyages.features') as string[] },
    hadj: { features: t.raw('hadj.features') as string[] },
    oumra: { features: t.raw('oumra.features') as string[] }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {['billetterie', 'voyages', 'hadj', 'oumra'].map((service) => (
                <div
                  key={service}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-blue-100 p-8 flex items-center justify-center">
                      <span className="text-6xl">
                        {service === 'billetterie' && '✈️'}
                        {service === 'voyages' && '🌍'}
                        {service === 'hadj' && '🕋'}
                        {service === 'oumra' && '🕌'}
                      </span>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">
                        {t(`${service}.title`)}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {t(`${service}.description`)}
                      </p>
                      <ul className="space-y-2">
                        {servicesData[service as keyof typeof servicesData].features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour discuter de vos besoins spécifiques
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
