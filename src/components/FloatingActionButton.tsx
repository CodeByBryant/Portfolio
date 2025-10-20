import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { Link } from 'wouter'

export default function FloatingActionButton() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* Contact FAB */}
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover-elevate active-elevate-2"
        asChild
        data-testid="fab-contact"
      >
        <Link href="/contact">
          <MessageCircle className="w-6 h-6" />
        </Link>
      </Button>

      {/* Scroll to Top FAB */}
      {showScrollTop && (
        <Button
          size="icon"
          variant="outline"
          className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover-elevate active-elevate-2 animate-in slide-in-from-bottom-2"
          onClick={scrollToTop}
          data-testid="fab-scroll-top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}