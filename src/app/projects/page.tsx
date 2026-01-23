import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Bryant Ejorh's projects - showcasing skills in simulations, web development, and software engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="projects-page">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
