import './config'
import express from 'express'
import { createServer } from 'http'
import { initSocket } from './socket'
import cors from 'cors'

const app = express()
app.use(cors())
const httpServer = createServer(app)

//* init socket
initSocket(httpServer)

const PORT = process.env.PORT;
httpServer.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`)
})
