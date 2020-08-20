import express from 'express'
import dotenv from 'dotenv'

import { registerRoutes } from './routes'

const env = dotenv.config()

const app = express()
const port = process.env.PORT

registerRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})