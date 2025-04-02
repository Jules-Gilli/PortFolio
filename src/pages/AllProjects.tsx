import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { allProjects } from '../data/projects';

export function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const allTags = ['all', ...new Set(allProjects.flatMap(project => project.tags))];
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  return <div className="pt-20 min-h-screen w-full bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tous les Projets
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez l'ensemble de mes projets de développement de jeux, des
            jeux mobiles casual aux expériences narratives complexes.
          </p>
        </motion.div>
        {/* Search and Filter */}
        <motion.div className="mb-12 space-y-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Rechercher un projet..." className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => <motion.button key={tag} className={`px-4 py-2 rounded-full text-sm ${selectedTag === tag ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`} onClick={() => setSelectedTag(tag)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {tag === 'all' ? 'Tous' : tag}
              </motion.button>)}
          </div>
        </motion.div>
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => <motion.div key={project.id} layout initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }}>
                <ProjectCard project={project} index={index} />
              </motion.div>)}
          </AnimatePresence>
        </motion.div>
        {/* No Results Message */}
        {filteredProjects.length === 0 && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center text-gray-400 py-12">
            Aucun projet ne correspond à votre recherche.
          </motion.div>}
      </div>
    </div>;
}