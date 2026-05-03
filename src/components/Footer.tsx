import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative z-10 border-t border-white/[0.05] py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-600">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
