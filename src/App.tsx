import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetails } from './pages/ProjectDetails';
import { AllProjects } from './pages/AllProjects';
import { useAchievements } from './context/AchievementsContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToolDetails } from './pages/ToolDetails'

export function App() {
  const { updateAchievement } = useAchievements();

  const location = useLocation();

  const seenProjects = new Set<string>();


  useEffect(() => {
    if (location.pathname.startsWith('/project/')) {
      const id = location.pathname.split('/project/')[1];
      if (id && !seenProjects.has(id)) {
        seenProjects.add(id);
        updateAchievement(9); // Fouineur 🔎

        const count = seenProjects.size;
        if (count >= 3) updateAchievement(10); // Insatiable 🤯
        if (count >= 5) updateAchievement(11); // Glouton 💥
        if (count >= 7) updateAchievement(12); // Achiever 🏅
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/projects') {
      updateAchievement(8); // Succès "Explorer 📁"
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScrollToBottom = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
      if (bottom) {
        updateAchievement(7); // Succès "Scroll Master 🎢"
      }
    };

    window.addEventListener('scroll', handleScrollToBottom);
    return () => window.removeEventListener('scroll', handleScrollToBottom);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/tool/:id" element={<ToolDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
