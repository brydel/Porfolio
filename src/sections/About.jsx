import React from "react";
import SkillsChart from "../components/SkillsChart";
import WebRadar from "../components/WebRadar";
import DataBar from "../components/DataBar";
import GeneralSkills from "../components/GeneralSkills";

// Importation des icônes
import CIcon from "../assets/c.svg";
import CppIcon from "../assets/cplusplus.svg";
import PythonIcon from "../assets/python.svg";
import EmbeddedIcon from "../assets/microchip-svgrepo-com.svg";
import  AutomationIcon from "../assets/esphome.svg";
import IoTIcon from "../assets/iot-context-svgrepo-com.svg";
import STM32Icon from "../assets/stmicroelectronics.svg";
import ESP32Icon from "../assets/esphome.svg";

function About() {
  const skills = [
    { name: "C", icon: CIcon },
    { name: "C++", icon: CppIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Embedded Systems", icon: EmbeddedIcon },
    { name: "IoT Development", icon: IoTIcon },
    { name: "Automation", icon: AutomationIcon },
    { name: "STM32", icon: STM32Icon },
    { name: "ESP32", icon: ESP32Icon },
  ];

  return (
    <section
    id="about"
    className="bg-background text-textPrimary min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 relative"
    data-aos="fade-up"
    >
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent1 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-retro text-primary mb-6 flex items-center">
          <span className="text-accent1 text-4xl mr-4">01.</span> À propos de moi
          <span className="flex-grow border-t border-secondary ml-4"></span>
        </h2>

        <p className="text-lg sm:text-xl font-code text-textSecondary mb-6">
          Bonjour, je suis Brydel Fosso, un développeur spécialisé en systèmes
          embarqués et IoT basé au Canada. Je suis passionné par la création de
          solutions innovantes pour l'automatisation et les technologies de
          l'Internet des Objets.
        </p>

        <p className="text-lg sm:text-xl text-textSecondary mb-6 font-code">
          Mon objectif est de concevoir des produits performants, évolutifs, et
          adaptés aux défis industriels modernes. Voici les technologies avec
          lesquelles je travaille :
        </p>

        {/* Liste des compétences avec icônes */}
        <ul className="grid grid-cols-2 gap-4 text-textPrimary font-code text-lg">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 before:content-['▸'] before:text-accent1 before:mr-2 hover:text-primary transition-transform transform hover:scale-105"
            >
              <img src={skill.icon} alt={skill.name} className="h-6 w-6" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section graphique */}
      <div className="flex flex-col items-center justify-center space-y-12">
  {/* Compétences Techniques */}
  <div className="w-full flex items-center justify-center">
    <SkillsChart />
  </div>

  {/* Développement Web */}
  <div className="w-full flex items-center justify-center">
    <WebRadar />
  </div>

  {/* Analyse de Données */}
  <div className="w-full flex items-center justify-center">
    <DataBar />
  </div>

  {/* Compétences Générales */}
  <div className="w-full flex items-center justify-center">
    <GeneralSkills />
  </div>
</div>

      
    </section>
  );
}

export default About;
