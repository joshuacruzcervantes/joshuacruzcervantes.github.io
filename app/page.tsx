/**
 * HOME PAGE
 * ---------
 * This is the single-page portfolio. It simply stacks the section components in
 * order. Each section manages its own layout and pulls its text from
 * lib/content.ts, so this file rarely needs to change — to reorder sections,
 * just move the lines around.
 *
 * Section order matches the spec:
 *   Hero → About → Teaching → Skills → Projects → Certifications → Contact
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import Identities from "@/components/Identities";
import About from "@/components/About";
import Teaching from "@/components/Teaching";
import Media from "@/components/Media";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed top navigation (overlays the page) */}
      <Navbar />

      <main>
        {/* 1. Hero — loads clean & professional first */}
        <Hero />

        {/* As seen on: NET25 credibility strip */}
        <AsSeenOn />

        {/* The three hats: instructor, researcher, creator */}
        <Identities />

        {/* 3. About */}
        <About />

        {/* On camera: TV + viral clip */}
        <Media />

        {/* 4. Teaching — sells the academe pivot */}
        <Teaching />

        {/* 5. Technical skills */}
        <Skills />

        {/* 6. Projects / Labs */}
        <Projects />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
