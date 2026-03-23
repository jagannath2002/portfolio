import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="min-h-screen bg-dark-900 text-slate-200 font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
