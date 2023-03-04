import { Router, Request, Response, NextFunction } from "express";
import IController from "@interfaces/controller";
import HttpException from "@utils/HttpException";
import ValidateRequest from "@middlewares/ValidateRequest";
import N5VocabValidator from "./N5Vocab.Validator";
import N5VocabServices from "./N5Vocab.Services";

export default class N5VocabController implements IController {
  public path = "/n5vocab";
  public router = Router();
  private N5VocabServices = new N5VocabServices();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = (): void => {
    this.router.route(`${this.path}`)
      .get(ValidateRequest(N5VocabValidator.read), this.read)
      .post(ValidateRequest(N5VocabValidator.create), this.create);
  };

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { write, japanese_transliteration, kanji_transliteration, meaning } = req.body;
      const n5vocab = await this.N5VocabServices.create(write, japanese_transliteration, kanji_transliteration, meaning);
      res.status(201).json({ n5vocab });
      next();
    } catch (error: any) {
      next(new HttpException(400, 'Cannot create N5 Vocab in MongoDB'));
    }
  };

  private read = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) : Promise<Response | void> => {
    try {
      const all_n5vocab = await this.N5VocabServices.read();
      res.status(200).json(all_n5vocab);
      next();
    } catch (error: any) {
      next(new HttpException(400, 'Cannot create N5 Vocab in MongoDB'));
    }
  };
};