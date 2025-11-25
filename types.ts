export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  category: 'Web' | 'Software' | 'AI' | 'Robotics';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
  type: 'Professional' | 'Education' | 'Association';
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Core';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}