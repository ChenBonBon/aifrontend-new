import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  federation,
  createModuleFederationConfig,
} from "@module-federation/vite";

const DEFAULT_WORKSPACE_DEV_MANIFEST_URL =
  "http://localhost:5174/mf-manifest.json";
const DEFAULT_WORKSPACE_REMOTE_ENTRY_URL =
  "http://localhost:4174/remoteEntry.js";

const createFederationConfig = (
  isDev: boolean,
  workspaceDevManifestUrl: string,
  workspaceRemoteEntryUrl: string,
) =>
  createModuleFederationConfig({
    name: "shell",
    manifest: isDev,
    exposes: {},
    remotes: {
      workspace: isDev
        ? `workspace@${workspaceDevManifestUrl}`
        : {
            type: "module",
            name: "workspace",
            entry: workspaceRemoteEntryUrl,
            shareScope: "default",
          },
    },
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
export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";
  const env = loadEnv(mode, process.cwd(), "");
  const workspaceDevManifestUrl =
    env.SHELL_WORKSPACE_DEV_MANIFEST_URL ??
    DEFAULT_WORKSPACE_DEV_MANIFEST_URL;
  const workspaceRemoteEntryUrl =
    env.SHELL_WORKSPACE_REMOTE_ENTRY_URL ??
    DEFAULT_WORKSPACE_REMOTE_ENTRY_URL;

  return {
    server: {
      port: 5173,
    },
    preview: {
      port: 4173,
    },
    build: {
      target: "chrome89",
    },
    plugins: [
      react(),
      tailwindcss(),
      federation(
        createFederationConfig(
          isDev,
          workspaceDevManifestUrl,
          workspaceRemoteEntryUrl,
        ),
      ),
    ],
  };
});
