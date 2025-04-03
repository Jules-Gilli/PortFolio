import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon } from 'lucide-react';
import { useAchievements } from '../context/AchievementsContext';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const { updateAchievement } = useAchievements();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);

    updateAchievement(4); // ID du succès "Message Reçu 📬"

    setFormState({
      name: '',
      email: '',
      message: ''
    });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000); // Masque après 4 secondes
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 w-full relative">
      {/* ✅ SUCCÈS ANIMÉ */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50"
          >
            <CheckCircleIcon size={20} />
            <span>Message envoyé avec succès !</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Intéressé par une collaboration ou avez-vous des questions ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">Parlons de votre projet</h3>
            <p className="text-gray-400">
              Je suis toujours curieux d'échanger autour de projets interactifs ou immersifs.
              Que ce soit pour du freelance, une collaboration ou simplement discuter Game Design, écris-moi !
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <MailIcon size={24} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-400">jules.gilli@live.fr</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <PhoneIcon size={24} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Téléphone</h4>
                  <p className="text-gray-400">+33 6 51 43 26 92</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <MapPinIcon size={24} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Localisation</h4>
                  <p className="text-gray-400">Toulouse, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <motion.button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Envoyer <SendIcon size={18} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
