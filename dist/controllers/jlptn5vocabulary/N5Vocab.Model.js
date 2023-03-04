"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var N5Vocab_Schema = new mongoose_1.Schema({
    write: {
        type: String,
        required: true,
        default: "",
    },
    japanese_transliteration: {
        type: String,
        required: true,
        default: ""
    },
    kanji_transliteration: {
        type: String,
        required: true,
        default: ""
    },
    meaning: {
        type: String,
        required: true,
        default: ""
    }
});
exports.default = (0, mongoose_1.model)('N5Vocab', N5Vocab_Schema);
