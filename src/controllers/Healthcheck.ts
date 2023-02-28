import { Router, Request, Response, NextFunction } from 'express';

import IController from '@interfaces/controller';
import ValidateRequest from '@middlewares/ValidateRequest';
import HealthcheckValidation from '@controllers/HealthcheckValidation';
import HttpException from '@utils/HttpException';
import Logging from '@utils/Logging';

export default class HealthcheckController implements IController {
  public path = "/ping";
  public router = Router();
  private namespace = "HEALTHCHECK";

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.route(this.path)
      .get(ValidateRequest(HealthcheckValidation.get), this.get);
  }

  private get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({ message: "Ping pong!"});
    } catch (error: any) {
      // Logging.error(this.namespace, error.message);
      next(new HttpException(404, 'Healthcheck Failed!'));
    }
  };
}