import Joi from "joi";

const create = Joi.object({
  write: Joi.string().required().default(""),
  japanese_transliteration: Joi.string().required().default(""),
  kanji_transliteration: Joi.string().required().default(""),
  meaning: Joi.string().required().default("")
});

const read = Joi.any();

export default {
  create, read
};