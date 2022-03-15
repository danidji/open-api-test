import express, { Application } from 'express';
import * as functions from 'firebase-functions';
import router from './router';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { swaggerOptions } from './utils/config';

const app: Application = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', router);

app.listen(3000, () => {
    console.log(`Server started on http://localhost:${3000}`);
});

exports.openApi = functions.region('europe-west1').https.onRequest(app);
