"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
var MongoPathValidator = (0, envalid_1.makeValidator)(function (x) {
    if (/@.*retryWrites=true&w=majority$/.test(x))
        return x;
    else
        throw new Error('MONGO_PATH not valid.');
});
function ValidateEnv() {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)({
            choices: ['development', 'production'],
        }),
        HOST: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)({ default: 3333 }),
        MONGO_PATH: MongoPathValidator(),
        MONGO_USER: (0, envalid_1.str)(),
        MONGO_PASSWORD: (0, envalid_1.str)(),
        MYSQL_HOST: (0, envalid_1.str)(),
        MYSQL_USER: (0, envalid_1.str)(),
        MYSQL_PASSWORD: (0, envalid_1.str)(),
        MYSQL_DBNAME: (0, envalid_1.str)()
    });
}
exports.default = ValidateEnv;
