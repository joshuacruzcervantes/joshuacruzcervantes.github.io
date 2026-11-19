/**
 * HOME PAGE
 * ---------
 * This is the single-page portfolio. It simply stacks the section components in
 * order. Each section manages its own layout and pulls its text from
 * lib/content.ts, so this file rarely needs to change — to reorder sections,
 * just move the lines around.
 *
 * Section order matches the spec:
 *   Hero → NET25 feature → About (with skills) → Teaching → Projects → Certifications → Contact
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";
import SecondBrain from "@/components/SecondBrain";
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

        {/* 2. NET25 Kada Umaga feature: big, always-dark spotlight */}
        <Featured />

        {/* 3. About */}
        <About />

        {/* 4. Teaching — sells the academe pivot */}
        <Teaching />

        {/* 6. Projects / Labs */}
        <Projects />

        {/* Claude x Obsidian: live graph of the real vault */}
        <SecondBrain />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
