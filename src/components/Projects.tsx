import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { GradientText } from './ui/GradientText';
import { GlassCard } from './ui/GlassCard';
import { allProjects } from '../data/projects';

const itchProjects = allProjects.filter(p => p.links?.demo?.includes('itch.io'));

export function Projects() {
  return (
    <section id="games" className="relative z-10 py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold">
            Games
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itchProjects.map((project) => (
            <GlassCard key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/[0.05] text-gray-400 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.links?.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Play on Itch.io <ExternalLinkIcon size={14} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
