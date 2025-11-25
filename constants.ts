import { Project, Experience, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Andy SAGBO",
  title: "Développeur & Créateur Tech",
  subtitle: "IA • Logiciels • Robotique • Web",
  email: "andy.sagbo@epitech.eu",
  phone: "+229 01 41 71 51 01",
  location: "Cotonou, Bénin",
  bio: "Passionné de programmation, de robotique et d'intelligence artificielle. Actuellement étudiant en 3e année d'expertise informatique à EPITECH, je transforme des concepts complexes en solutions technologiques performantes. Mon approche allie la rigueur du C/C++ à la modernité du développement Web et de l'IA.",
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "C", level: 90, category: "Languages", icon: "Code" },
  { name: "C++", level: 85, category: "Languages", icon: "Code2" },
  { name: "Haskell", level: 75, category: "Languages", icon: "Sigma" },
  { name: "Python", level: 90, category: "Languages", icon: "FileCode" },
  { name: "HTML/CSS", level: 95, category: "Languages", icon: "Layout" },
  // Frameworks
  { name: "React", level: 85, category: "Frameworks", icon: "Atom" },
  { name: "Laravel (PHP)", level: 80, category: "Frameworks", icon: "Server" },
  { name: "Django", level: 80, category: "Frameworks", icon: "Layers" },
  { name: "Tailwind CSS", level: 90, category: "Frameworks", icon: "Wind" },
  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools", icon: "GitBranch" },
  { name: "Docker", level: 70, category: "Tools", icon: "Container" },
  { name: "Bash / Zsh", level: 85, category: "Tools", icon: "Terminal" },
  { name: "PostgreSQL", level: 80, category: "Tools", icon: "Database" },
  // Core
  { name: "IA Générative", level: 85, category: "Core", icon: "BrainCircuit" },
  { name: "Robotique", level: 75, category: "Core", icon: "Bot" },
  { name: "Algorithmie", level: 90, category: "Core", icon: "Cpu" },
];

export const PROJECTS: Project[] = [
  {
    id: "jeb-incubator",
    title: "Jeb Incubator",
    description: "Création d'une plateforme web responsive complète pour un incubateur. Gestion avancée des utilisateurs et des projets.",
    technologies: ["React", "Django", "PostgreSQL", "API REST"],
    category: "Web",
    link: "https://github.com/andysags",
  },
  {
    id: "arcade",
    title: "Projet Arcade",
    description: "Architecture de jeux vidéo modulaire en C++. Gestion dynamique des bibliothèques graphiques (ncurses, SDL, SFML) et des jeux (Snake, Pacman) au runtime.",
    technologies: ["C++", "Design Patterns", "Shared Libraries", "Memory Management"],
    category: "Software",
    link: "https://github.com/andysags",
  },
  {
    id: "need4steak",
    title: "Need4Steak",
    description: "Simulation de conduite autonome. Développement d'une IA capable de piloter une voiture virtuelle en utilisant des capteurs LIDAR simulés.",
    technologies: ["C", "AI", "Simulation", "Algorithmie"],
    category: "AI",
    link: "https://github.com/andysags",
  },
  {
    id: "school-management",
    title: "Gestion Scolaire Public",
    description: "Système complet de gestion pour une école publique. Gestion des notes, des élèves et des enseignants avec différents niveaux d'accès.",
    technologies: ["Laravel", "MySQL", "Blade", "AdminLTE"],
    category: "Web",
    link: "https://github.com/andysags",
  },
  {
    id: "robotics-training",
    title: "Formation Robotique",
    description: "Conception de programmes éducatifs et encadrement de projets de création de voitures autonomes pour adolescents.",
    technologies: ["Arduino", "C++ Embedded", "Electronics", "IoT"],
    category: "Robotics",
    link: "https://github.com/andysags",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "epitech-hackathon",
    role: "Gagnant Hackathon Santé",
    company: "EPITECH BÉNIN",
    location: "Cotonou",
    period: "Mai 2024",
    details: [
      "Vainqueur sur le thème de la santé.",
      "Prototypage rapide d'une solution web innovante.",
      "Pitch devant un jury technique."
    ],
    type: "Education"
  },
  {
    id: "cbox-sarl",
    role: "Stage Développement Web",
    company: "C BOX SARL",
    location: "Cotonou",
    period: "Juillet - Nov 2024",
    details: [
      "Développement d'un ERP scolaire en Laravel.",
      "Gestion des bases de données et des rôles utilisateurs.",
      "Maintenance évolutive et corrective."
    ],
    type: "Professional"
  },
  {
    id: "digital-valley",
    role: "Formateur en Robotique",
    company: "Digital Valley",
    location: "Cotonou",
    period: "Juillet - Août 2024", 
    details: [
      "Animation d'ateliers robotiques.",
      "Mentorat technique pour la création de robots autonomes.",
      "Vulgarisation de concepts IoT."
    ],
    type: "Professional"
  },
  {
    id: "tekbot",
    role: "Secrétaire & Membre Actif",
    company: "TEKBOT EPITECH",
    location: "Cotonou",
    period: "Depuis Avril 2024", 
    details: [
      "Coordination des actions de l'association de robotique.",
      "Organisation d'événements et workshops.",
      "Gestion administrative."
    ],
    type: "Association"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/andysags", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/andy-sagbo", icon: "Linkedin" },
  { platform: "Email", url: "mailto:andy.sagbo@epitech.eu", icon: "Mail" },
];