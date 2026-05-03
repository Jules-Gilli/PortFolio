import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './ui/LanguageSelector';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'games', href: '#games' },
  { key: 'tools', href: '#tools' },
  { key: 'contact', href: '#contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setScrolled((cur) => (cur === next ? cur : next));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      className="header-wrap"
      data-scrolled={scrolled || undefined}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="header-nav">
        <a href="#hero" className="brand-link">
          Jules<span className="gradient-text">Gilli</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <LanguageSelector />
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="pointer-events-auto md:hidden absolute top-full mt-2 left-4 right-4 glass p-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
