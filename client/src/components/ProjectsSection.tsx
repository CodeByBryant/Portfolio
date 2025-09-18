import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

// TODO: Replace with actual project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Weather API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "Chart.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Content generation platform using AI models to create marketing copy, blog posts, and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["React", "OpenAI API", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout tracking, progress analytics, and social features.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Health API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

const ProjectCard = ({ project, onViewProject }: { project: typeof projects[0], onViewProject: (id: number) => void }) => (
  <Card className="group hover-elevate transition-all duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Action buttons overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-3">
          <Button
            size="sm"
            variant="outline"
            className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={() => {
              console.log(`Viewing project ${project.title}`)
              onViewProject(project.id)
            }}
            data-testid={`button-view-project-${project.id}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={() => console.log(`Opening GitHub for ${project.title}`)}
            data-testid={`button-github-${project.id}`}
          >
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
    
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.featured && (
          <Badge variant="default" className="bg-primary/20 text-primary border-primary/20">
            Featured
          </Badge>
        )}
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 6

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  const handleViewProject = (id: number) => {
    console.log(`Opening project details for project ${id}`)
  }

  return (
    <section className="py-24 px-6 bg-muted/30" data-testid="projects-section">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => {
                setFilter('all')
                setCurrentPage(0)
                console.log('Showing all projects')
              }}
              data-testid="button-filter-all"
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => {
                setFilter('featured')
                setCurrentPage(0)
                console.log('Showing featured projects')
              }}
              data-testid="button-filter-featured"
            >
              Featured ({projects.filter(p => p.featured).length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewProject={handleViewProject}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(prev => prev - 1)}
              data-testid="button-previous-page"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <span className="text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages - 1}
              onClick={() => setCurrentPage(prev => prev + 1)}
              data-testid="button-next-page"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}