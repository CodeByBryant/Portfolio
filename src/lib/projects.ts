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
    id: "evo",
    title: "Evo",
    description:
      "An advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection.",
    longDescription: `Evo is an advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection. 
    Agents navigate an infinite 2D world, sense their environment using raycasting, and make decisions through neural networks that evolve over generations. 
    Watch species emerge, compete for resources, and evolve complex behaviors in real-time!`,
    image:
      "https://raw.githubusercontent.com/CodeByBryant/Evo/main/public/assets/web-app-manifest-512x512.png",
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
