import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, TrophyIcon, LockIcon } from 'lucide-react';
import { useAchievements } from '../../context/AchievementsContext';

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
  const { achievements, updateAchievement } = useAchievements();

  useEffect(() => {
    const unlockByScroll = () => {
      const contact = document.getElementById('contact');
      if (contact && window.scrollY + window.innerHeight >= contact.offsetTop) {
        updateAchievement(2, 1);
      }
    };

    if (isOpen) {
      const curious = achievements.find(a => a.id === 3);
      if (curious && !curious.isUnlocked) {
        updateAchievement(3, 1);
      }
    }

    window.addEventListener('scroll', unlockByScroll);
    return () => window.removeEventListener('scroll', unlockByScroll);
  }, [isOpen, updateAchievement, achievements]);

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

  // ⬇️ Tri des succès par rareté
  const rarityOrder = ['common', 'rare', 'epic', 'legendary'];
  const sortedAchievements = [...achievements].sort(
    (a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
  );

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
              {sortedAchievements.map(achievement => {
                const progress = (achievement.progress / achievement.maxProgress) * 100;
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 relative overflow-hidden ${achievement.isUnlocked ? '' : 'opacity-75'
                      }`}
                  >
                    <div className="absolute top-0 right-0">
                      <div className={`px-2 py-1 text-xs ${rarityColors[achievement.rarity]} rounded-bl-lg`}>
                        {achievement.rarity}
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-2xl transition-all duration-300
                        ${!achievement.isUnlocked ? 'filter grayscale opacity-50' : ''}`}
                      >
                        {achievement.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          {!achievement.isUnlocked && <LockIcon size={14} className="text-gray-500" />}
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          {achievement.maxProgress > 1
                            ? `${achievement.description} (${achievement.progress}/${achievement.maxProgress})`
                            : achievement.description}
                        </p>
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
