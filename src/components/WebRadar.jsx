import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import image1 from "../assets/react.svg";
import image2 from "../assets/nextdotjs.svg";
import image3 from "../assets/tailwindcss.svg";
import image4 from "../assets/javascript.svg";
import image5 from "../assets/material.svg";


// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Assurez-vous que les icônes sont définies ici
const ICONS = {
  "React.js": image1,
  "Next.js": image2,
  "Tailwind CSS": image3,
  "JavaScript": image4,
  "Material UI": image5,
};

// Données du graphique
const webSkills = {
  labels: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Material UI"],
  datasets: [
    {
      label: "Niveau de Compétence",
      data: [85, 80, 90, 75, 70],
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      borderWidth: 2,
    },
  ],
};

// Options pour le graphique
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
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
  scales: {
    r: {
      ticks: {
        beginAtZero: true,
        stepSize: 20,
        color: "#FFFFFF",
        font: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      angleLines: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      pointLabels: {
        color: "#FFFFFF",
        font: {
          size: 14,
          family: "Inter, sans-serif",
        },
      },
    },
  },
};

function WebRadar() {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto" data-aos="fade-up">
      {/* Titre */}
      <h3 className="text-lg font-bold text-primary mb-4 text-center">
        Compétences en Développement Web
      </h3>

      {/* Graphique */}
      <div className="relative w-full h-64 mb-6">
        <Radar data={webSkills} options={options} />
      </div>

      {/* Légende des icônes */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {webSkills.labels.map((skill, index) => (
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

export default WebRadar;
