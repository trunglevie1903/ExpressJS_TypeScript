import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import Logging from '@utils/Logging';
import Config from '@config/Config';
import IController from '@interfaces/controller';
import LogRequestInfo from '@middlewares/LogRequestInfo';
import SetAPIRules from '@middlewares/SetAPIRules';

export default class App {
  public express: Application;
  public port: number;
  private host: string;
  private namespace: string;

  constructor(controllers: IController[], port: number) {
    this.express = express();
    this.port = Number(Config.server.port) || port;
    this.host = String(Config.server.host) || "localhost";
    this.namespace = "SERVER";

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares(): void {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(LogRequestInfo);
    this.express.use(SetAPIRules);
    this.express.use(compression());
  };

  private initializeControllers(controllers: IController[]): void {
    controllers.forEach((controller: IController) => {
      console.log(controller.path);
      this.express.use('/', controller.router);
    });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      Logging.info(this.namespace, `Server is running at http://${this.host}:${this.port}`);
    });
  };
};