import logger from "./logger";
import { Request, Response } from 'express'
const catchAsync = (func: any) => (req: Request, res: Response,): unknown => {
    try {
        logger.info(`${res.statusCode}- ${req.originalUrl} - ${req.method} - ${req.ip}`);
        func(req, res, logger);
    } catch (err: any) {
        logger.error(`${res.statusCode}-${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        return res.send('Oh no, something did not go well!');
    }
};

export default catchAsync