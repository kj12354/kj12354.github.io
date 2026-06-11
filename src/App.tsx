import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { usePortfolioInteractions } from './hooks/usePortfolioInteractions';

function App() {
  usePortfolioInteractions();

  return (
    <>
      <div className="aura"></div>
      <div className="grain"></div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
