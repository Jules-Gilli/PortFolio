import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GradientText } from './ui/GradientText';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText as="h1" className="text-6xl md:text-8xl font-bold tracking-tight">
            Jules Gilli
          </GradientText>
        </motion.div>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.p
          className="mt-4 text-gray-500 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.a
          href="#games"
          className="inline-block mt-10 px-7 py-3 rounded-full text-sm text-gray-200 hover:text-white transition-all border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderColor: 'rgba(139, 92, 246, 0.3)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.cta')}
        </motion.a>
      </div>
    </section>
  );
}
