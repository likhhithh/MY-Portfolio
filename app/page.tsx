import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesMarquee />
      <AboutSection />
      <FeaturedProjects />
      <FAQ />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
