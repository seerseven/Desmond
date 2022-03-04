import chalk from "chalk";

export default function logger(logLevel) {
  let level;

  switch (logLevel) {
    case "silent":
      level = 0;
      break;
    case "gulp":
      level = 1;
      break;
    case "desmond":
      level = 2;
      break;
    case "error":
      level = 3;
      break;
    default:
      level = 3;
  }

  return {
    level,
    gulp(...args) {
      if (level >= 0) {
        console.log(
          `${chalk.white.bgHex('#fa383e').bold(" Gulp: ")} ${chalk.white(...args)}`
        );
      }
    },
    desmond(...args) {
      if (level >= 2) {
        console.warn(
          `${chalk.white.bgHex('#1e953d').bold(" Desmond: ")} ${chalk.white(...args)}`
        );
      }
    },
    error(...args) {
      if (level >= 3) {
        console.error(
          `${chalk.white.bgHex('#197250').bold(" Error: ")} ${chalk.white(...args)}`
        );
      }
    },
  };
}
