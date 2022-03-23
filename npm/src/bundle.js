import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import logger from "./logger.js";
import entrypoints from "./entrypoints.js";

export const build = async ({
  development = false,
  plugins = [],
  ...options
}) => {
  const LOGGER = logger();

  await esbuild
    .build({
      entryPoints: [...entrypoints],
      entryNames: "[name]",
      outdir: "src/build",
      outbase: "src",
      format: "esm",
      target: "es2015",
      bundle: true,
      watch: development && {
        onRebuild(error, result) {
          if (error) LOGGER.error("watch failed: ", error);
        },
      },
      sourcemap: !development,
      minify: !development,
      ...options,
      plugins: [...plugins, sassPlugin()],
    })
    .catch(() => process.exit(1));
};
