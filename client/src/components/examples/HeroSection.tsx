import HeroSection from '../HeroSection'

export default function HeroSectionExample() {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={(section) => console.log(`Hero navigated to: ${section}`)} />
    </div>
  )
}