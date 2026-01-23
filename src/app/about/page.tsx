import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Bryant Ejorh - High School student and developer passionate about creating innovative solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="about-page">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
