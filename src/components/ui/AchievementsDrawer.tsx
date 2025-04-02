import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, TrophyIcon, LockIcon } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AchievementsDrawer({ isOpen, onClose }: AchievementsDrawerProps) {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 1,
      title: 'Bienvenue 👋',
      description: 'Visitez le site',
      progress: 1,
      maxProgress: 1,
      isUnlocked: true,
      icon: '👋',
      rarity: 'common'
    },
    {
      id: 2,
      title: 'Explorateur 🔍',
      description: 'Scrollez jusqu’à la section Contact',
      progress: 0,
      maxProgress: 1,
      isUnlocked: false,
      icon: '🧭',
      rarity: 'common'
    },
    {
      id: 3,
      title: 'Curieux 😺',
      description: 'Ouvrez le panneau des succès',
      progress: 0,
      maxProgress: 1,
      isUnlocked: false,
      icon: '📜',
      rarity: 'rare'
    },
    {
      id: 4,
      title: 'Message Reçu 📬',
      description: 'Envoyez un message depuis le formulaire de contact',
      progress: 0,
      maxProgress: 1,
      isUnlocked: false,
      icon: '✉️',
      rarity: 'epic'
    },
    {
      id: 5,
      title: 'Légende Vivante 🧠',
      description: 'Débloquez tous les succès',
      progress: 0,
      maxProgress: 4,
      isUnlocked: false,
      icon: '🏆',
      rarity: 'legendary'
    }
  ]);

  // Débloquer certains succès selon des actions
  useEffect(() => {
    const unlockByScroll = () => {
      const contact = document.getElementById('contact');
      if (contact && window.scrollY + window.innerHeight >= contact.offsetTop) {
        updateAchievement(2, 1);
      }
    };

    // Le succès "Curieux" se débloque quand le panneau est ouvert
    if (isOpen) {
      updateAchievement(3, 1);
    }

    window.addEventListener('scroll', unlockByScroll);
    return () => window.removeEventListener('scroll', unlockByScroll);
  }, [isOpen]);

  const updateAchievement = (id: number, progressToAdd = 1) => {
    setAchievements(prev =>
      prev.map(ach =>
        ach.id === id && ach.progress < ach.maxProgress
          ? {
              ...ach,
              progress: ach.progress + progressToAdd,
              isUnlocked: ach.progress + progressToAdd >= ach.maxProgress
            }
          : ach
      )
    );
  };

  // Mettre à jour la progression du succès "Légende Vivante"
  useEffect(() => {
    const unlockedCount = achievements.filter(a => a.isUnlocked && a.id !== 5).length;
    setAchievements(prev =>
      prev.map(ach =>
        ach.id === 5
          ? {
              ...ach,
              progress: unlockedCount,
              isUnlocked: unlockedCount === 4
            }
          : ach
      )
    );
  }, [achievements]);

  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  };

  const rarityGradients = {
    common: 'from-gray-500',
    rare: 'from-blue-500',
    epic: 'from-purple-500',
    legendary: 'from-yellow-500'
  };

  const totalProgress =
    achievements.reduce((acc, ach) => acc + ach.progress / ach.maxProgress, 0) /
    achievements.length *
    100;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-900 shadow-xl z-50 overflow-hidden"
          >
            <div className="border-b border-gray-800 p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <TrophyIcon className="text-yellow-500" size={24} />
                  <h2 className="text-xl font-bold">Succès</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <XIcon size={20} />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Progression totale</span>
                  <span>{Math.round(totalProgress)}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${totalProgress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4 h-[calc(100vh-120px)] overflow-y-auto">
              {achievements.map(achievement => {
                const progress = (achievement.progress / achievement.maxProgress) * 100;
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 relative overflow-hidden ${
                      achievement.isUnlocked ? '' : 'opacity-75'
                    }`}
                  >
                    <div className="absolute top-0 right-0">
                      <div className={`px-2 py-1 text-xs ${rarityColors[achievement.rarity]} rounded-bl-lg`}>
                        {achievement.rarity}
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-2xl">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          {!achievement.isUnlocked && <LockIcon size={14} className="text-gray-500" />}
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs text-gray-400">
                            <span>Progression</span>
                            <span>
                              {achievement.progress}/{achievement.maxProgress}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${rarityGradients[achievement.rarity]} to-transparent`}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
