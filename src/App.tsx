import { Background } from './components/ui/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
