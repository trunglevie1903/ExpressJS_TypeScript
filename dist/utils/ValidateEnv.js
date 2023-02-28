"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function ValidateEnv() {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)({
            choices: ['development', 'production'],
        }),
        HOST: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)({ default: 3333 }),
    });
}
exports.default = ValidateEnv;
