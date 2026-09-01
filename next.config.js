// `.config()` is what actually READS .env — requiring the module alone leaves
// `parsed` undefined, so nothing here ever reached the build.
const envConfig = require("dotenv").config();

// The ONLY .env variables that reach the client bundle. `env:` below inlines
// its values into public JavaScript, so spreading everything `.env` holds would
// ship every variable in the file — harmless while it holds nothing but these
// four, and a leak the moment an API key or a database URL lands beside them.
// Add a name here only if the browser is meant to see it.
const PUBLIC_ENV = ["BASE_PATH", "CDN_URL", "SITE_NAME", "SITE_URL"];
const publicEnv = Object.fromEntries(
  PUBLIC_ENV.filter((key) => envConfig.parsed?.[key] !== undefined).map(
    (key) => [key, envConfig.parsed[key]],
  ),
);

module.exports = {
  output: "export",
  trailingSlash: true,
  compress: true,
  pageExtensions: ["tsx"],
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
    },
  },
  env: publicEnv,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};
