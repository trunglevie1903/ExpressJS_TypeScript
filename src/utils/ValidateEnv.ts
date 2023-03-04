import { cleanEnv, str, port, makeValidator } from "envalid";

const MongoPathValidator = makeValidator(x => {
  if (/@.*retryWrites=true&w=majority$/.test(x)) return x;
  else throw new Error('MONGO_PATH not valid.');
});

function ValidateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    HOST: str(),
    PORT: port({ default: 3333 }),
    MONGO_PATH: MongoPathValidator(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
    MYSQL_HOST: str(),
    MYSQL_USER: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_DBNAME: str()
  });
}

export default ValidateEnv;