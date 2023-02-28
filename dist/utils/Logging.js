"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var getCurrentTime = function () { return new Date().toLocaleString(); };
var Logging = /** @class */ (function () {
    function Logging() {
    }
    Logging.info = function (namespace, message) { return console.log(chalk_1.default.green("[".concat(getCurrentTime(), "] [").concat(namespace, "] [INFO] --- ")), chalk_1.default.greenBright(message)); };
    Logging.warn = function (namespace, message) { return console.log(chalk_1.default.yellow("[".concat(getCurrentTime(), "] [").concat(namespace, "] [WARN] --- ")), chalk_1.default.yellowBright(message)); };
    Logging.error = function (namespace, message) { return console.log(chalk_1.default.red("[".concat(getCurrentTime(), "] [").concat(namespace, "] [ERROR] --- ")), chalk_1.default.redBright(message)); };
    return Logging;
}());
exports.default = Logging;
