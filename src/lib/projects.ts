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
    id: "xenith",
    title: "Xenith",
    description: "A minimalist productivity platform for students and young professionals who are done drifting.",
    longDescription: "Xenith is a minimalist productivity platform built for students and young professionals who want to stay focused and move with intention. It strips away the noise of traditional productivity tools and delivers a clean, distraction-free experience designed to help you build habits and track what actually matters.",
    image: "https://opengraph.githubassets.com/1/CodeByBryant/Xenith",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/CodeByBryant/Xenith",
    liveUrl: "https://xenith.life",
    featured: true,
    category: "Web App",
    challenges: [
      "Designing a distraction-free UX that feels intentional, not bare",
      "Building a performant and responsive experience across devices",
      "Balancing simplicity with meaningful functionality",
    ],
    features: [
      "Clean, minimal interface with zero clutter",
      "Goal and task tracking built for students",
      "Live at xenith.life",
    ],
    role: "Developer",
  },
  {
    id: "evo",
    title: "Evo",
    description: "An advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection.",
    longDescription: "Evo is an advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection. Agents navigate an infinite 2D world, sense their environment using raycasting, and make decisions through neural networks that evolve over generations. Watch species emerge, compete for resources, and evolve complex behaviors in real-time!",
    image: "https://raw.githubusercontent.com/CodeByBryant/Evo/main/public/assets/web-app-manifest-512x512.png",
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
  {
    id: "sovereign",
    title: "Sovereign",
    description: "A procedural geopolitical simulation with emergent nations, wars, and civilizations.",
    longDescription: "Sovereign is a procedural geopolitical simulation where entire worlds are generated and histories play out in real-time. Nations form, expand, wage wars, forge alliances, and collapse — all driven by emergent simulation logic. Built with TypeScript, Electron, and the Canvas API.",
    image: "https://opengraph.githubassets.com/1/CodeByBryant/Sovereign",
    technologies: ["TypeScript", "Electron", "Canvas API", "Procedural Generation"],
    githubUrl: "https://github.com/CodeByBryant/Sovereign",
    featured: true,
    category: "Simulation",
    challenges: [
      "Simulating complex geopolitical dynamics with emergent behavior",
      "Procedural world generation that produces believable geography",
      "Real-time Canvas rendering at scale",
    ],
    features: [
      "Procedural world generation",
      "Emergent nation formation and expansion",
      "Dynamic war, peace, and diplomacy mechanics",
      "Real-time civilization simulation",
    ],
    role: "Developer",
  },
  {
    id: "black-hole",
    title: "Black Hole Simulation",
    description: "A C++ physics simulation of a black hole with gravitational effects.",
    longDescription: "A C++ physics simulation exploring gravitational dynamics and visual rendering around a black hole. An exercise in low-level graphics programming and physics simulation, built from scratch in C++.",
    image: "https://opengraph.githubassets.com/1/CodeByBryant/Black-Hole-Simulation",
    technologies: ["C++", "Physics Simulation", "Graphics"],
    githubUrl: "https://github.com/CodeByBryant/Black-Hole-Simulation",
    featured: false,
    category: "Simulation",
    challenges: [
      "Implementing accurate gravitational physics from scratch",
      "Real-time rendering in C++ without a game engine",
    ],
    features: [
      "Gravitational physics simulation",
      "Visual rendering of spacetime curvature effects",
    ],
    role: "Developer",
  },
  {
    id: "101-js",
    title: "101 Guide to JavaScript",
    description: "A practical guide with 101 tips, tricks, and examples for writing cleaner JavaScript.",
    longDescription: "A comprehensive '101 Guide to JavaScript' featuring 101 practical tips, tricks, and examples to help developers of all levels write cleaner, smarter, and more efficient code. An open-source educational resource on GitHub.",
    image: "https://opengraph.githubassets.com/1/CodeByBryant/101-Gude-to-Javascript",
    technologies: ["JavaScript", "Documentation", "Open Source"],
    githubUrl: "https://github.com/CodeByBryant/101-Gude-to-Javascript",
    featured: false,
    category: "Educational",
    features: [
      "101 practical tips and code examples",
      "Beginner to advanced coverage",
      "Focused on clean, idiomatic JavaScript",
    ],
    role: "Author",
  },
  {
    id: "php-blast",
    title: "PHP Blast",
    description: "Block Blast built in PHP — an experiment in building games with unexpected technology.",
    longDescription: "PHP Blast is a Block Blast clone built entirely in PHP. Described by the creator as 'a horrible idea,' it's a fun experiment in pushing server-side technologies far outside their intended domain.",
    image: "https://opengraph.githubassets.com/1/CodeByBryant/PHP-Blast",
    technologies: ["PHP", "Game Development"],
    githubUrl: "https://github.com/CodeByBryant/PHP-Blast",
    featured: false,
    category: "Game",
    features: [
      "Classic block-blasting gameplay",
      "Built entirely server-side in PHP",
    ],
    role: "Developer",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
