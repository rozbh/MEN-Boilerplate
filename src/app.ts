import express, { NextFunction, Request, Response } from 'express'
import catchAsync from './middleware/catchAsync'
import errorHandler from './middleware/errorHandler'
import logHandler from './middleware/logHandler'
import ApiErr from './utils/ApiErr'
const app = express()
app.use(logHandler)
app.get('/', catchAsync(async (req: Request, res: Response) => {
    throw new ApiErr(403, "not found")
}))

app.get('/12', catchAsync(async (req: Request, res: Response) => {
    res.send('12')
}))

app.use(() => {
    throw new ApiErr(403, "not found12")
})
app.use(errorHandler)
export default app