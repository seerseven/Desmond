#!/usr/bin/env node

import logger from "./logger.js";
import { build } from "./bundle.js";

const [, , ...args] = process.argv;
const LOGGER = logger();

args.forEach((value) => {
  switch (value) {
    case "serve":
      LOGGER.gulp("is starting...");
      LOGGER.desmond("is watching over your changes");
      try {
        build({
          development: true,
        });
      } catch (err) {
        LOGGER.error(err);
      }
      break;

    case "watch":
      LOGGER.desmond("is watching you!!");
      try {
        build({
          development: true,
        });
      } catch (err) {
        LOGGER.error(err);
      }
      break;

    case "build":
      LOGGER.desmond("is building files crazy fast");
      try {
        build({}).then(() => {
          LOGGER.desmond("finished building files in few Milliseconds");
          LOGGER.desmond("minified all static files for production");
        }
        );
      } catch (err) {
        LOGGER.error(err);
      }
      break;

    case "lint":
      LOGGER.desmond("is linting files");
      break;

    default:
      LOGGER.error("Unknown desmond command");
      break;
  }
});
