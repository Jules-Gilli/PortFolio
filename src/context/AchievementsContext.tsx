// src/context/AchievementsContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  icon: string;
  rarity: Rarity;
}

interface AchievementsContextType {
  achievements: Achievement[];
  updateAchievement: (id: number, progressToAdd?: number) => void;
  addViewedProject: (projectId: number) => void;
}

const AchievementsContext = createContext<AchievementsContextType | undefined>(undefined);

const defaultAchievements: Achievement[] = [
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
    maxProgress: 12,
    isUnlocked: false,
    icon: '🏆',
    rarity: 'legendary'
  },
  {
    id: 6,
    title: 'Compétent 💼',
    description: 'Voir la section Compétences',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    icon: '💼',
    rarity: 'common'
  },
  {
    id: 7,
    title: 'Scroll Master 🎢',
    description: 'Scroller jusqu’en bas de la page',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    icon: '🎢',
    rarity: 'common'
  },
  {
    id: 8,
    title: 'Explorer 📁',
    description: 'Aller sur la page Tous les projets',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    icon: '📁',
    rarity: 'rare'
  },
  {
    id: 9,
    title: 'Fouineur 🔎',
    description: 'Ouvrir un projet en détail',
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    icon: '🔍',
    rarity: 'rare'
  },
  {
    id: 10,
    title: 'Insatiable 🤯',
    description: 'Voir 3 projets',
    progress: 0,
    maxProgress: 3,
    isUnlocked: false,
    icon: '🤯',
    rarity: 'epic'
  },
  {
    id: 11,
    title: 'Glouton 💥',
    description: 'Voir 5 projets',
    progress: 0,
    maxProgress: 5,
    isUnlocked: false,
    icon: '💥',
    rarity: 'epic'
  },
  {
    id: 12,
    title: 'Achiever 🏅',
    description: 'Voir 7 projets',
    progress: 0,
    maxProgress: 7,
    isUnlocked: false,
    icon: '🏅',
    rarity: 'epic'
  },

];

export const AchievementsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements);
  const [viewedProjectIds, setViewedProjectIds] = useState<Set<number>>(new Set());

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

  const addViewedProject = (projectId: number) => {
    setViewedProjectIds(prev => {
      if (prev.has(projectId)) return prev;

      const updated = new Set(prev);
      updated.add(projectId);

      if (updated.size >= 3) updateAchievement(10); // Insatiable
      if (updated.size >= 5) updateAchievement(11); // Glouton
      if (updated.size >= 7) updateAchievement(12); // Achiever

      return updated;
    });
  };

  useEffect(() => {
    const unlocked = achievements.filter(a => a.isUnlocked && a.id !== 5).length;
    const legend = achievements.find(a => a.id === 5);
  
    if (!legend) return;
  
    const shouldUnlock = unlocked === achievements.length - 1;
  
    if (legend.progress === unlocked && legend.isUnlocked === shouldUnlock) return;
  
    setAchievements(prev =>
      prev.map(ach =>
        ach.id === 5
          ? { ...ach, progress: unlocked, isUnlocked: shouldUnlock }
          : ach
      )
    );
  }, [achievements]);
  

  return (
    <AchievementsContext.Provider value={{ achievements, updateAchievement, addViewedProject }}>
      {children}
    </AchievementsContext.Provider>
  );
};


export const useAchievements = () => {
  const context = useContext(AchievementsContext);
  if (!context) throw new Error('useAchievements must be used within AchievementsProvider');
  return context;
};
