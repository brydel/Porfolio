import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import citeLogo from "../assets/lacite.png"
const courses = [
    // Étape 1
    {
      title: "IFM – Réseaux I",
      description: "Introduction aux réseaux informatiques et leurs configurations de base.",
      technologies: ["Networking"],
      grade: "A+",
      step: 1,
    },
    {
      title: "IFM – Algèbre et trigonométrie",
      description: "Apprentissage des mathématiques appliquées à l'informatique.",
      technologies: ["Mathematics"],
      grade: "A",
      step: 1,
    },
    {
      title: "IFM – Introduction à la gestion d'un système d'exploitation",
      description: "Exploration des systèmes d'exploitation et de leurs fonctions fondamentales.",
      technologies: ["Operating Systems"],
      grade: "A+",
      step: 1,
    },
    {
      title: "IFM – Introduction à la programmation",
      description: "Apprentissage des bases de la programmation en C et Python.",
      technologies: ["C", "Java"],
      grade: "A+",
      step: 1,
    },
    {
      title: "IFM – Architecture de l'ordinateur",
      description: "Étude des concepts fondamentaux de l'architecture matérielle.",
      technologies: ["Computer Architecture"],
      grade: "A",
      step: 1,
    },
    {
      title: "FRA – Mise à niveau - Communication orale et écrite",
      description: "Développement des compétences en communication écrite et orale en français.",
      technologies: ["French"],
      grade: "A",
      step: 1,
    },
    {
      title: "ENL – Oral Communication: Beginner Level",
      description: "Introduction à la communication orale en anglais.",
      technologies: ["English"],
      grade: "A",
      step: 1,
    },
    // Étape 2
    {
      title: "IFM – Statistiques",
      description: "Analyse statistique et application en informatique.",
      technologies: ["Statistics"],
      grade: "A",
      step: 2,
    },
    {
      title: "IFM – Assurance de qualité logicielle",
      description: "Techniques et outils pour garantir la qualité des logiciels.",
      technologies: ["Quality Assurance"],
      grade: "A+",
      step: 2,
    },
    {
      title: "IFM – Introduction à la programmation Web client",
      description: "Développement de pages web interactives avec JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      grade: "A+",
      step: 2,
    },
    {
      title: "IFM – Développement d'applications mobiles pour Android",
      description: "Création d'applications mobiles sur la plateforme Android.",
      technologies: ["Android"],
      grade: "A+",
      step: 2,
    },
    {
      title: "IFM – Programmation orientée objet en C++",
      description: "Introduction à la programmation orientée objet en C++.",
      technologies: ["C++"],
      grade: "A+",
      step: 2,
    },
    {
      title: "IFM – Introduction aux bases de données",
      description: "Conception et manipulation de bases de données relationnelles.",
      technologies: ["SQL"],
      grade: "A+",
      step: 2,
    },
    {
      title: "ENL – Written Communication: Beginner Level",
      description: "Développement des compétences en communication écrite en anglais.",
      technologies: ["English"],
      grade: "A",
      step: 2,
    },
    // Étape 3
    {
      title: "IFM – Développement de jeux",
      description: "Création de jeux interactifs en utilisant des langages de programmation modernes.",
      technologies: ["Game Development"],
      grade: "A",
      step: 3,
    },
    {
      title: "IFM – Structures de données appliquées",
      description: "Étude des structures de données essentielles pour l'informatique.",
      technologies: ["Data Structures"],
      grade: "A+",
      step: 3,
    },
    {
      title: "IFM – Procédures de bases de données relationnelles",
      description: "Optimisation et gestion avancée des bases de données.",
      technologies: ["SQL"],
      grade: "A+",
      step: 3,
    },
    {
      title: "IFM – Mathématiques appliquées",
      description: "Application des concepts mathématiques à l'informatique.",
      technologies: ["Mathematics"],
      grade: "A",
      step: 3,
    },
    {
      title: "IFM – Gestion de projets",
      description: "Planification et gestion des projets informatiques.",
      technologies: ["Project Management"],
      grade: "A",
      step: 3,
    },
    {
      title: "IFM – Tests logiciels",
      description: "Introduction aux méthodes de tests logiciels.",
      technologies: ["Testing"],
      grade: "A+",
      step: 3,
    },
    {
      title: "IFM – Électronique",
      description: "Fondamentaux de l'électronique appliqués aux systèmes embarqués.",
      technologies: ["Electronics"],
      grade: "A+",
      step: 3,
    },
    // Étape 4
    {
      title: "IFM – Fondements de la cybersécurité",
      description: "Introduction aux concepts de sécurité informatique.",
      technologies: ["Cybersecurity"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Introduction aux systèmes embarqués",
      description: "Notions de base sur le matériel et logiciels des systèmes embarqués.",
      technologies: ["Embedded Systems"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Structures de données séquentielles",
      description: "Exploration des structures de données avancées.",
      technologies: ["Data Structures"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Développement d'applications mobiles pour iOS",
      description: "Création d'applications mobiles sur la plateforme iOS.",
      technologies: ["iOS"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Bases de données relationnelles",
      description: "Gestion avancée des bases de données relationnelles.",
      technologies: ["SQL"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Gestion d'entreprise",
      description: "Principes de gestion et d'administration des entreprises.",
      technologies: ["Management"],
      grade: "Non complété",
      step: 4,
    },
    {
      title: "IFM – Introduction aux technologies des serveurs web",
      description: "Installation et gestion des technologies serveurs.",
      technologies: ["Web Servers"],
      grade: "Non complété",
      step: 4,
    },
    // Étape 5
    {
      title: "IFM – Systèmes embarqués avancés",
      description: "Exploration approfondie des systèmes embarqués.",
      technologies: ["Embedded Systems"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Patrons de conception",
      description: "Utilisation des patrons de conception en développement logiciel.",
      technologies: ["Design Patterns"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Systèmes embarqués appliqués",
      description: "Applications pratiques des systèmes embarqués.",
      technologies: ["Embedded Systems"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Protocole de communication",
      description: "Étude des protocoles de communication modernes.",
      technologies: ["Communication Protocols"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Introduction à l'intelligence artificielle",
      description: "Notions de base de l'intelligence artificielle et applications.",
      technologies: ["AI"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Introduction à la programmation distribuée",
      description: "Conception de systèmes distribués.",
      technologies: ["Distributed Systems"],
      grade: "Non complété",
      step: 5,
    },
    {
      title: "IFM – Structures de données avancées",
      description: "Étude approfondie des structures de données.",
      technologies: ["Data Structures"],
      grade: "Non complété",
      step: 5,
    },
    // Étape 6
    {
      title: "IFM – Informatique nuagique",
      description: "Concepts et pratiques de l'informatique en nuage.",
      technologies: ["Cloud Computing"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Projet d'intégration - Analyse",
      description: "Première partie du projet d'intégration avec une analyse approfondie.",
      technologies: ["Project Analysis"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Bases de données massives",
      description: "Gestion des bases de données massives.",
      technologies: ["Big Data"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Intelligence artificielle appliquée",
      description: "Applications pratiques de l'intelligence artificielle.",
      technologies: ["AI"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Sécurité informatique appliquée",
      description: "Principes et pratiques de sécurité informatique.",
      technologies: ["Cybersecurity"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Algorithmes numériques",
      description: "Étude des algorithmes numériques.",
      technologies: ["Algorithms"],
      grade: "Non complété",
      step: 6,
    },
    {
      title: "IFM – Projet d'intégration - Livrables",
      description: "Finalisation et livraison du projet d'intégration.",
      technologies: ["Project Delivery"],
      grade: "Non complété",
      step: 6,
    },
  ];
  
  
  
  function Education() {
    const [visibleCourses, setVisibleCourses] = useState(3);
  
    const showMoreCourses = () => {
      setVisibleCourses((prev) => Math.min(prev + 3, courses.length));
    };
  
    const showLessCourses = () => {
      setVisibleCourses(3);
    };
  
    return (
      <section
        id="education"
        className="bg-background text-textPrimary py-20 px-6 sm:px-12 lg:px-24"
        data-aos="fade-up"
      >
        {/* Titre de la section */}
        <h2 className="text-3xl sm:text-4xl font-retro text-primary mb-12 flex items-center">
          <span className="text-accent1 text-4xl mr-4">02.</span> Éducation
          <span className="flex-grow border-t border-secondary ml-4"></span>
        </h2>
  
        {/* Logo et informations de l'école */}
        <div className="flex items-center mb-12">
          <img
            src={citeLogo}
            alt="Logo de La Cité collégiale"
            className="h-16 w-auto mr-4 rounded-md"
          />
          <div>
            <p className="text-xl font-code text-primary">La Cité collégiale</p>
            <p className="text-lg font-code text-textSecondary">
              Technologie du génie informatique
            </p>
          </div>
        </div>
  
        {/* Grille des cours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, visibleCourses).map((course, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-custom-dark hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <h3 className="text-xl font-code text-primary mb-2">{course.title}</h3>
              <p className="text-md font-code text-textSecondary mb-4">
                Technologies : {course.technologies.join(", ")}
              </p>
              <p className="text-sm text-textSecondary mb-2">
                Note finale : <span className="text-accent1">{course.grade}</span>
              </p>
              <div className="absolute inset-0 bg-primary bg-opacity-90 text-textPrimary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <p className="text-sm sm:text-md font-code">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Boutons de pagination */}
        <div className="mt-8 text-center">
          {visibleCourses < courses.length && (
            <button
              onClick={showMoreCourses}
              className="bg-primary text-textPrimary px-6 py-3 rounded-lg text-lg font-code shadow-custom-dark hover:bg-accent1 transition-transform transform hover:scale-105"
            >
              Voir plus
            </button>
          )}
          {visibleCourses > 3 && (
            <button
              onClick={showLessCourses}
              className="bg-secondary text-textPrimary px-6 py-3 rounded-lg text-lg font-code shadow-custom-dark hover:bg-accent1 transition-transform transform hover:scale-105 ml-4"
            >
              Voir moins
            </button>
          )}
        </div>
      </section>
    );
  }
  
  export default Education;