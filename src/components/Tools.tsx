import { motion } from 'framer-motion';
import { ExternalLinkIcon, StarIcon, BookOpenIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GradientText } from './ui/GradientText';
import BorderGlow from './ui/BorderGlow';
import { toolsData } from '../data/toolsData';

export function Tools() {
  const { t } = useTranslation();
  return (
    <section id="tools" className="relative z-10 py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold">
            {t('tools.title')}
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <BorderGlow
                borderRadius={20}
                glowRadius={28}
                glowColor="280 90 70"
                glowIntensity={0.6}
                innerGlowIntensity={0.4}
                edgeSensitivity={30}
                fillOpacity={0.3}
                colors={['#c084fc', '#f472b6', '#a78bfa']}
                backgroundColor="rgba(20, 15, 35, 0.45)"
                className="h-full"
              >
                <div className="p-5">
                  <img
                    src={tool.coverImage}
                    alt={tool.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {t(`tools.descriptions.${tool.slug}`, { defaultValue: tool.summary })}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        size={14}
                        className={i < tool.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">{tool.downloads}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {t('tools.viewOnAssetStore')} <ExternalLinkIcon size={14} />
                    </a>
                    {tool.documentationLink && (
                      <a
                        href={tool.documentationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <BookOpenIcon size={14} /> {t('tools.documentation')}
                      </a>
                    )}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
