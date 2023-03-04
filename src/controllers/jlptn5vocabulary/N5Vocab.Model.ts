import { Schema, model } from "mongoose";
import N5VocabInterface from "./N5Vocab.Interface";

const N5Vocab_Schema = new Schema({
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

export default model<N5VocabInterface>('N5Vocab', N5Vocab_Schema);