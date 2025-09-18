import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import heroBackground from "@assets/generated_images/Dark_space_nebula_background_9970b8b1.png"

interface HeroSectionProps {
  onNavigate?: (section: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  
  // TODO: Replace with actual user data
  const phrases = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Space Explorer",
    "Creative Innovator"
  ]

  useEffect(() => {
    const phrase = phrases[currentPhrase]
    let timeout: NodeJS.Timeout
    
    if (isTyping) {
      if (displayText.length < phrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentPhrase, isTyping, phrases])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hello, I'm</span>
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that bridge the gap between imagination and reality. 
            Passionate about creating innovative solutions that push the boundaries of what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => {
                console.log('View Projects clicked')
                onNavigate?.('projects')
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              data-testid="button-view-projects"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                console.log('Contact clicked')
                onNavigate?.('contact')
              }}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3 backdrop-blur-sm"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map((social, index) => (
              <Button
                key={index}
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors backdrop-blur-sm"
                onClick={() => console.log(`${social.label} clicked`)}
                data-testid={`link-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}