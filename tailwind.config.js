/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // Vert technologique
        secondary: "var(--secondary-color)", // Bleu profond
        accent1: "var(--accent-color-1)", // Bleu électrique
        accent2: "var(--accent-color-2)", // Vert lumineux
        background: "var(--background-color)", // Fond principal
        textPrimary: "var(--text-color-primary)", // Blanc cassé pour le texte principal
        textSecondary: "var(--text-color-secondary)", // Gris métal pour le texte secondaire
      },
      backgroundImage: {
        'circuit-pattern': "url('/src/assets/certfif1.png')",
      },
      fontFamily: {
        retro: ['VT323', 'monospace'], // Style rétro pour les titres
        code: ['Space Mono', 'monospace'], // Style technique/code
      },
      fontSize: {
        xs: ['0.75rem', '1rem'], // Petits textes ou annotations
        sm: ['0.875rem', '1.25rem'], // Sous-titres ou légendes
        base: ['1rem', '1.5rem'], // Texte standard
        lg: ['1.25rem', '1.75rem'], // Sous-titres plus grands
        xl: ['1.5rem', '2rem'], // Titres de section
        '2xl': ['2rem', '2.5rem'], // Titres principaux
        '3xl': ['3rem', '3.5rem'], // Titres d’accueil
        '4xl': ['4rem', '4.5rem'], // Titres d’accueil très impactants
      },
      spacing: {
        'section': '6rem', // Espacement pour les sections
        'gap': '2rem', // Espacement général entre éléments
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Ombre légère
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)', // Ombre plus sombre
      },
    },
  },
  plugins: [],
};
