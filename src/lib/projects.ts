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
    id: "evo",
    title: "Evo",
    description:
      "An advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection.",
    longDescription: `Evo is an advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection. 
    Agents navigate an infinite 2D world, sense their environment using raycasting, and make decisions through neural networks that evolve over generations. 
    Watch species emerge, compete for resources, and evolve complex behaviors in real-time!`,
    image:
      "https://raw.githubusercontent.com/CodeByBryant/Evo/main/docs/preview.png",
    technologies: ["TypeScript", "React", "Electron", "Neural Networks", "Genetic Algorithms"],
    githubUrl: "https://github.com/CodeByBryant/Evo",
    liveUrl: "https://codebybryant.github.io/Evo/",
    featured: true,
    category: "Simulation",
    challenges: [
      "Implementing efficient neural networks for real-time evolution",
      "Creating an infinite scrollable 2D world",
      "Optimizing performance for 100+ agents at 60 FPS",
      "Designing intuitive species tracking and visualization",
    ],
    features: [
      "Full genetic algorithm with reproduction, crossover, and mutation",
      "Multi-layer perceptron neural networks",
      "Infinite scrollable map with camera controls",
      "Real-time evolution charts and statistics",
      "Automatic species identification with color coding",
    ],
    role: "Developer",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
