export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  tags: string[];
  coverImage: string;
  readTime: number;
  published: boolean;
  featured: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string;
  coverImage: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
  order: number;
}

export interface NowData {
  currentRole: string;
  currentFocus: string[];
  currentlyReading: string;
  currentlyLearning: string[];
  location: string;
  updatedAt: string;
}

export interface GithubStats {
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
  topLanguages: string[];
}

export interface LeetcodeStats {
  username: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
}
