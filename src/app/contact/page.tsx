import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bryant Ejorh - available for new projects and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="contact-page">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
