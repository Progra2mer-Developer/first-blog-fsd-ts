import webpack from "webpack";
import path from "path";

import { builldWebpackConfig } from "./config/build/builldWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "src", "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;
  const config: webpack.Configuration = builldWebpackConfig({
    mode: mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
