export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string[];
  type: 'work' | 'education';
  loc? : string;
}

export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Machine Learning / Deep Learning' | 'Tools' | "Data Processing / Visualization" | "Big Data" | "DevOps" | "Web Development" | "Databases";
  iconClass?: string; // Devicon class name
  color?: string; // Custom hex color for the icon glow
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}