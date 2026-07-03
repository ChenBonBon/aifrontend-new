import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  federation,
  createModuleFederationConfig,
} from "@module-federation/vite";

const createFederationConfig = (isDev: boolean) =>
  createModuleFederationConfig({
    name: "workspace",
    manifest: isDev,
    filename: "remoteEntry.js",
    exposes: {
      "./App": "./src/App.tsx",
    },
    remotes: {},
    shared: {
      react: {
        singleton: true,
      },
      "react/": {
        singleton: true,
      },
      "react-dom": {
        singleton: true,
      },
    },
  });

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    server: {
      port: 5174,
    },
    preview: {
      port: 4174,
    },
    build: {
      target: "chrome89",
    },
    plugins: [react(), tailwindcss(), federation(createFederationConfig(isDev))],
  };
});
