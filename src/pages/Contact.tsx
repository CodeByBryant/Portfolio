import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-testid="contact-page"
    >
      <Helmet>
        <title>Contact Bryant Ejorh | CodeByBryant Portfolio</title>
        <meta name="description" content="Get in touch with Bryant Ejorh. Available for new projects, collaborations, and opportunities." />
        <meta property="og:title" content="Contact Bryant Ejorh | CodeByBryant Portfolio" />
        <meta property="og:description" content="Get in touch with Bryant Ejorh. Available for new projects, collaborations, and opportunities." />
        <link rel="canonical" href="https://codebybryant.github.io/Portfolio/contact" />
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <h1 className="sr-only">Contact Bryant Ejorh</h1>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
