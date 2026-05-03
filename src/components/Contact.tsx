import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, GamepadIcon } from 'lucide-react';
import { GradientText } from './ui/GradientText';
import Dock, { type DockItemData } from './ui/Dock';

const dockItems: DockItemData[] = [
  {
    icon: <MailIcon size={22} className="text-purple-300" />,
    label: 'Email',
    onClick: () => window.open('mailto:jules.gilli@live.fr'),
  },
  {
    icon: <GithubIcon size={22} className="text-purple-300" />,
    label: 'GitHub',
    onClick: () => window.open('https://github.com/JulesGilli', '_blank', 'noopener,noreferrer'),
  },
  {
    icon: <LinkedinIcon size={22} className="text-purple-300" />,
    label: 'LinkedIn',
    onClick: () => window.open('https://www.linkedin.com/in/jules-gilli/', '_blank', 'noopener,noreferrer'),
  },
  {
    icon: <GamepadIcon size={22} className="text-purple-300" />,
    label: 'Itch.io',
    onClick: () => window.open('https://jules-gilli.itch.io', '_blank', 'noopener,noreferrer'),
  },
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
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </motion.div>
      </div>
    </section>
  );
}
