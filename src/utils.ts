import { NewMovieEntry } from './types'

export const toNewMovieData = (object: any): NewMovieEntry => {
  const newMovieData: NewMovieEntry = {
    name: parseString(object.name),
    actors: parseStringArray(object.actors),
    year: parseNumber(object.year),
    rating: parseNumber(object.rating),
    generes: parseStringArray(object.generes),
    director: parseString(object.director)
  }
  return newMovieData
}

const parseString = (string: any): string => {
  if (!isString(string)) {
    throw new Error('Incorrect or missing string')
  }
  return string
}

const isString = (text: any): boolean => {
  return typeof text === 'string' || text instanceof String
}

const parseNumber = (number: any): number => {
  if (!isNumber(number)) {
    throw new Error('Incorrect or missing number')
  }
  return number
}

const isNumber = (number: any): boolean => {
  return typeof number === 'number' || number instanceof Number
}

const parseStringArray = (array: any): string[] => {
  if (!isArray(array)) {
    throw new Error('Incorrect or missing array')
  }
  return array
}

const isArray = (array: any): boolean => {
  return Array.isArray(array)
}
