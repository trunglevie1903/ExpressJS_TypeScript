import chalk from 'chalk';

const getCurrentTime = () => new Date().toLocaleString();

export default class Logging {
  public static info = (namespace: string, message: string) => console.log(
    chalk.green(`[${getCurrentTime()}] [${namespace}] [INFO] --- `),
    chalk.greenBright(message)
  );

  public static warn = (namespace: string, message: string) => console.log(
    chalk.yellow(`[${getCurrentTime()}] [${namespace}] [WARN] --- `),
    chalk.yellowBright(message)
  );

  public static error = (namespace: string, message: string) => console.log(
    chalk.red(`[${getCurrentTime()}] [${namespace}] [ERROR] --- `),
    chalk.redBright(message)
  );
}