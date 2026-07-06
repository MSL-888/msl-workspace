import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "/" convient pour un déploiement à la racine d'un domaine ou sous-domaine.
// Pour un sous-dossier (ex. monsite.com/app/), remplacer par base: "/app/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
