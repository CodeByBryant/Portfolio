import Navigation from '../Navigation'

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={(section) => console.log(`Navigated to: ${section}`)} />
      <div className="pt-20 p-8">
        <h1 className="text-2xl font-bold text-foreground">Navigation Example</h1>
        <p className="text-muted-foreground">The navigation bar adapts on scroll with a cosmic theme</p>
      </div>
    </div>
  )
}