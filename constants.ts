import { Project, Experience, Skill, SocialLink } from './types';
import.meta.env;

export const PERSONAL_INFO = {
  name: "Andy SAGBO",
  title: "Développeur informatique",
  subtitle: "IA • Architecture Logicielle • Robotique • Web",
  email: "andy.sagbo@epitech.eu",
  phone: "+229 01 41 71 51 01",
  location: "Cotonou, Bénin",
  bio: "Passionné de programmation, de robotique et d'intelligence artificielle. Actuellement étudiant en 3e année d'expertise informatique à EPITECH, je transforme des concepts complexes en solutions technologiques performantes. Mon approche allie la rigueur du C/C++ à la modernité du développement Web et de l'IA.",
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "C", level: 75, category: "Languages", icon: "Code" },
  { name: "C++", level: 85, category: "Languages", icon: "Code2" },
  { name: "Haskell", level: 65, category: "Languages", icon: "Sigma" },
  { name: "Python", level: 45, category: "Languages", icon: "FileCode" },
  { name: "HTML/CSS", level: 90, category: "Languages", icon: "Layout" },
  // Frameworks
  { name: "React", level: 75, category: "Frameworks", icon: "Atom" },
  { name: "Laravel (PHP)", level: 60, category: "Frameworks", icon: "Server" },
  { name: "Django", level: 75, category: "Frameworks", icon: "Layers" },
  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools", icon: "GitBranch" },
  { name: "Bash / Zsh", level: 65, category: "Tools", icon: "Terminal" },
  { name: "Canva", level: 80, category: "Tools", icon: "Database" },
  { name: "Arduino", level: 70, category: "Tools", icon: "Database" },
  // Core
  { name: "Robotique de base", level: 60, category: "Core", icon: "Bot" },
  { name: "Algorithmie", level: 80, category: "Core", icon: "Cpu" },
];

export const PROJECTS: Project[] = [
  {
    id: "vintage",
    title: "Vintage Bénin",
    description: "Développement du prototype plateforme e-commerce pour la vente de vêtements seconde main.",
    technologies: ["React", "Firebase"],
    category: "Web",
    link: "https://vintage-benin.netlify.app/",
  },
  {
    id: "jeb-incubator",
    title: "Jeb Incubator",
    description: "Création d'une plateforme web responsive complète pour un incubateur. Gestion avancée des utilisateurs et des projets. API REST sécurisée. Base de données relationnelle.",
    technologies: ["React", "Django", "PostgreSQL", "API REST"],
    category: "Web",
    link: "https://github.com/andysags13/Incubator",
  },
  {
    id: "arcade",
    title: "Projet Arcade",
    description: "Architecture de jeux vidéo modulaire en C++. Gestion dynamique des bibliothèques graphiques (ncurses, SDL, SFML) et des jeux (Snake, Pacman) au runtime.",
    technologies: ["C++", "Design Patterns", "Shared Libraries", "Memory Management"],
    category: "Software",
    link: "https://github.com/andysags13/arcade",
  },
  {
    id: "need4steak",
    title: "Need4Steak",
    description: "Simulation de conduite autonome. Développement d'une IA capable de piloter une voiture virtuelle en utilisant des capteurs LIDAR simulés.",
    technologies: ["C", "AI", "Simulation", "Algorithmie"],
    category: "AI",
    link: "https://github.com/andysags/Need4Stek",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "digital-valley",
    role: "Formateur en Robotique",
    company: "Digital Valley",
    location: "Cotonou",
    period: "Depuis Novembre 2025", 
    details: [
      "Animation d'ateliers robotiques.",
      "Mentorat technique pour la création de robots autonomes.",
      "Vulgarisation de concepts IoT."
    ],
    type: "Professional"
  },
  {
    id: "tekbot",
    role: "Secrétaire général",
    company: "TEKBOT EPITECH",
    location: "Cotonou",
    period: "Depuis Avril 2024", 
    details: [
      "Coordination des actions de l'association de robotique.",
      "Organisation d'événements et workshops.",
      "Gestion administrative."
    ],
    type: "Association"
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
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/andysags", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/andy-sagbo-3599502aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "Linkedin" },
  { platform: "Email", url: "mailto:andy.sagbo@epitech.eu", icon: "Mail" },
];

export const CONTACT_FORM = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
  },
};
