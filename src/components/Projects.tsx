import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ui/ProjectCard';
import { Link } from 'react-router-dom';

export function Projects() {
  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      id: 1,
      title: 'Medieval Skirmish',
      description: 'Jeu de puzzle stratégique inspiré des tower defense, avec mécanique de redéploiement.',
      image: `${base}images/MedievalSkirmish_01.png`,
      tags: ['Unity', 'C#', 'Tower Defense', 'Puzzle'],
      link: '#'
    },
    {
      id: 2,
      title: 'En Vers et Contre Tous',
      description: "Party game 3D réalisé en 48h pour la Global Game Jam 2023 sur le thème 'écorce'.",
      image: `${base}images/Enversetcontretous_01.png`,
      tags: ['Unity', 'Game Jam', 'Party Game', '3D'],
      link: '#'
    },
    {
      id: 3,
      title: 'Cursum',
      description: 'Prototype solo de runner/FPS avec glissade, wall-run et chronomètre.',
      image: `${base}images/Cursum_01.png`,
      tags: ['Unity', 'FPS', 'Runner', 'Solo Dev'],
      link: '#'
    },
    {
      id: 4,
      title: 'Keep Dancing to Live',
      description: "Un jeu d'esquive et de rythme délirant, réalisé lors de la Global Game Jam 2024.",
      image: `${base}images/KeepDancing_01.png`,
      tags: ['Unity', 'Game Jam', 'Rythme', '3D'],
      link: '#'
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Voici une sélection de mes jeux réalisés en game jams, en solo ou en équipe,
            ainsi que des projets web récents développés à Epitech avec des technos variées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
            to="/projects"
            className="inline-block border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voir tous les projets
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
