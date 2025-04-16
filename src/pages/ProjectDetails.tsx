import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, YoutubeIcon } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allProjects } from '../data/projects';
import { useAchievements } from '../context/AchievementsContext';

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.id === Number(id));

  const { achievements, updateAchievement, addViewedProject } = useAchievements();

  useEffect(() => {
    const found = achievements.find(a => a.id === 9);
    if (found && !found.isUnlocked) {
      updateAchievement(9, 1); // Succès "Fouineur"
    }

    if (project) {
      addViewedProject(project.id); // 🆕 Succès cumulables
    }
  }, [achievements, updateAchievement, addViewedProject, project]);



  if (!project) {
    return (
      <div className="pt-20 text-center text-white">
        <p>Projet introuvable.</p>
        <button
          onClick={() => navigate('/projects')}
          className="mt-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
        >
          Retour aux projets
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-purple-600/80 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-purple-400 hover:text-purple-500 mb-8"
            >
              <ArrowLeftIcon size={20} className="mr-2" />
              Retour aux projets
            </Link>
          </motion.div>

          {/* Description */}
          <motion.div
            className="prose prose-invert max-w-none mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            {project.fullDescription && (
              <p className="text-gray-400 whitespace-pre-line">
                {project.fullDescription}
              </p>
            )}
          </motion.div>

          {/* Gallery */}
          {project.gallery?.length && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg aspect-video"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Features and Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {project.features?.length && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-4">Caractéristiques</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.technologies?.length && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Links */}
          {project.links && (
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
                >
                  <ExternalLinkIcon size={20} className="mr-2" />
                  Try it
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="inline-flex items-center border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg"
                >
                  <GithubIcon size={20} className="mr-2" />
                  Code source
                </a>
              )}
              {project.links.youtube && (
                <a
                  href={project.links.youtube}
                  className="inline-flex items-center border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg"
                >
                  <YoutubeIcon size={20} className="mr-2" />
                  Voir le trailer
                </a>
              )}
              {project.links.download && (
                <a
                  href={project.links.download}
                  className="inline-flex items-center border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg"
                  download
                >
                  🎮 Télécharger le jeu
                </a>
              )}
              
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
