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
    };
  }
  
  export const allProjects: Project[] = [
    {
      id: 1,
      title: 'Medieval Skirmish',
      description: 'Jeu de puzzle tactique combinant tower defense et réflexion stratégique.',
      fullDescription: `Dans ce projet réalisé sur 6 mois à plein temps en équipe (programmation, GD, graphisme), j'ai pris le rôle de Game Designer principal. J'ai rédigé le GDD, conçu les règles et mécaniques, imaginé les niveaux, et participé au sound design et à la programmation. Le joueur doit utiliser des tourelles et des compétences, dont le redéploiement stratégique, pour repousser des vagues d’ennemis sur une carte composée de plusieurs chemins. Chaque niveau propose une nouvelle configuration à résoudre.`,
      image: '/images/MedievalSkirmish_01.png',
      tags: ['Unity', 'C#', 'Tower Defense', 'Puzzle'],
      features: [
        "Système de redéploiement stratégique",
        "Carte modulaire avec 4 chemins possibles",
        "Tourelles & compétences uniques",
        "Gameplay basé sur la réflexion"
      ],
      technologies: ['Unity', 'C#', 'Trello', 'Figma'],
      gallery: [
        '/images/MedievalSkirmish_01.png',
        '/images/MedievalSkirmish_10.png',
        '/images/MedievalSkirmish_03.png',
        '/images/MedievalSkirmish_11.png',
        '/images/MedievalSkirmish_12.png'
      ],
      links: {
        github: '',
        demo: '',
        youtube: ''
      }
    },
    {
      id: 2,
      title: 'En Vers et Contre Tous',
      description: "Party game en 3D réalisé en 48h pour la Global Game Jam 2023 sur le thème 'écorce'.",
      fullDescription: `Jeu de plateforme compétitif en équipe de 4 (dev, graphiste, LD, support). J’ai conçu les mécaniques, rédigé un GDD, et programmé le jeu. Le joueur glisse en forêt en évitant les chutes et en optimisant son score. Il peut choisir entre plusieurs chemins lors de la descente. Jeu rapide et fun à jouer, conçu pour être rejoué plusieurs fois.`,
      image: '/images/Enversetcontretous_01.png',
      tags: ['Unity', 'Game Jam', 'Party Game', '3D'],
      features: [
        "Gameplay arcade rapide",
        "Multiples chemins",
        "Score à maximiser",
        "Développé en 48h"
      ],
      technologies: ['Unity', 'C#', 'GitHub'],
      gallery: [
        '/images/Enversetcontretous_01.png',
        '/images/Enversetcontretous_02.png',
        '/images/Enversetcontretous_03.png',
        '/images/Enversetcontretous_04.png',
        '/images/Enversetcontretous_05.png'
      ],
      links: {
        demo: '', // à remplir si dispo
        github: '',
        youtube: ''
      }
    },
    {
      id: 3,
      title: 'Cursum',
      description: "Prototype solo de runner/FPS réalisé sur un mois en autonomie complète.",
      fullDescription: `Premier projet solo dans lequel j’ai tout géré : conception, GDD, design, programmation, intégration d’assets. Cursum est un jeu de course contre la montre à la première personne. Le joueur maîtrise un panel de mouvements : glissade, saut, wall-run... Le but est de terminer les parcours dans le temps imparti, avec un hub, un tutoriel, et un système de score.`,
      image: '/images/Cursum_01.png',
      tags: ['Unity', 'FPS', 'Runner', 'Solo Dev'],
      features: [
        "Wall run, glissade, saut",
        "Hub central avec scores",
        "Niveaux chronométrés",
        "Tutoriel interactif"
      ],
      technologies: ['Unity', 'C#', 'Asset Store'],
      gallery: [
        '/images/Cursum_01.png',
        '/images/Cursum_02.png',
        '/images/Cursum_03.png',
        '/images/Cursum_04.png',
        '/images/Cursum_05.png'
      ],
      links: {
        demo: 'https://jules-gilli.itch.io/cursum',
        github: '',
        youtube: ''
      }
    }
    
  ];
  