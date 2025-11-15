import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white/90 focus:text-black focus:px-3 focus:py-1 focus:rounded focus:z-50"
      >
        Skip to content
      </a>

      <Header />
      <Hero />

      <main id="content" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <About />
        <Now />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
