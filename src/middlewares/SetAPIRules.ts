import { Request, Response, NextFunction } from "express";

export default function SetAPIRules(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.header('Access-Control-Allow-Origin', '*'); /** * to allow access from any where, or put a list of trusted IP/address */
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
      res.status(200).json({});
    }
    next();
};