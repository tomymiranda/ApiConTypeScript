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

export default router
