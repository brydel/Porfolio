import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite
export default defineConfig({
  plugins: [
    react(), // Plugin React pour JSX et Fast Refresh
  ],
  server: {
    open: true, // Ouvre automatiquement le projet dans le navigateur
    port: 3000, // Définit le port du serveur de développement
    strictPort: true, // Empêche Vite de changer de port
  },
  build: {
    sourcemap: true, // Génère une carte source pour le débogage
  },
});
