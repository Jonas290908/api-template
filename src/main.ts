import express, { Express } from 'express';

import Logger from './logger';
import HttpLogMiddleware from './httpLogger';

const app: Express = express();
app.use(HttpLogMiddleware);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(8000, () => {
	Logger.info('Starting server on port 8000');
});
