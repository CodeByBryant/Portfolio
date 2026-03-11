import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="about-page">
      <Helmet>
        <title>About Bryant Ejorh | CodeByBryant Portfolio</title>
        <meta name="description" content="Learn about Bryant Ejorh — a high school developer specializing in web apps, simulations, and games. Skills, background, and story." />
        <meta property="og:title" content="About Bryant Ejorh | CodeByBryant Portfolio" />
        <meta property="og:description" content="Learn about Bryant Ejorh — a high school developer specializing in web apps, simulations, and games." />
        <link rel="canonical" href="https://codebybryant.github.io/Portfolio/about" />
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <h1 className="sr-only">About Bryant Ejorh</h1>
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}