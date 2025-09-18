import { useRef } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollToSection = (section: string) => {
    const sectionRef = sectionsRef[section as keyof typeof sectionsRef]
    if (sectionRef?.current) {
      const offsetTop = sectionRef.current.offsetTop - 80 // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="portfolio-app">
      <Navigation onNavigate={scrollToSection} />
      
      <div ref={sectionsRef.home}>
        <HeroSection onNavigate={scrollToSection} />
      </div>
      
      <div ref={sectionsRef.about}>
        <AboutSection />
      </div>
      
      <div ref={sectionsRef.projects}>
        <ProjectsSection />
      </div>
      
      <div ref={sectionsRef.contact}>
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  )
}