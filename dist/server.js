"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var app_1 = __importDefault(require("./app"));
var ValidateEnv_1 = __importDefault(require("@utils/ValidateEnv"));
var Healthcheck_1 = __importDefault(require("@controllers/Healthcheck"));
var N5Vocab_Controller_1 = __importDefault(require("@controllers/jlptn5vocabulary/N5Vocab.Controller"));
(0, ValidateEnv_1.default)();
var app = new app_1.default([new Healthcheck_1.default(),
    new N5Vocab_Controller_1.default()], 12345);
app.listen();
