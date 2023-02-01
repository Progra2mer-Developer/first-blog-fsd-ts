import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoader";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function builldWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}