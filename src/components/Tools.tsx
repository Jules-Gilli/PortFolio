import { motion } from 'framer-motion';
import { ExternalLinkIcon, StarIcon } from 'lucide-react';
import { GradientText } from './ui/GradientText';
import { GlassCard } from './ui/GlassCard';
import { toolsData } from '../data/toolsData';

export function Tools() {
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
            Unity Tools
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool) => (
            <GlassCard key={tool.id}>
              <img
                src={tool.coverImage}
                alt={tool.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-2">{tool.summary}</p>
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
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                View on Asset Store <ExternalLinkIcon size={14} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
