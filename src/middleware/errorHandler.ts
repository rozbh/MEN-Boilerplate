import { NextFunction, Request, Response } from 'express'
import logger from './logger';
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const { statusCode, message } = err;
    interface errResponse {
        code: number,
        message: string
    }
    const rs: errResponse = {
        code: statusCode,
        message: message
    }
    logger.error(`${statusCode ?? 500}-${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(statusCode).send(rs);
};
export default errorHandler
