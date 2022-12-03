import express, { Express } from 'express';

import logger from './logger';
import httpLogMiddleware from './http-logger';

const app: Express = express();
app.use(httpLogMiddleware);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(8000, () => {
	logger.info('Starting server on port 8000');
});
