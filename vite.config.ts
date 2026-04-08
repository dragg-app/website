import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ }) => {

  return {
    publicDir: "./public",
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    server: {
      host: true,
      port: 5174,
    },
    build: {
      target: "esnext",
      minify: "terser",
    },
  };
});
