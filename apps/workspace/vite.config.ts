import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  federation,
  createModuleFederationConfig,
} from "@module-federation/vite";
import {
  reactFederationShared,
  reactViteConfig,
} from "../../packages/config/vite/react.ts";

const createFederationConfig = (isDev: boolean) =>
  createModuleFederationConfig({
    name: "workspace",
    manifest: isDev,
    filename: "remoteEntry.js",
    dts: {
      tsConfigPath: "./tsconfig.federation.json",
      generateTypes: {
        compiledTypesFolder: "compiled-types",
      },
    },
    exposes: {
      "./App": "./src/App.tsx",
    },
    remotes: {},
    shared: reactFederationShared,
  });

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return mergeConfig(reactViteConfig, {
    server: {
      port: 5174,
    },
    preview: {
      port: 4174,
    },
    plugins: [react(), tailwindcss(), federation(createFederationConfig(isDev))],
  });
});
