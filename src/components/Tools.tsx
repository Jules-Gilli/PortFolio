import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, DownloadIcon, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toolsData } from '../data/toolsData';

export function Tools() {
  const featuredTools = toolsData.slice(0, 3);

  return (
    <section id="tools" className="py-20 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Outils</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Découvrez les assets et outils Unity que j'ai développés pour aider
            les autres créateurs de jeux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={tool.coverImage}
                  alt={tool.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {tool.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-400 mb-4 h-12 line-clamp-2">
                  {tool.summary}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <StarIcon size={16} className="text-yellow-500 mr-1" />
                    <span className="text-gray-300">{tool.rating}/5</span>
                  </div>
                  <div className="flex items-center">
                    <DownloadIcon size={16} className="text-purple-400 mr-1" />
                    <span className="text-gray-300">{tool.downloads}</span>
                  </div>
                </div>
                <Link
                  to={`/tool/${tool.id}`}
                  className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-purple-400 py-2 rounded-lg transition-colors"
                >
                  Voir les détails <ExternalLinkIcon size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/tools"
            className="inline-block border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voir tous les outils
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
