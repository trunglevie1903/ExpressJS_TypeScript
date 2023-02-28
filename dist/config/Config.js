"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, HOST = _a.HOST, PORT = _a.PORT;
var host = HOST || "localhost";
var port = PORT || 3333;
var server = {
    host: host,
    port: port
};
exports.default = {
    server: server
};
