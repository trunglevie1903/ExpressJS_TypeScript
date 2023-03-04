import N5VocabModel from "./N5Vocab.Model";
import N5VocabInterface from "./N5Vocab.Interface";
import Logging from "@utils/Logging";

export default class N5VocabServices {
  private n5vocab = N5VocabModel;
  private namespace = "N5VOCAB_SERVICES";

  public create = async (
    write: string,
    japanese_transliteration: string,
    kanji_transliteration: string,
    meaning: string
  ): Promise<N5VocabInterface> => {
    try {
      const n5vocab = await this.n5vocab.create({ write, japanese_transliteration, kanji_transliteration, meaning});
      return n5vocab;
    } catch (error: any) {
      let message = `Unable to create N5 vocab in MongoDB: ${error.message}`;
      Logging.error(this.namespace, message);
      throw new Error(message);
    }
  };

  public read = async (): Promise<N5VocabInterface[]> => {
    try {
      const all_n5vocab = await this.n5vocab.find();
      return all_n5vocab;
    } catch (error: any) {
      let message = `Unable to read N5 vocab in MongoDB: ${error.message}`;
      Logging.error(this.namespace, message);
      throw new Error(message);
    }
  };
};