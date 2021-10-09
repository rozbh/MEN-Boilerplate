import http from 'http'
import app from './app'
import dotenv from 'dotenv'
import logger from './middleware/logger'

dotenv.config()
const Server = http.createServer(app)
Server.listen(process.env.PORT, () => {
    //connect to db
    logger.info(`Server Up And Run On Port: ${process.env.PORT}`)
})