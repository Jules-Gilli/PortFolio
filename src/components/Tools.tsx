import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLinkIcon, DownloadIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
interface Tool {
  id: number
  name: string
  description: string
  image: string
  category: string
  rating: number
  downloads: string
  link: string
}
export function Tools() {
  const tools: Tool[] = [
    {
      id: 1,
      name: 'Procedural Terrain Generator',
      description:
        'Générez des terrains réalistes avec des options de personnalisation avancées pour vos environnements de jeu.',
      image:
        'https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Environment',
      rating: 4.8,
      downloads: '12K+',
      link: '#',
    },
    {
      id: 2,
      name: 'Dynamic Dialogue System',
      description:
        'Système de dialogue branché avec support pour les variables et conditions de jeu.',
      image:
        'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'UI/UX',
      rating: 4.6,
      downloads: '8K+',
      link: '#',
    },
    {
      id: 3,
      name: 'Particle FX Pack',
      description:
        "Collection d'effets de particules optimisés pour les jeux mobiles et PC.",
      image:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'VFX',
      rating: 4.9,
      downloads: '20K+',
      link: '#',
    },
    {
      id: 4,
      name: 'Inventory System Pro',
      description:
        "Système d'inventaire complet avec drag & drop, catégories et crafting.",
      image:
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Gameplay',
      rating: 4.7,
      downloads: '15K+',
      link: '#',
    },
    {
      id: 5,
      name: 'AI Behavior Framework',
      description:
        "Framework d'IA modulaire pour créer des comportements d'ennemis complexes et réalistes.",
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'AI',
      rating: 4.5,
      downloads: '7K+',
      link: '#',
    },
    {
      id: 6,
      name: 'Mobile Controls Pack',
      description:
        'Contrôles tactiles personnalisables avec support pour différents types de jeux.',
      image:
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Mobile',
      rating: 4.4,
      downloads: '10K+',
      link: '#',
    },
  ]
  return (
    <section id="tools" className="py-20 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Outils</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Découvrez les assets et outils Unity que j'ai développés pour aider
            les autres créateurs de jeux.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {tool.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-400 mb-4 h-12 line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <StarIcon size={16} className="text-yellow-500 mr-1" />
                    <span className="text-gray-300">{tool.rating}/5</span>
                  </div>
                  <div className="flex items-center">
                    <DownloadIcon size={16} className="text-purple-400 mr-1" />
                    <span className="text-gray-300">{tool.downloads}</span>
                  </div>
                </div>
                <Link
                  to={`/tool/${tool.id}`}
                  className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-purple-400 py-2 rounded-lg transition-colors"
                >
                  Voir les détails{' '}
                  <ExternalLinkIcon size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          <Link
            to="/tools"
            className="inline-block border border-purple-500 text-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voir tous les outils
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
