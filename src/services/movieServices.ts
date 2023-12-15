import { Movie, MovieOnlyDirector } from '../types'
import movieData from './movie.json'

const movie: Movie[] = movieData // aca se setea el array q trae los datos de movie.json

export const getAllMovies = (): Movie[] => movie // aca se obtiene el array de movie
// aca debe coincidir el tipo de respuesta con la interfaz definida en types.d.ts
export const getAllMovieAndDirector = (): MovieOnlyDirector[] => {
  return movie.map((movies) => {
    return {
      id: movies.id,
      name: movies.name,
      director: movies.director
    }
  })
}

// se contempla el caso de que no exista el id
export const getMovieById = (id: number): Movie | undefined => {
  return movie.find((movie) => movie.id === id)
}

export const getMovieByName = (name: string): Movie | undefined => {
  return movie.find((movie) => movie.name === name)
}

export const newMovie = (name: string, actors: string[], year: number, raiting: number, generes: string[], director: string): Movie => {
}
