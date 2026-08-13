import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ETS MALOUM VOYAGES</h3>
            <p className="text-gray-400 text-sm">
              Billetterie - Voyages - Hadj - Oumra
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 37274060</li>
              <li>📧 Maloumvoyage@gmail.com</li>
              <li>📍 Nouakchott, Mauritanie</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✈️ Billetterie</li>
              <li>🌍 Voyages</li>
              <li>🕋 Hadj</li>
              <li>🕌 Oumra</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{t('copyright')}</p>
          <p className="mt-2">{t('address')}</p>
        </div>
      </div>
    </footer>
  );
}
