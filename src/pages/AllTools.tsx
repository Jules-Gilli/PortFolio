import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { toolsData } from '../data/toolsData';
import { Link } from 'react-router-dom';

export function AllTools() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const categories = ['Tous', ...Array.from(new Set(toolsData.map((tool) => tool.category)))];

    const filteredTools =
        selectedCategory === 'Tous'
            ? toolsData
            : toolsData.filter((tool) => tool.category === selectedCategory);

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
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedCategory === cat
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
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={tool.coverImage}
                                    alt={tool.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{tool.summary}</p>
                                <Link
                                    to={`/tool/${tool.id}`}
                                    className="inline-flex items-center text-purple-400 hover:underline text-sm"
                                >
                                    Voir les détails <ExternalLinkIcon size={16} className="ml-1" />
                                </Link>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
