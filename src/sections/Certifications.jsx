
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/certification/image1.png";
import image2 from "../assets/certification/image2.png";
import image3 from "../assets/certification/image3.png";
import image4 from "../assets/certification/image4.png";
import { FaTimes } from "react-icons/fa";

const certifications = [
  {
    title: "Azure IoT Hub Device Management",
    description: "Examiner les approches de la gestion des appareils IoT à grande échelle.",
    date: "16 Novembre 2024",
    src: image1,
    ctaText: "Voir la certification",
    ctaLink: "https://learn.microsoft.com/api/achievements/share/fr-ca/BrydelHesroneFossoSaounde-7692/HAMX22C8?sharingId=143687D2EEEDF982",
    details: `Cette certification explore les approches modernes de la gestion des appareils IoT dans des environnements complexes,
    avec un focus sur Azure IoT Hub. J'ai appris à configurer, surveiller et maintenir des dispositifs à grande échelle, 
    en utilisant des outils avancés pour assurer leur connectivité et leur fiabilité.`,
  },
  {
    title: "Introduction au Cloud Computing",
    description: "Apprenez les bases des services de cloud computing modernes.",
    date: "16 Novembre 2024",
    src: image2,
    ctaText: "Voir la certification",
    ctaLink: "https://learn.microsoft.com/api/achievements/share/fr-ca/BrydelHesroneFossoSaounde-7692/FV47M7VX?sharingId=143687D2EEEDF982",
    details: `Cette certification m'a permis d'acquérir une compréhension approfondie des services cloud, 
    y compris les modèles IaaS, PaaS et SaaS. J'ai également appris à identifier les avantages stratégiques du cloud pour les entreprises modernes.`,
  },
  {
    title: "Azure IoT Hub Tools",
    description: "Évaluation des outils pour la gestion des appareils IoT via Azure IoT Hub.",
    date: "15 Novembre 2024",
    src: image3,
    ctaText: "Voir la certification",
    ctaLink: "https://learn.microsoft.com/api/achievements/share/fr-ca/BrydelHesroneFossoSaounde-7692/FV4RR53X?sharingId=143687D2EEEDF982",
    details: `Dans cette certification, j'ai exploré les outils essentiels pour la configuration et la gestion des appareils IoT. 
    J'ai appris à optimiser l'intégration et la gestion de divers capteurs et dispositifs connectés en utilisant Azure IoT Hub.`,
  },
  {
    title: "Azure IoT Hub Methods",
    description: "Découvrez les concepts et méthodes pour gérer efficacement les appareils IoT.",
    date: "15 Novembre 2024",
    src: image4,
    ctaText: "Voir la certification",
    ctaLink: "https://learn.microsoft.com/api/achievements/share/fr-ca/BrydelHesroneFossoSaounde-7692/B6HJ42XD?sharingId=143687D2EEEDF982",
    details: `Cette certification m'a enseigné les concepts avancés et les méthodes pratiques pour optimiser la gestion des appareils IoT. 
    J'ai appris à concevoir des architectures résilientes et évolutives pour les environnements connectés.`,
  },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certifications"
      className="relative bg-background text-textPrimary py-20 px-6 sm:px-12 lg:px-24"
      data-aos="fade-up"
    >
      {/* Titre de la section */}
      <h2 className="text-3xl sm:text-4xl font-retro text-primary mb-12 text-center">
        <span className="text-accent1 mr-4">04.</span> Certifications
      </h2>

      {/* Overlay sombre pour la carte active */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-20 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-md"
            >
              <div className="relative">
                <img
                  src={activeCert.src}
                  alt={activeCert.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 text-white bg-primary p-2 rounded-full shadow hover:bg-accent1 hover:text-white"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-textSecondary mb-4">
                  {activeCert.description}
                </p>
                <p className="text-sm text-textSecondary mb-4">
                  {activeCert.details}
                </p>
                <p className="text-xs text-primary">Date : {activeCert.date}</p>
                <a
                  href={activeCert.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center bg-primary text-white py-2 rounded-md hover:bg-accent1 transition"
                >
                  {activeCert.ctaText}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            layoutId={`card-${cert.title}`}
            className="relative cursor-pointer bg-secondary hover:bg-secondary-light p-4 rounded-lg shadow-md transition transform hover:scale-105"
            onClick={() => setActiveCert(cert)}
          >
            {/* Badge pour inciter à lire */}
            
            <div className="absolute top-2 left-2 flex items-center bg-primary text-white text-xs font-bold py-1 px-2 rounded-md shadow-md">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
  Lire
</div>


            <img
              src={cert.src}
              alt={cert.title}
              className="h-40 w-full rounded-lg object-cover mb-4"
            />
            <h3 className="text-md font-semibold text-primary mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-textSecondary">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}