import Navigation from "@/components/Navigation"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="about-page">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}