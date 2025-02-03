import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from "@vercel/analytics/react"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";


// Layouts
import MainLayout from './layout/MainLayout';

// Components et sections
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact';
import About from './sections/About';
import Education from './sections/Education';
import SocialSidebar from './components/SocialSidebar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loder.jsx'; // Votre loader
import Certifications from './sections/Certifications.jsx';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation exécutée une seule fois
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <MainLayout>
        {/* Barre sociale pour les grands écrans */}
        <div className="hidden lg:block">
          <SocialSidebar />
        </div>

        {/* Sections avec des IDs */}
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Contact />

        {/* Barre sociale horizontale pour les petits écrans */}
        <div className="block lg:hidden bg-secondary py-4 px-6 shadow-inner rounded-md ">
          <div className="flex justify-around items-center rounded-md">
          <a
            href="https://github.com/brydelb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bisco-pro-ba8a392a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/brydel_1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/BSaounde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-200"
          >
            <FaTwitter size={20} />
          </a>
          </div>
        </div>

        <Footer />
        <Analytics />
      </MainLayout>
    </div>
  );
}

export default App;

