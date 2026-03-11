import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import ProjectsSection from "@/components/ProjectsSection"
import Footer from "@/components/Footer"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="projects-page">
      <Helmet>
        <title>Projects | CodeByBryant Portfolio</title>
        <meta name="description" content="Browse Bryant Ejorh's projects — web apps, simulations, games, and more built with React, TypeScript, and modern tools." />
        <meta property="og:title" content="Projects | CodeByBryant Portfolio" />
        <meta property="og:description" content="Browse Bryant Ejorh's projects — web apps, simulations, games, and more." />
        <link rel="canonical" href="https://codebybryant.github.io/Portfolio/projects" />
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <h1 className="sr-only">Projects by Bryant Ejorh</h1>
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}