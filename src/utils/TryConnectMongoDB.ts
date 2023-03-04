import mongoose from "mongoose";
import Config from "@config/Config";
import Logging from "./Logging";


const Connect_MongoDB = async (): Promise<void> => {
  const namespace = "CONNECT_MONGODB";
  const { path, user, password } = Config.mongo;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`mongodb+srv://${user}:${password}${path}`, {});
    Logging.info(namespace, 'Connected to MongoDB');
  } catch (error: any) {
    Logging.error(namespace, 'Cannot connect to MongoDB');
  }
};

export default Connect_MongoDB;