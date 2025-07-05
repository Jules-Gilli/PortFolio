import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeftIcon,
  DownloadIcon,
  StarIcon,
  TagIcon,
  CalendarIcon,
  UsersIcon,
  CodeIcon,
  LayersIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from 'lucide-react'
import { toolsData } from '../data/toolsData'
import { ReadmeViewer } from '../components/ReadmeViewer'
export function ToolDetails() {
  const { id } = useParams<{
    id: string
  }>()
  const [tool, setTool] = useState<any>(null)
  const [activeImage, setActiveImage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    // Simulate loading data
    setLoading(true)
    setTimeout(() => {
      const foundTool = toolsData.find((t) => t.id.toString() === id)
      if (foundTool) {
        setTool(foundTool)
        setActiveImage(foundTool.images[0])
      }
      setLoading(false)
    }, 500)
  }, [id])
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }
  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Outil non trouvé</h1>
        <p className="mb-8">
          L'outil que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/tools"
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          <ArrowLeftIcon size={16} className="mr-2" />
          Retour aux outils
        </Link>
      </div>
    )
  }
  return (
    <div className="bg-gray-900 w-full py-32">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm text-gray-400 hover:text-purple-500"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link
                    to="/tools"
                    className="text-sm text-gray-400 hover:text-purple-500"
                  >
                    Outils
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm text-gray-500">{tool.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {/* Header */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-12">
          <div className="h-64 md:h-96 relative">
            <img
              src={tool.coverImage}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {tool.category}
                </span>
                <div className="flex items-center bg-gray-900/80 px-3 py-1 rounded-full">
                  <StarIcon size={16} className="text-yellow-500 mr-1" />
                  <span className="text-white text-sm">{tool.rating}/5</span>
                </div>
                <div className="flex items-center bg-gray-900/80 px-3 py-1 rounded-full">
                  <DownloadIcon size={16} className="text-purple-400 mr-1" />
                  <span className="text-white text-sm">{tool.downloads}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Summary */}
            <motion.section
              className="bg-gray-800 rounded-xl p-8 mb-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">Résumé</h2>
              <p className="text-gray-300 leading-relaxed">{tool.summary}</p>
            </motion.section>
            {/* Description */}
            <motion.section
              className="bg-gray-800 rounded-xl p-8 mb-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                {tool.description.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.section>
            {/* Technical Description */}
            <motion.section
              className="bg-gray-800 rounded-xl p-8 mb-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Spécifications techniques
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">
                    Compatibilité
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {tool.compatibility.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">
                    Fonctionnalités
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tool.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon
                          size={18}
                          className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">
                    Spécifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(tool.specs).map(
                      ([key, value]: [string, any], index: number) => (
                        <div
                          key={index}
                          className="bg-gray-700/50 p-4 rounded-lg"
                        >
                          <h4 className="text-sm text-gray-400 mb-1">{key}</h4>
                          <p className="text-white font-medium">{value}</p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Gallery */}
            <motion.section
              className="bg-gray-800 rounded-xl p-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
            >
              <h2 className="text-2xl font-bold mb-6">Galerie</h2>
              <div className="mb-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                  <img
                    src={activeImage}
                    alt="Screenshot"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {tool.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${activeImage === image ? 'border-purple-500 scale-105' : 'border-transparent hover:border-gray-600'}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.section>

            {/* README intégré */}
            <motion.section
              className="bg-gray-800 rounded-xl p-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Documentation</h2>
              <ReadmeViewer slug={tool.slug} />
            </motion.section>

          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Purchase/Download Card */}
              <motion.div
                className="bg-gray-800 rounded-xl p-6 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">{tool.price}</div>
                  <div className="text-gray-400 text-sm">Licence Unity Asset Store</div>
                </div>

                <a
                  href={tool.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Voir sur l’Asset Store
                </a>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Dernière mise à jour</span>
                    <span className="text-white">{tool.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Version</span>
                    <span className="text-white">{tool.version}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Taille</span>
                    <span className="text-white">{tool.fileSize}</span>
                  </div>
                </div>
              </motion.div>
              {/* Info Cards */}
              <motion.div
                className="bg-gray-800 rounded-xl p-6"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <TagIcon
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5"
                    />
                    <div>
                      <div className="text-sm text-gray-400">Catégorie</div>
                      <div className="text-white">{tool.category}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarIcon
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5"
                    />
                    <div>
                      <div className="text-sm text-gray-400">Publié le</div>
                      <div className="text-white">{tool.publishDate}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <UsersIcon
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5"
                    />
                    <div>
                      <div className="text-sm text-gray-400">Utilisateurs</div>
                      <div className="text-white">{tool.users}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CodeIcon
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5"
                    />
                    <div>
                      <div className="text-sm text-gray-400">Langage</div>
                      <div className="text-white">{tool.language}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <LayersIcon
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5"
                    />
                    <div>
                      <div className="text-sm text-gray-400">Complexité</div>
                      <div className="text-white">{tool.complexity}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
