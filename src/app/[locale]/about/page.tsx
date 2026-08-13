import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('about');

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

        {/* Company Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Company Details */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {t('company.name')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('company.registration')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('company.registration')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('company.location')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('company.location')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('company.activity')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('company.activity')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('company.headquarters')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('company.headquarters')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Manager Information */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {t('manager.title')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Nom
                    </h3>
                    <p className="text-gray-600">
                      {t('manager.name')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('manager.birth')}
                    </h3>
                    <p className="text-gray-600">
                      {t('manager.birth')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Notre Mission
              </h2>
              <p className="text-gray-600 text-center text-lg">
                {t('mission')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Découvrez nos services
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Explorez notre gamme complète de services de voyage
            </p>
            <Link
              href={`/${locale}/services`}
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Nos Services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
