export const reactViteConfig = {
  build: {
    target: "chrome89",
  },
};

export const reactFederationShared = {
  react: {
    singleton: true,
  },
  "react/": {
    singleton: true,
  },
  "react-dom": {
    singleton: true,
  },
};
