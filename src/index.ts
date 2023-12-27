import express from 'express'

import movie from './routes/movie'

const app = express()
app.use(express.json())// para recibir json

const PORT = 3000
/* _par asi ignora el parametro, esto es propio de typescript */
app.get('/prueba', (req, res) => {
  console.log('Hello world')
  res.send('Hello world de prueba')
})

app.use('/api/movie', movie)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
