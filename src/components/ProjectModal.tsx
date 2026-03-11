import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const images = project.images?.length ? project.images : [project.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleLinkClick = (url: string, type: 'live' | 'github') => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-bold text-white pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        data-testid={`image-indicator-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-4">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">About This Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Key Features</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-white mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Technical Challenges</h3>
                  <ul className="space-y-1">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-white mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Project Details Sidebar */}
            <div className="space-y-4">
              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                {project.liveUrl && (
                  <Button
                    onClick={() => handleLinkClick(project.liveUrl!, 'live')}
                    className="w-full bg-white hover:bg-gray-200 text-black"
                    data-testid="button-view-live"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => handleLinkClick(project.githubUrl, 'github')}
                  className="w-full border-white text-white hover:bg-white/10"
                  data-testid="button-view-code"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>

              <Separator />

              {/* Project Meta */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Category</h4>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>

                {project.timeline && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Timeline</h4>
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                  </div>
                )}

                {project.role && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Role</h4>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                )}

                {project.featured && (
                  <div>
                    <Badge className="bg-white/20 text-white border-white/20">
                      Featured Project
                    </Badge>
                  </div>
                )}
              </div>

              <Separator />

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}