import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import SiteHeader from "@/components/SiteHeader";
import Stack from "@/components/Stack";
import { site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOVALINK",
  description: site.tagline,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" },
  sameAs: site.socials.map((item) => item.href),
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Reveal />
        <Hero />
        <Marquee />
        <Services />
        <Stack />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
