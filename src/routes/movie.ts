import express from 'express'
import * as movieServices from '../services/movieServices'
import { toNewMovieData } from '../utils'
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
  try {
    // const { name, actors, year, rating, generes, director } = req.body

    const newMovieData = toNewMovieData(req.body)

    const newMovie = movieServices.newMovie(newMovieData)
    res.json(newMovie)
  } catch (e: any) {
    res.status(400).json(e.message)
  }
})

router.put('/:id', (req, res) => {
  const { name, actors, year, rating, generes, director } = req.body
  const movie = movieServices.updateMovie(+req.params.id, { name, actors, year, rating, generes, director })
  res.json(movie)
})

export default router
