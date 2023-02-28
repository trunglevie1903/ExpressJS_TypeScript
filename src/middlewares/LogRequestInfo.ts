import { Request, Response, NextFunction } from "express";

import Logging from "@utils/Logging";

const namespace = 'REQUEST_INFO';

const LogRequestInfo = (req: Request, res: Response, next: NextFunction) => {
  Logging.info(namespace, `METHOD: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress}`);
  res.on('finish', () => Logging.info(namespace, `METHOD: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress} - STATUS: ${res.statusCode}`));
  next();
};

export default LogRequestInfo;