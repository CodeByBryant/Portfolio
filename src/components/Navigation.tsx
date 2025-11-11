import { useState, useEffect } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Rocket, User, Briefcase, Mail, Menu, X } from "lucide-react"

interface NavigationProps {
  onNavigate?: (section: string) => void
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "About", icon: User, section: "about", path: "/about" },
    { label: "Projects", icon: Briefcase, section: "projects", path: "/projects" },
    { label: "Contact", icon: Mail, section: "contact", path: "/contact" },
  ]

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Button
            variant="ghost"
            size="sm"
            className="text-xl font-bold p-0 hover:bg-transparent"
            asChild
            data-testid="button-home"
          >
            <Link href={import.meta.env.BASE_URL}>
              <Rocket className="w-6 h-6 mr-2 text-white" />
              <span className="text-white">
                Portfolio
              </span>
            </Link>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-white transition-colors"
                asChild
                data-testid={`link-${item.section}`}
              >
                <Link href={item.path}>
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.section}
                  variant="ghost"
                  className="justify-start text-foreground hover:text-white w-full"
                  asChild
                  data-testid={`link-mobile-${item.section}`}
                >
                  <Link href={item.path} onClick={handleMobileMenuClose}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}