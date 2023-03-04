import { Document } from "mongoose";

export default interface N5VocabInterface extends Document {
  write: string;
  japanese_transliteration: string;
  kanji_transliteration: string;
  meaning: string;
};