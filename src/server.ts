import 'module-alias/register';

import App from './app';
import ValidateEnv from '@utils/ValidateEnv';
import HealthcheckController from '@controllers/Healthcheck';
import N5VocabController from '@controllers/jlptn5vocabulary/N5Vocab.Controller';

ValidateEnv();

const app = new App(
  [new HealthcheckController(),
  new N5VocabController()],
  12345
);

app.listen();
