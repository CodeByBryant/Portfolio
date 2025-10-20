import { Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  challenges?: string[];
  features?: string[];
  timeline?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "evosquares",
    title: "EvoSquares",
    description:
      "A simulation project exploring evolutionary algorithms through visual representation.",
    longDescription: `EvoSquares is an innovative project that demonstrates the power of evolutionary algorithms 
    through an engaging visual interface. The project simulates how digital entities evolve and adapt over time, 
    providing insights into artificial life and genetic algorithms.`,
    image:
      "https://raw.githubusercontent.com/CodeByBryant/EvoSquares/main/preview.png", // You'll need to update this with actual image URL
    technologies: ["Python", "Pygame", "Genetic Algorithms", "Simulation"],
    githubUrl: "https://github.com/CodeByBryant/EvoSquares",
    featured: true,
    category: "Simulation",
    challenges: [
      "Implementing efficient genetic algorithms",
      "Creating smooth visual representations",
      "Optimizing performance for complex simulations",
    ],
    features: [
      "Real-time evolution simulation",
      "Visual representation of genetic algorithms",
      "Interactive parameters adjustment",
      "Performance optimization",
    ],
    role: "Developer",
  },
  {
    id: "xenith-showcase",
    title: "Xenith Showcase",
    description:
      "A showcase platform demonstrating creative development and design skills.",
    longDescription: `Xenith Showcase is a platform that highlights various development and design capabilities. 
    It serves as a demonstration of modern web technologies and creative programming concepts.`,
    image:
      "https://raw.githubusercontent.com/CodeByBryant/Xenith-Showcase/main/preview.png", // You'll need to update this with actual image URL
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    githubUrl: "https://github.com/CodeByBryant/Xenith-Showcase",
    featured: true,
    category: "Web Development",
    challenges: [
      "Implementing responsive 3D graphics",
      "Optimizing performance",
      "Creating intuitive user interactions",
    ],
    features: [
      "Interactive 3D elements",
      "Responsive design",
      "Modern UI/UX",
      "Performance optimized animations",
    ],
    role: "Full Stack Developer",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
