import 'module-alias/register';

import App from './app';
import ValidateEnv from '@utils/ValidateEnv';
import HealthcheckController from '@controllers/Healthcheck';

ValidateEnv();

const app = new App(
  [new HealthcheckController()],
  12345
);

app.listen();
