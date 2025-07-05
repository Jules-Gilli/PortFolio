import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

type Tool = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
};

const allTools: Tool[] = [
  {
    id: 1,
    title: 'Project Organizer',
    description: 'Organise automatiquement vos fichiers Unity dans votre projet.',
    image: '/images/tools/project-organizer.gif',
    tags: ['Unity', 'Organisation', 'Editor Tool'],
    category: 'Productivité',
    link: 'https://assetstore.unity.com/packages/tools/utilities/project-organizer-233336',
  },
  {
    id: 2,
    title: 'Code Harvest',
    description: 'Exporte et documente vos scripts Unity en Markdown.',
    image: '/images/tools/code-harvest.png',
    tags: ['Documentation', 'Export', 'Tooling'],
    category: 'Utilitaire',
    link: 'https://assetstore.unity.com/packages/tools/utilities/code-harvest-255708',
  },
  {
    id: 3,
    title: 'Level Snapshot',
    description: 'Capture et restaure la position des objets dans vos scènes Unity.',
    image: '/images/tools/level-snapshot.png',
    tags: ['Scène', 'Restauration'],
    category: 'Debug',
    link: 'https://assetstore.unity.com/packages/tools/utilities/level-snapshot-xxxxxx',
  },
  // Ajoute d'autres tools ici
];

export function AllTools() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', ...Array.from(new Set(allTools.map((tool) => tool.category)))];

  const filteredTools =
    selectedCategory === 'Tous'
      ? allTools
      : allTools.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="w-full min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white">🛠️ Tous mes outils Unity</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Explore les outils que j’ai développés pour Unity, filtrables par catégorie.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:underline text-sm"
                >
                  Voir sur l’Asset Store <ExternalLinkIcon size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
