import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

type Project = (typeof projects)[0];

const ProjectCard = ({
  project,
  onView,
}: {
  project: Project;
  onView: (project: Project) => void;
}) => {
  return (
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
              onClick={() => onView(project)}
              data-testid={`button-view-project-${project.id}`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View
            </Button>
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                data-testid={`button-github-${project.id}`}
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.featured && (
            <Badge
              variant="default"
              className="bg-primary/20 text-primary border-primary/20"
            >
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
  );
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 6;

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section className="py-24 px-6 bg-muted/30" data-testid="projects-section">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills in full-stack
            development, UI/UX design, and problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => {
                setFilter("all");
                setCurrentPage(0);
              }}
              data-testid="button-filter-all"
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => {
                setFilter("featured");
                setCurrentPage(0);
              }}
              data-testid="button-filter-featured"
            >
              Featured ({projects.filter((p) => p.featured).length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={setSelectedProject}
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
              onClick={() => setCurrentPage((prev) => prev - 1)}
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
              onClick={() => setCurrentPage((prev) => prev + 1)}
              data-testid="button-next-page"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
