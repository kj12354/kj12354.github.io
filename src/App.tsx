import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
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
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
