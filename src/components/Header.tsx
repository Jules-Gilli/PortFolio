import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, TrophyIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AchievementsDrawer } from './ui/AchievementsDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Projets', href: '#projects' },
    { name: 'Tools', href: '#tools' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('hero')}
          >
            Jules<span className="text-purple-500">Gilli</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map(item => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href.replace('#', ''))}
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
            <motion.button
              onClick={() => setAchievementsOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrophyIcon size={20} className="text-yellow-500" />
              <span>Succès</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={() => setAchievementsOpen(true)}
              className="p-2 hover:bg-gray-800/50 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrophyIcon size={20} className="text-yellow-500" />
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-purple-500 focus:outline-none"
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href.replace('#', ''));
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-purple-500 py-2 transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Success Drawer */}
      <AchievementsDrawer isOpen={achievementsOpen} onClose={() => setAchievementsOpen(false)} />
    </>
  );
}
