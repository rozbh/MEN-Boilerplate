import express, { Request, Response } from 'express'
import catchAsync from './middleware/catchAsync'
const app = express()

app.get('/', catchAsync((req: Request, res: Response) => {
    res.send('Server Up & Run bruh!!!')
}))

export default app