import express from 'express'  //ESmodules
import familiaRouter from './routes/familia'
import { seguridad } from './services/familiaService'

const app = express()
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 5003

app.use(seguridad)
app.use('/familia', familiaRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})