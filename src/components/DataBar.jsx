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

import pandas from "../assets/pandas.svg";
import sql from "../assets/mysql.svg";
import plo from "../assets/plotly.svg";
import sckiti from "../assets/scikitlearn.svg";
import numpy from "../assets/numpy.svg";


// Enregistrement des composants nécessaires
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Données des compétences en analyse de données
const dataSkills = {
  labels: ["Python (Pandas, NumPy)", "SQL", "Data Visualization", "Machine Learning"],
  datasets: [
    {
      label: "Niveau de Compétence",
      data: [85, 80, 75, 65],
      backgroundColor: [
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
        "rgba(255, 99, 132, 0.8)",
      ],
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: 1,
    },
  ],
};

// Icônes associées
const ICONS = {
  "Python (Pandas, NumPy)": pandas,numpy,
  SQL: sql,
  "Data Visualization": plo,
  "Machine Learning": sckiti,
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

function DataBar() {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto" data-aos="fade-up">
      {/* Titre */}
      <h3 className="text-lg font-bold text-primary mb-4 text-center">
        Compétences en Analyse de Données
      </h3>

      {/* Graphique */}
      <div className="relative w-full h-64 mb-6">
        <Bar data={dataSkills} options={options} />
      </div>

      {/* Légende des icônes */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {dataSkills.labels.map((skill, index) => (
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

export default DataBar;
