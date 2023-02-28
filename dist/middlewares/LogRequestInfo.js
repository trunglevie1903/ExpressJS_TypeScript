"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logging_1 = __importDefault(require("@utils/Logging"));
var namespace = 'REQUEST_INFO';
var LogRequestInfo = function (req, res, next) {
    Logging_1.default.info(namespace, "METHOD: ".concat(req.method, " - URL: ").concat(req.url, " - IP: ").concat(req.socket.remoteAddress));
    res.on('finish', function () { return Logging_1.default.info(namespace, "METHOD: ".concat(req.method, " - URL: ").concat(req.url, " - IP: ").concat(req.socket.remoteAddress, " - STATUS: ").concat(res.statusCode)); });
    next();
};
exports.default = LogRequestInfo;
