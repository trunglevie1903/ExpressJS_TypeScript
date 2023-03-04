"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, HOST = _a.HOST, PORT = _a.PORT, MONGO_PATH = _a.MONGO_PATH, MONGO_USER = _a.MONGO_USER, MONGO_PASSWORD = _a.MONGO_PASSWORD, MYSQL_HOST = _a.MYSQL_HOST, MYSQL_USER = _a.MYSQL_USER, MYSQL_PASSWORD = _a.MYSQL_PASSWORD, MYSQL_DBNAME = _a.MYSQL_DBNAME;
var host = HOST || "localhost";
var port = PORT || 3333;
var server = {
    host: host,
    port: port
};
var mongo = {
    path: MONGO_PATH,
    user: MONGO_USER,
    password: MONGO_PASSWORD
};
var mysql = {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    dbname: MYSQL_DBNAME
};
exports.default = {
    server: server,
    mongo: mongo,
    mysql: mysql
};
