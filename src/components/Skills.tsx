import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAchievements } from '../context/AchievementsContext';

export function Skills() {
  const { updateAchievement } = useAchievements();
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const skillCategories = [
    {
      title: 'Développement & Tech',
      skills: [
        { name: 'Unity (C#)', level: 95 },
        { name: 'Java', level: 80 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 70 },
        { name: 'Python', level: 70 }
      ]
    },
    {
      title: 'Design & UX',
      skills: [
        { name: 'Game Design', level: 80 },
        { name: 'Level Design', level: 80 },
        { name: 'UX Design', level: 70 },
        { name: 'UI Design', level: 70 }
      ],
    },
    {
      title: 'Méthodologies & Outils',
      skills: [
        { name: 'Gestion de projet', level: 85 },
        { name: 'Versionning (Git)', level: 85 },
        { name: 'XR (AR/VR/MR)', level: 75 }
      ],
    },
    {
      title: 'Soft Skills & Divers',
      skills: [
        { name: 'Anglais (C1)', level: 80 },
        { name: 'Travail en équipe', level: 80 },
        { name: 'Autonomie', level: 80 }
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateAchievement(6); // Succès "Compétent 💼"
          }
        });
      },
      { threshold: 0.4 } // Quand 40% de la section est visible
    );
  
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
  
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Avec près de 6 ans sur Unity (C#), je conçois des jeux de A à Z en combinant code, game design et sensibilité UX. Mon parcours m'a aussi amené à maîtriser le développement web, la VR et la direction artistique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.1 * skillIndex,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
