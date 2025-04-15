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
    technologies: ['Unity', 'C#', 'Trello', 'Figma'],
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
      download: '/downloads/Medieval Skirmish.zip' 
    }
  },
  {
    id: 2,
    title: 'En Vers et Contre Tous',
    description: "Party game en 3D réalisé en 48h pour la Global Game Jam 2023 sur le thème 'écorce'.",
    fullDescription: `Jeu de plateforme compétitif en équipe de 4 (dev, graphiste, LD, support). J’ai conçu les mécaniques, rédigé un GDD, et programmé le jeu. Le joueur glisse en forêt en évitant les chutes et en optimisant son score. Il peut choisir entre plusieurs chemins lors de la descente. Jeu rapide et fun à jouer, conçu pour être rejoué plusieurs fois.`,
    image: `${base}images/Enversetcontretous_01.png`,
    tags: ['Unity', 'Game Jam', 'Party Game', '3D'],
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
    tags: ['Unity', 'FPS', 'Runner', 'Solo Dev'],
    features: [
      "Wall run, glissade, saut",
      "Hub central avec scores",
      "Niveaux chronométrés",
      "Tutoriel interactif"
    ],
    technologies: ['Unity', 'C#', 'Asset Store'],
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
      download: '/downloads/CURSUM.zip' 
    }
  },
  {
    id: 4,
    title: 'Keep Dancing to Live',
    description: "Jeu d'esquive rythmée réalisé en 48h pour la Global Game Jam 2024.",
    fullDescription: `Keep Dancing To Live est un jeu sur un fou du roi qui a besoin de danser. Le joueur doit tourner une planche de bois découpée en forme de héros. Si tu ne fais pas rire le roi... tu mourras.\n\nJeu réalisé dans le cadre de la GGJ 2024, en moins de 48h, avec Mariana Mancieri, Romain Pitot, Nicolas Saussol et Jules Gilli au développement, William Vasseur à la 3D, et l'ensemble de l'équipe à la conception.`,
    image: `${base}images/KeepDancing_01.png`, // à ajouter dans public/images
    tags: ['Unity', 'Game Jam', 'Rythme', '3D'],
    features: [
      "Gameplay original basé sur le rythme",
      "Rotation d’un personnage pour esquiver",
      "Ambiance délirante de cour royale"
    ],
    technologies: ['Unity', 'C#'],
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
      download: '/downloads/Keep Dancing To Live.zip' 
    }
  },
  {
    id: 5,
    title: "Echoes of the Abyss",
    description: "Jeu d'exploration à la première personne dans un monde organique, oppressant et vivant.",
    fullDescription: `Echoes of the Abyss est un projet d'exploration narratif en vue subjective dans un monde entièrement organique. Le joueur y incarne un être sans mémoire, réveillé dans les entrailles d’un monde vivant et mystérieux. Guidé par des visions passées et par la pulsation de l'environnement, il doit retrouver son identité en sondant les profondeurs d’un lieu oppressant, où chaque couloir respire et chaque porte est de chair.\n\nCe projet met l’accent sur la narration environnementale, l’ambiance sonore immersive et la cohérence d’un univers original. L’exploration non linéaire, les changements d’échelle et la découverte de souvenirs réactivés font partie des mécaniques centrales.`,
    image: `${base}images/EchoesOfTheAbyss_Anim01.gif`, // à ajouter dans /public/images
    tags: ['Unreal Engine', 'Game Design', 'Narration', 'Exploration'],
    features: [
      "Univers organique vivant et oppressant",
      "Exploration à la première personne",
      "Narration environnementale immersive",
      "Visions du passé & souvenirs réactivés"
    ],
    technologies: ['Unreal Engine', 'Blueprints', 'DAW (sound design)', 'Notion (GDD)'],
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
      demo: '', // si tu le protos un jour
      github: '', // si tu veux partager le GDD ou du code
      youtube: '', // si tu filmes une démo
      download: '/downloads/Echeos of the Abyss.zip' 
    }
  }
];
