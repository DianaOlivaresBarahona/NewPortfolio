import React, { useEffect } from "react";
import AOS from "aos";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import "aos/dist/aos.css";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-[#00020a]">
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
