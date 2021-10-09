import express, { Request, Response, NextFunction } from 'express'
import catchAsync from './middleware/catchAsync'
const app = express()

app.get('/', catchAsync((req: Request, res: Response) => {
    res.send('jo')
}))

app.get('/t', catchAsync((req: Request, res: Response) => {
    throw new Error('hi')
}))

export default app