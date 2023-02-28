import { cleanEnv, str, port } from "envalid";

function ValidateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    HOST: str(),
    PORT: port({ default: 3333}),
  });
}

export default ValidateEnv;