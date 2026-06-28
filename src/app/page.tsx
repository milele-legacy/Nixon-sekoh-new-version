"use client";
import { useScrollReveal } from "@/components/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import WhyChoose from "@/components/WhyChoose";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Book from "@/components/Book";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <WhyChoose />
      <Partners />
      <Gallery />
      <Book />
      <Contact />
      <Footer />
    </main>
  );
}
