import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, GamepadIcon } from 'lucide-react';
import { GradientText } from './ui/GradientText';

const links = [
  { icon: <MailIcon size={24} />, href: 'mailto:jules.gilli@live.fr', label: 'Email' },
  { icon: <GithubIcon size={24} />, href: 'https://github.com/JulesGilli', label: 'GitHub' },
  { icon: <LinkedinIcon size={24} />, href: 'https://www.linkedin.com/in/jules-gilli/', label: 'LinkedIn' },
  { icon: <GamepadIcon size={24} />, href: 'https://jules-gilli.itch.io', label: 'Itch.io' },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-12">
            Contact
          </GradientText>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-purple-400 transition-all group"
            >
              <div className="p-4 rounded-2xl glass group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all">
                {link.icon}
              </div>
              <span className="text-xs">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
