export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  features?: string[];
  technologies?: string[];
  links?: {
    demo?: string;
    github?: string;
    youtube?: string;
    download?: string;
  };
}

const base = import.meta.env.BASE_URL;

export const allProjects: Project[] = [
  {
    id: 1,
    title: 'Medieval Skirmish',
    description: 'Jeu de puzzle tactique combinant tower defense et réflexion stratégique.',
    fullDescription: `Dans ce projet réalisé sur 6 mois à plein temps en équipe (programmation, GD, graphisme), j'ai pris le rôle de Game Designer principal. J'ai rédigé le GDD, conçu les règles et mécaniques, imaginé les niveaux, et participé au sound design et à la programmation. Le joueur doit utiliser des tourelles et des compétences, dont le redéploiement stratégique, pour repousser des vagues d’ennemis sur une carte composée de plusieurs chemins. Chaque niveau propose une nouvelle configuration à résoudre.`,
    image: `${base}images/MedievalSkirmish_01.png`,
    tags: ['Unity', 'C#', 'Tower Defense', 'Puzzle'],
    features: [
      "Système de redéploiement stratégique",
      "Carte modulaire avec 4 chemins possibles",
      "Tourelles & compétences uniques",
      "Gameplay basé sur la réflexion"
    ],
    technologies: ['Unity', 'C#', 'Git', 'ZBrush'],
    gallery: [
      `${base}images/MedievalSkirmish_01.png`,
      `${base}images/MedievalSkirmish_10.png`,
      `${base}images/MedievalSkirmish_03.png`,
      `${base}images/MedievalSkirmish_11.png`,
      `${base}images/MedievalSkirmish_12.png`
    ],
    links: {
      github: '',
      demo: '',
      youtube: '',
      download: '' 
    }
  },
  {
    id: 2,
    title: 'En Vers et Contre Tous',
    description: "Party game en 3D réalisé en 48h pour la Global Game Jam 2023 sur le thème 'écorce'.",
    fullDescription: `Jeu de plateforme compétitif en équipe de 4 (dev, graphiste, LD, support). J’ai conçu les mécaniques, rédigé un GDD, et programmé le jeu. Le joueur glisse en forêt en évitant les chutes et en optimisant son score. Il peut choisir entre plusieurs chemins lors de la descente. Jeu rapide et fun à jouer, conçu pour être rejoué plusieurs fois.`,
    image: `${base}images/Enversetcontretous_01.png`,
    tags: ['Unity', 'Game Jam', 'Party Game', 'C#'],
    features: [
      "Gameplay arcade rapide",
      "Multiples chemins",
      "Score à maximiser",
      "Développé en 48h"
    ],
    technologies: ['Unity', 'C#', 'GitHub'],
    gallery: [
      `${base}images/Enversetcontretous_01.png`,
      `${base}images/Enversetcontretous_02.png`,
      `${base}images/Enversetcontretous_03.png`,
      `${base}images/Enversetcontretous_04.png`,
      `${base}images/Enversetcontretous_05.png`
    ],
    links: {
      demo: '',
      github: '',
      youtube: '',
      download: '/downloads/EnVerEtContreTous.zip' 
    }
  },
  {
    id: 3,
    title: 'Cursum',
    description: "Prototype solo de runner/FPS réalisé sur un mois en autonomie complète.",
    fullDescription: `Premier projet solo dans lequel j’ai tout géré : conception, GDD, design, programmation, intégration d’assets. Cursum est un jeu de course contre la montre à la première personne. Le joueur maîtrise un panel de mouvements : glissade, saut, wall-run... Le but est de terminer les parcours dans le temps imparti, avec un hub, un tutoriel, et un système de score.`,
    image: `${base}images/Cursum_01.png`,
    tags: ['Unity', 'C#', 'Runner', 'Solo Dev'],
    features: [
      "Wall run, glissade, saut",
      "Hub central avec scores",
      "Niveaux chronométrés",
      "Tutoriel interactif"
    ],
    technologies: ['Unity', 'C#'],
    gallery: [
      `${base}images/Cursum_01.png`,
      `${base}images/Cursum_02.png`,
      `${base}images/Cursum_03.png`,
      `${base}images/Cursum_04.png`,
      `${base}images/Cursum_05.png`
    ],
    links: {
      demo: 'https://jules-gilli.itch.io/cursum',
      github: '',
      youtube: '',
      download: '' 
    }
  },
  {
    id: 4,
    title: 'Keep Dancing to Live',
    description: "Jeu d'esquive rythmée réalisé en 48h pour la Global Game Jam 2024.",
    fullDescription: `Keep Dancing To Live est un jeu sur un fou du roi qui a besoin de danser. Le joueur doit tourner une planche de bois découpée en forme de héros. Si tu ne fais pas rire le roi... tu mourras.\n\nJeu réalisé dans le cadre de la GGJ 2024, en moins de 48h, avec Mariana Mancieri, Romain Pitot, Nicolas Saussol et Jules Gilli au développement, William Vasseur à la 3D, et l'ensemble de l'équipe à la conception.`,
    image: `${base}images/KeepDancing_01.png`,
    tags: ['Unity', 'Game Jam', 'Party Game', 'C#'],
    features: [
      "Gameplay original basé sur le rythme",
      "Rotation d’un personnage pour esquiver",
      "Ambiance délirante de cour royale"
    ],
    technologies: ['Unity', 'C#', 'Git', 'Blender'],
    gallery: [
      `${base}images/KeepDancing_01.png`,
      `${base}images/KeepDancing_02.png`,
      `${base}images/KeepDancing_03.png`,
      `${base}images/KeepDancing_04.png`
    ],
    links: {
      demo: 'https://jules-gilli.itch.io/keep-dancing-to-live',
      github: '',
      youtube: '',
      download: '' 
    }
  },
  {
    id: 5,
    title: "Echoes of the Abyss",
    description: "Jeu rogue-lite en 2D avec génération procédurale et combat en temps réel.",
    fullDescription: `Echoes of the Abyss est un jeu en 2D de type rogue-lite développé avec le framework Java libGDX. Le joueur incarne un personnage devant explorer un donjon mystérieux et affronter des ennemis générés procéduralement à chaque partie. Chaque étage est un nouveau défi, avec des combats en temps réel et une difficulté croissante.\n\nLe projet met l’accent sur la rejouabilité, l’amélioration du personnage entre les runs, la gestion des ressources et un système de progression à chaque niveau. La direction artistique et sonore vise à renforcer l’ambiance oppressante d’un monde en déliquescence.`,
    image: `${base}images/EchoesOfTheAbyss_Anim01.gif`,
    tags: ['Java', 'LibGDX', 'Rogue Lite', '2D'],
    features: [
      "Exploration d'étages générés procéduralement",
      "Système de combat en temps réel",
      "Progression et amélioration entre les runs",
      "Ambiance sombre et immersive"
    ],
    technologies: ['Java', 'libGDX', 'Gradle', 'Tiled Map Editor', 'GitHub'],
    gallery: [
      `${base}images/EchoesOfTheAbyss_01.png`,
      `${base}images/EchoesOfTheAbyss_02.png`,
      `${base}images/EchoesOfTheAbyss_03.png`,
      `${base}images/EchoesOfTheAbyss_04.png`,
      `${base}images/EchoesOfTheAbyss_05.png`,
      `${base}images/EchoesOfTheAbyss_Anim04.gif`,
      `${base}images/EchoesOfTheAbyss_Anim01.gif`,
      `${base}images/EchoesOfTheAbyss_Anim02.gif`,
      `${base}images/EchoesOfTheAbyss_Anim03.gif`
    ],
    links: {
      demo: '',
      github: 'https://github.com/JulesGilli/Echoes-of-the-abyss',
      youtube: '',
      download: '/downloads/Echeos of the Abyss Win.zip'
    }
  },
  {
    id: 6,
    title: "Speed Typo",
    description: "Jeu de dactylographie rapide avec plusieurs modes originaux et des effets dynamiques.",
    fullDescription: `Speed Typo est un jeu web de rapidité et de précision au clavier, développé en React et TypeScript. Pensé comme un serious game fun, il propose plusieurs modes de jeu originaux : mots classiques, inversés, remplacés par des chiffres, phrases infinies, ou encore un mode aveugle où l'on tape sans voir ce qu'on écrit.\n\nChaque session est ponctuée de sons, effets visuels et retours dynamiques. Le scoring en temps réel et les animations rendent l'expérience stimulante. Un système de succès est également intégré pour motiver l'exploration de tous les modes.\n\n👉 Le projet est actuellement en développement et continue d’évoluer avec de nouveaux modes et fonctionnalités à venir.`,
    image: `${base}images/SpeedTypo_Anim01.gif`,
    tags: ['React', 'Jeu Web', 'Solo Dev'],
    features: [
      "Plusieurs modes de jeu : normal, inversé, aveugle, chiffres, phrase infinie...",
      "Scoring dynamique avec effets visuels",
      "Système de succès en fonction des actions",
      "Interface fluide et responsive"
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion'],
    gallery: [
      `${base}images/SpeedTypo_01.png`,
      `${base}images/SpeedTypo_02.png`,
      `${base}images/SpeedTypo_03.png`,
      `${base}images/SpeedTypo_04.png`,
      `${base}images/SpeedTypo_Anim01.gif`
    ],
    links: {
      demo: 'https://julesgilli.github.io/SpeedType/',
      github: 'https://github.com/JulesGilli/SpeedType',
      youtube: '',
      download: ''
    }
  }
];
