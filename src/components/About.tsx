import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GradientText } from './ui/GradientText';

const base = import.meta.env.BASE_URL;

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative z-10 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold">
            {t('about.title')}
          </GradientText>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-pink-500/30 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/20">
                <img
                  src={`${base}images/profile.png`}
                  alt="Jules Gilli"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
