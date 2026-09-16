import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { usePortfolioInteractions } from './hooks/usePortfolioInteractions';

function App() {
  usePortfolioInteractions();

  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
