import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Accueil", path: "hero", binary: "0001. " },
  { name: "À propos", path: "about", binary: "0010. " },
  { name: "Éducation", path: "education", binary: "0011. " },
  { name: "Project", path: "projects", binary: "0100. " },
  { name: "Contact", path: "contact", binary: "0101. " },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-textPrimary shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Logo de Brydel Fosso"
                className="h-14 max-w-[200px] w-auto object-contain transition-transform duration-300 hover:scale-110 hover:rotate-6"
              />
            </div>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              smooth={true}
              duration={500}
              className="text-lg font-retro hover:text-accent1 transition-colors duration-200 cursor-pointer relative group"
            >
              <span className="text-accent1 font-bold text-sm">{link.binary}</span>
              {link.name}
              {/* Trait horizontal pour le survol */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent1 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-primary bg-transparent hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background shadow-lg w-full absolute top-20 left-0">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="block text-lg font-retro hover:text-accent1 transition-colors duration-200 cursor-pointer flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-accent1 font-bold text-sm">{link.binary}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
