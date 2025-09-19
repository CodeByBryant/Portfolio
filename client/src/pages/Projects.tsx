import Navigation from "@/components/Navigation"
import ProjectsSection from "@/components/ProjectsSection"
import Footer from "@/components/Footer"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="projects-page">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}