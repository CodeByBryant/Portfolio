import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Twitter, Heart, Rocket } from "lucide-react"
import { Link } from "wouter"

const socialLinks = [
  { icon: Github, href: "https://github.com/CodeByBryant", label: "GitHub" },
 { icon: Linkedin, href: "https://linkedin.com/in/bryant-ejorh-b0995a3b2", label: "LinkedIn" },
  { icon: Mail, href: "mailto:codebybryant@gmail.com", label: "Email" }
]

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Home", href: "/" }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Rocket className="w-6 h-6 text-white" />
                <span className="text-xl font-bold text-white">
                  Bryant Ejorh
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Crafting digital experiences that bridge imagination and reality. 
                Let&apos;s build something amazing together.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                    asChild
                    data-testid={`link-footer-${social.label.toLowerCase()}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start p-0 h-auto text-muted-foreground hover:text-white"
                    asChild
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 codebybryant@gmail.com</p>
                <p>📍 California, US</p>
                <p>🚀 Available for new projects</p>
              </div>
              <Button
                className="mt-4"
                asChild
                data-testid="button-footer-contact"
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© {currentYear} Bryant Ejorh. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto text-muted-foreground hover:text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-testid="button-back-to-top"
            >
              Back to Top
            </Button>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Built with React.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}