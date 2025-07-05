import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon, GraduationCapIcon, GamepadIcon } from 'lucide-react'
interface TimelineItem {
  id: number
  year: string
  title: string
  description: string
  type: 'education' | 'experience' | 'project'
  technologies?: string[]
}
export function Timeline() {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: '2018',
      title: 'Baccalauréat STI2D',
      description: 'Bac technologique orienté innovation, technologies et développement durable.',
      type: 'education',
    },
    {
      id: 2,
      year: '2019–2022',
      title: 'Bachelor Game Design & Creative Coding',
      description: 'Formation axée sur le développement de jeux vidéo, design interactif et programmation créative.',
      type: 'education',
      technologies: ['Unity', 'C#', 'Game Design', 'Creative Tech'],
    },
    {
      id: 5,
      year: '2021',
      title: 'Graphiste 3D (Stage) – Tork-VR',
      description: 'Stage en design graphique et modélisation 3D pour projets en réalité virtuelle.',
      type: 'experience',
      technologies: ['Blender', 'Unity', 'VR', 'Photoshop'],
    },
    {
      id: 4,
      year: '2022–2024',
      title: 'Master Audiovisuel, Médias Interactifs Numériques, Jeux',
      description: 'Master AMINJ à l’INU Champollion, spécialisé en création de jeux numériques et développement Unity.',
      type: 'education',
      technologies: ['Unity', 'Level Design', 'Narrative', 'Tooling'],
    },
    {
      id: 6,
      year: '2023–Aujourd’hui',
      title: 'Développeur Unity (Alternance) – Koboct',
      description: 'Développement d’outils internes, prototypage VR/3D et travail sur des applications temps réel.',
      type: 'experience',
      technologies: ['Unity', 'C#', 'XR', 'UI/UX', 'Editor Tools'],
    },
    {
      id: 3,
      year: '2024–2027',
      title: 'Master Pro Information Systems Architect',
      description:
        'Master d’Epitech orienté expertise en gestion de projets numériques, combinant compétences techniques avancées, management agile et maîtrise de l’anglais technique.',
      type: 'education',
      technologies: ['Architecture Logicielle', 'Gestion de projet', 'Agile', 'DevOps', 'English Tech'],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCapIcon size={24} />
      case 'experience':
        return <BriefcaseIcon size={24} />
      case 'project':
        return <GamepadIcon size={24} />
      default:
        return null
    }
  }
  return (
    <section className="py-20 bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Parcours</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Découvrez mon évolution dans l'industrie du jeu vidéo, de mes études
            à mes projets actuels.
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-purple-500/30" />
          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-900/20 transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-400 font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Icon */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="text-white">{getIcon(item.type)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
