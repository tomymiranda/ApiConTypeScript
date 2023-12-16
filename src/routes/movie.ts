import express from 'express'
import * as movieServices from '../services/movieServices'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(movieServices.getAllMovies())
})

router.get('/:id', (_req, res) => {
  const movie = movieServices.getMovieById(+_req.params.id)
  return (movie != null) ? res.send(movie) : res.sendStatus(404)
})

router.get('/movieDirector', (_req, res) => {
  res.send(movieServices.getAllMovieAndDirector())
})

router.post('/newMovie', (req, res) => {
  const { name, actors, year, rating, generes, director } = req.body
  const newMovie = movieServices.newMovie({ name, actors, year, rating, generes, director })
  res.json(newMovie)
})

export default router
