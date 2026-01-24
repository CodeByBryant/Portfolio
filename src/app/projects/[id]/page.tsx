import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects, getProjectById } from "@/lib/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  About the Project
                </h2>
                <p className="text-muted-foreground whitespace-pre-wrap mb-8">
                  {project.longDescription}
                </p>

                {project.features && (
                  <>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 text-muted-foreground mb-8">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.challenges && (
                  <>
                    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                    <ul className="list-disc pl-5 text-muted-foreground mb-8">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="mb-2">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Links */}
                  <div>
                    <h3 className="font-semibold mb-3">Project Links</h3>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button className="w-full" variant="outline" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="font-semibold mb-3">Project Info</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-sm text-muted-foreground">
                          Category
                        </dt>
                        <dd>{project.category}</dd>
                      </div>
                      {project.role && (
                        <div>
                          <dt className="text-sm text-muted-foreground">
                            Role
                          </dt>
                          <dd>{project.role}</dd>
                        </div>
                      )}
                      {project.timeline && (
                        <div>
                          <dt className="text-sm text-muted-foreground">
                            Timeline
                          </dt>
                          <dd>{project.timeline}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
