import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
