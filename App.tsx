import React from 'react';
import BackgroundCanvas from './components/UI/BackgroundCanvas';
import CustomCursor from './components/UI/CustomCursor';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="relative bg-sys-black text-sys-text min-h-screen overflow-x-hidden">
      <CustomCursor />
      <BackgroundCanvas />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;