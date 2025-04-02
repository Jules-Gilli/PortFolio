import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, TrophyIcon, StarIcon, LockIcon } from 'lucide-react';
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
const achievements: Achievement[] = [{
  id: 1,
  title: 'Développeur Débutant',
  description: 'Créer votre premier jeu',
  progress: 1,
  maxProgress: 1,
  isUnlocked: true,
  icon: '🎮',
  rarity: 'common'
}, {
  id: 2,
  title: 'Game Designer Confirmé',
  description: 'Créer 5 jeux différents',
  progress: 3,
  maxProgress: 5,
  isUnlocked: false,
  icon: '🎲',
  rarity: 'rare'
}, {
  id: 3,
  title: 'Maître du Code',
  description: 'Atteindre 1000 lignes de code sans bug',
  progress: 750,
  maxProgress: 1000,
  isUnlocked: false,
  icon: '💻',
  rarity: 'epic'
}, {
  id: 4,
  title: 'Artiste 3D',
  description: 'Créer 10 modèles 3D',
  progress: 4,
  maxProgress: 10,
  isUnlocked: false,
  icon: '🎨',
  rarity: 'rare'
}, {
  id: 5,
  title: 'Game Dev Legend',
  description: 'Obtenir 100,000 téléchargements',
  progress: 25000,
  maxProgress: 100000,
  isUnlocked: false,
  icon: '👑',
  rarity: 'legendary'
}];
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
export function AchievementsDrawer({
  isOpen,
  onClose
}: AchievementsDrawerProps) {
  const totalProgress = achievements.reduce((acc, achievement) => {
    return acc + achievement.progress / achievement.maxProgress;
  }, 0);
  const overallProgress = totalProgress / achievements.length * 100;
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
          {/* Drawer */}
          <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 20
      }} className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-900 shadow-xl z-50 overflow-hidden">
            {/* Header */}
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
              {/* Overall Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Progression totale</span>
                  <span>{Math.round(overallProgress)}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" initial={{
                width: 0
              }} animate={{
                width: `${overallProgress}%`
              }} transition={{
                duration: 1,
                delay: 0.2
              }} />
                </div>
              </div>
            </div>
            {/* Achievements List */}
            <div className="p-4 space-y-4 h-[calc(100vh-120px)] overflow-y-auto">
              {achievements.map(achievement => {
            const progress = achievement.progress / achievement.maxProgress * 100;
            return <motion.div key={achievement.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3
            }} className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 relative overflow-hidden ${achievement.isUnlocked ? '' : 'opacity-75'}`}>
                    {/* Rarity Indicator */}
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
                        <p className="text-sm text-gray-400 mb-2">
                          {achievement.description}
                        </p>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs text-gray-400">
                            <span>Progression</span>
                            <span>
                              {achievement.progress}/{achievement.maxProgress}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div className={`h-full bg-gradient-to-r ${rarityGradients[achievement.rarity]} to-transparent`} initial={{
                        width: 0
                      }} animate={{
                        width: `${progress}%`
                      }} transition={{
                        duration: 1
                      }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>;
          })}
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}