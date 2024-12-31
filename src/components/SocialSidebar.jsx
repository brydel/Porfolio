import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialSidebar() {
  return (
    <>
      {/* Barre verticale (desktop) */}
      <div className="hidden lg:flex fixed bottom-0 left-0 z-50 flex-col items-center space-y-4 p-4">
        <div className="space-y-4 bg-secondary rounded-full p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-text hover:text-primary transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-text hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-text hover:text-primary transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-text hover:text-primary transition-colors duration-200"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <div className="w-[2px] h-24 bg-primary rounded transition-transform hover:scale-y-125"></div>
      </div>

      {/* Barre horizontale (mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-secondary py-4 px-6 shadow-inner">
        <div className="flex justify-around items-center">
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
    </>
  );
}

export default SocialSidebar;
