import esp32Image from "../assets/ESP32.png"; // Image pour IoT
import dashboardImage from "../assets/image.png"; // Image du dashboard
import ottawaImage from "../assets/data.png"; // Image du projet Ottawa

import { FaGithub, FaExternalLinkAlt, FaCode, FaProjectDiagram } from "react-icons/fa";

const mainProjects = [
  {
    title: "IoT Home Automation",
    description:
      "Un système d'automatisation complet pour la maison basé sur ESP32 et des capteurs IoT. Ce projet intègre des commandes à distance via une interface web simple et efficace.",
    technologies: ["ESP32", "IoT", "React Native"],
    image: esp32Image,
    github: "https://github.com/brydel/esp32-home-automation",
    demo: "https://wokwi.com/projects/esp32-home-automation",
    featured: true,
  },
  {
    title: "Next Admin Dashboard",
    description:
      "Un tableau de bord complet en React et Next.js conçu pour la gestion efficace des données des utilisateurs, des transactions et des statistiques, avec un design moderne et des fonctionnalités puissantes.",
    technologies: ["Next.js", "React", "Tailwind"],
    image: dashboardImage,
    github: "https://github.com/brydel/next-admin-dash",
    demo: "https://next-admin-dash-demo.com",
    featured: false,
  },
  {
    title: "Ottawa Transit Data Optimization",
    description:
      "Un projet d'analyse et d'optimisation des données de transport public de la ville d'Ottawa, utilisant Python, SQL, et React pour visualiser et améliorer l'efficacité des services de transport en commun.",
    technologies: ["Python", "React", "SQL", "Data Analysis"],
    image: ottawaImage,
    github: "https://github.com/brydel/ottawa-transit-data",
    demo: "https://ottawa-transit-data-demo.com",
    featured: false,
  },
];

const otherProjects = [
  {
    title: "Pomodoro Timer avec Tkinter",
    description:
      "Une application de minuterie Pomodoro développée en Python utilisant Tkinter. Elle aide à gérer le temps de travail et de pause en suivant la technique Pomodoro.",
    technologies: ["Python", "Tkinter"],
    github: "https://github.com/brydel/POMODORO-START",
    demo: null,
    icon: <FaCode size={32} className="text-primary" />,
  },
  {
    title: "Bellashop - Site E-commerce",
    description:
      "Un site e-commerce classique en cours de développement, offrant une plateforme pour la vente de produits en ligne avec une interface utilisateur conviviale.",
    technologies: ["JavaScript", "CSS", "HTML", "Python"],
    github: "https://github.com/brydel/Bellashop",
    demo: null,
    icon: <FaProjectDiagram size={32} className="text-primary" />,
  },
  {
    title: "ProjectGAT21 - Analyse de données",
    description:
      "Un projet de gestion et d'analyse de données utilisant des techniques modernes pour extraire des insights exploitables.",
    technologies: ["Python", "SQL"],
    github: "https://github.com/brydel/ProjectGAT21",
    demo: null,
    icon: <FaCode size={32} className="text-primary" />,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-background text-text py-20 px-6 sm:px-12 lg:px-24">
      {/* Titre de la section */}
      <h2 className="text-3xl sm:text-4xl font-retro text-primary mb-12 flex items-center">
        <span className="text-accent1 text-4xl mr-4">03.</span> Projets
        <span className="flex-grow border-t border-secondary ml-4"></span>
      </h2>

      {/* Liste des projets principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {mainProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-secondary rounded-lg overflow-hidden shadow-lg group"
            data-aos="fade-up"
          >
            {/* Image avec texte */}
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-code text-white mb-2">{project.title}</h3>
                <p className="text-sm font-retro text-gray-300 mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent1 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent1 transition"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section des autres projets */}
      <div className="mt-20">
        <h3 className="text-2xl sm:text-3xl font-retro text-primary mb-8 flex items-center">
          <span className="text-accent1 text-3xl mr-4"></span> Autres Projets
          <span className="flex-grow border-t border-secondary ml-4"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between"
              data-aos="fade-up"
            >
              {/* Icône du projet */}
              <div className="mb-4">{project.icon}</div>
              <h4 className="text-lg font-code text-primary mb-2">{project.title}</h4>
              <p className="text-sm font-retro text-textSecondary mb-4">
                {project.description}
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent1 transition"
                >
                  <FaGithub size={20} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent1 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
