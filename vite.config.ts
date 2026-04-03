import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: "/",
    publicDir: "./public",
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    server: {
      host: true,
      port: 5174,
      ...(mode === "development" && {
        proxy: {
          "/api": {
            target: env.VITE_SERVER,
            changeOrigin: true,
          },
        },
      }),
    },
    build: {
      target: "esnext",
      minify: "terser",
    },
  };
});
