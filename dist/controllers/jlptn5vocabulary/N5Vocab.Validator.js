"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var create = joi_1.default.object({
    write: joi_1.default.string().required().default(""),
    japanese_transliteration: joi_1.default.string().required().default(""),
    kanji_transliteration: joi_1.default.string().required().default(""),
    meaning: joi_1.default.string().required().default("")
});
var read = joi_1.default.any();
exports.default = {
    create: create,
    read: read
};
