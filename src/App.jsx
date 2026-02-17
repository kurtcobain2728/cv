import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LanguageToggle from './components/LanguageToggle';
import ScrollReveal from './components/ScrollReveal';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <LanguageToggle />
      <ScrollToTop />
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-20">
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ScrollReveal>
        <footer className="bg-primary text-light py-6 mt-12 sm:mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm">{t('footer.rights')}</p>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}

export default App;
