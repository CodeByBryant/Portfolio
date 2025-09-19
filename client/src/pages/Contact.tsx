import Navigation from "@/components/Navigation"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="contact-page">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}