"use client";

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

interface Connection {
  from: Star
  to: Star
  opacity: number
  distance: number
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const connectionsRef = useRef<Connection[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Setup canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      const numStars = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000))
      
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2
        })
      }
    }

    initStars()

    // Mouse/Touch event handlers
    const updateMousePosition = (x: number, y: number) => {
      mouseRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length > 0) {
        updateMousePosition(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })

    // Calculate connections
    const updateConnections = () => {
      connectionsRef.current = []
      const mouse = mouseRef.current
      const maxDistance = 150
      const mouseMaxDistance = 200

      starsRef.current.forEach((star, i) => {
        // Connect to mouse/touch position
        const mouseDistance = Math.sqrt(
          Math.pow(star.x - mouse.x, 2) + Math.pow(star.y - mouse.y, 2)
        )
        
        if (mouseDistance < mouseMaxDistance) {
          connectionsRef.current.push({
            from: star,
            to: { ...star, x: mouse.x, y: mouse.y },
            opacity: Math.max(0, 1 - mouseDistance / mouseMaxDistance) * 0.6,
            distance: mouseDistance
          })
        }

        // Connect to nearby stars
        starsRef.current.slice(i + 1).forEach(otherStar => {
          const distance = Math.sqrt(
            Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
          )
          
          if (distance < maxDistance) {
            const opacity = Math.max(0, 1 - distance / maxDistance) * 0.3
            connectionsRef.current.push({
              from: star,
              to: otherStar,
              opacity,
              distance
            })
          }
        })
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update star positions
      starsRef.current.forEach(star => {
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Vary opacity
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))
      })

      updateConnections()

      // Draw connections
      connectionsRef.current.forEach(connection => {
        if (connection.opacity > 0.05) {
          ctx.beginPath()
          ctx.moveTo(connection.from.x, connection.from.y)
          ctx.lineTo(connection.to.x, connection.to.y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      // Draw stars
      starsRef.current.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
        
        // Add a subtle glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}