import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

export default function ValidateRequest(schema: Joi.Schema): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validateOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };
    try {
      const value = await schema.validateAsync(
        req.body, validateOptions
      );
      req.body = value;
      next();
    } catch (error: any) {
      const errors: string[] = [];
      error.details.forEach((error: Joi.ValidationErrorItem) => {
        errors.push(`${error.path}: ${error.message}`);
      });
      res.status(400).send({ errors: errors});
      next(error);
    }
  };
}