/**
 * App.jsx
 * Root component — assembles all sections inside MainLayout.
 * Import order matches the visual top-to-bottom page order.
 */

import MainLayout  from "./layouts/MainLayout";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import Experience  from "./components/Experience";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <MainLayout>
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections — each reads from portfolioData.json */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </MainLayout>
  );
}
