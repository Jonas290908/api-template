import morgan, { StreamOptions } from 'morgan';

import Logger from './logger';

const stream: StreamOptions = {
	write: (message) => Logger.http(message.substring(0, message.lastIndexOf('\n')))
};

const skip = () => {
	const env = process.env.NODE_ENV || 'dev';
	return env !== 'dev';
};

const httpLogMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', { stream, skip });

export default httpLogMiddleware;
