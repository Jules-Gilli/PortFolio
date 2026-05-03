import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, CheckIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUPPORTED_LANGUAGES, LANGUAGE_LABELS, type SupportedLanguage } from '../../i18n';

export function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2) as SupportedLanguage;
  const safeCurrent = (SUPPORTED_LANGUAGES as readonly string[]).includes(current) ? current : 'en';

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const change = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors px-2 py-1 rounded-lg"
        aria-label={t('language.label')}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <GlobeIcon size={16} />
        <span className="text-xs uppercase tracking-wide">{safeCurrent}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-2 min-w-[160px] py-2 rounded-xl border border-white/10 bg-[#15102a]/95 shadow-xl backdrop-blur-md z-50"
            style={{ backdropFilter: 'blur(14px) saturate(120%)' }}
          >
            {SUPPORTED_LANGUAGES.map((lng) => {
              const isActive = lng === safeCurrent;
              const meta = LANGUAGE_LABELS[lng];
              return (
                <li key={lng}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => change(lng)}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-1.5 text-sm transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden>{meta.flag}</span>
                      <span>{meta.native}</span>
                    </span>
                    {isActive && <CheckIcon size={14} className="text-purple-400" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
