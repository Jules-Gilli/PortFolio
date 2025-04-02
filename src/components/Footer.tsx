import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/JulesGilli',
    label: 'Github'
  }, {
    icon: <TwitterIcon size={20} />,
    href: '#',
    label: 'Twitter'
  }, {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/jules-gilli/',
    label: 'LinkedIn'
  }, {
    icon: <InstagramIcon size={20} />,
    href: '#',
    label: 'Instagram'
  }];
  return <footer className="bg-gray-900 border-t border-gray-800 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-4 md:mb-0" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-gray-400">
              © {currentYear} Jules<span className="text-purple-500">Gilli</span>.
              Tous droits réservés.
            </p>
          </motion.div>
          <motion.div className="flex space-x-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            {socialLinks.map((social, index) => <motion.a key={index} href={social.href} className="text-gray-400 hover:text-purple-500 transition-colors" aria-label={social.label} whileHover={{
            y: -3
          }} whileTap={{
            scale: 0.9
          }}>
                {social.icon}
              </motion.a>)}
          </motion.div>
        </div>
      </div>
    </footer>;
}