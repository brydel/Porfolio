function Footer() {
    return (
      <footer className="bg-background text-secondary py-8 text-center font-retro">
        <p className="text-sm">
          © {new Date().getFullYear()} Brydel Fosso. Tous droits réservés.
        </p>
        <p className="text-sm mt-2">
          Conçu avec ❤️ et React + Tailwind CSS.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/brydel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent1 mx-2 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bisco-pro-ba8a392a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent1 mx-2 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/BSaounde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent1 mx-2 transition"
          >
            Twitter
          </a>
        </div>
        
      </footer>
      
    );
  }
  
  export default Footer;
  