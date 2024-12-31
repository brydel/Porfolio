import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import image1 from "../assets/react.svg";
import image2 from "../assets/nextdotjs.svg";
import image3 from "../assets/python.svg";
import image4 from "../assets/javascript.svg";
import image5 from "../assets/mysql.svg";

// Enregistrement des composants nécessaires
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Données des compétences générales
const generalSkills = {
  labels: ["Frontend", "Backend", "Database", "Algorithms"],
  datasets: [
    {
      label: "Niveau de Compétence",
      data: [80, 70, 60, 90], // Remplacez par vos données réelles
      backgroundColor: [
        "rgba(75, 192, 192, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(153, 102, 255, 0.7)",
      ],
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: 1,
    },
  ],
};

// Icônes associées
const ICONS = {
  Frontend: image4,
  Backend: image2,
  Database: image5,
  Algorithms: image3,
};

// Options pour personnaliser le graphique
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#FFFFFF",
        font: {
          size: 14,
          family: "'Inter', sans-serif",
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Niveau : ${context.raw}%`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#FFFFFF",
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#FFFFFF",
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
      },
    },
  },
};

function GeneralSkills() {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto" data-aos="fade-up">
      {/* Titre */}
      <h3 className="text-lg font-bold text-primary mb-4 text-center">
        Compétences Générales
      </h3>

      {/* Graphique */}
      <div className="relative w-full h-64 mb-6">
        <Bar data={generalSkills} options={options} />
      </div>

      {/* Légende des icônes */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {generalSkills.labels.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-secondary-light rounded-full shadow-md"
          >
            {/* Icône */}
            <img
              src={ICONS[skill]}
              alt={skill}
              className="w-10 h-10"
              style={{ filter: "brightness(1.2)" }}
            />
            {/* Nom de la technologie */}
            <span className="text-sm text-textPrimary mt-2">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralSkills;
