export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Tools & Methods';
  proficiency: number; // 0-100
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Python/Django' | 'Machine Learning' | 'Frontend Architecture' | 'Cloud/DevOps';
  featured: boolean;
  image: string;
  keyFeatures: string[];
  githubUrl?: string;
  demoUrl?: string;
  architectureFlow?: {
    step: number;
    title: string;
    desc: string;
  }[];
}

export interface AcademicMilestone {
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
  courses: string[];
  achievements: string[];
}

export interface ProfessionalExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  skillsUsed: string[];
}

export interface WritingItem {
  id: string;
  title: string;
  platform: string;
  date: string;
  readTime: string;
  url: string;
  excerpt: string;
}
