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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Importation explicite des icônes
import cIcon from "../assets/c.svg";
import cppIcon from "../assets/cplusplus.svg";
import pythonIcon from "../assets/python.svg";

// Association des technologies aux icônes
const ICONS = {
  C: cIcon,
  "C++": cppIcon,
  Python: pythonIcon,
};

// Configuration des données pour le graphique
const SKILLS = ["C", "C++", "Python"];
const LEVELS = [90, 85, 80];

const COLORS = {
  primary: "rgba(34, 202, 236, 1)",
  background: "rgba(34, 202, 236, 0.2)",
  grid: "#1A1A1A",
  pointLabel: "#F0F0F0",
};

const data = {
  labels: SKILLS,
  datasets: [
    {
      label: "Compétences Techniques",
      data: LEVELS,
      backgroundColor: COLORS.background,
      borderColor: COLORS.primary,
      borderWidth: 2,
      pointBackgroundColor: COLORS.primary,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: COLORS.primary,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
        color: COLORS.pointLabel,
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
      },
      grid: {
        color: COLORS.grid,
      },
      angleLines: {
        color: COLORS.grid,
      },
      pointLabels: {
        color: COLORS.pointLabel,
        font: {
          size: 14,
          family: "'Inter', sans-serif",
        },
      },
    },
  },
};

function SimplifiedSkillsChart() {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto" data-aos="fade-up">
      <h3 className="text-lg font-bold text-primary mb-4 text-center">
        Compétences Techniques
      </h3>

      {/* Graphique */}
      <div className="relative w-full h-80 mb-4">
        <Radar data={data} options={options} />
      </div>

      {/* Légende des icônes */}
      <div className="flex justify-around items-center gap-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={ICONS[skill]} alt={skill} className="w-10 h-10" />
            <span className="text-xs text-white mt-2">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimplifiedSkillsChart;
