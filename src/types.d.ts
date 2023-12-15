/* puedo definir tipos de datos que se pueden usar en toda la aplicación */
/* no puedo repetir type porq se podria sobreescribir y causaria error */
/* puedo repetir interface porq pueden convivir */
export interface Movie {
  id: number
  name: string
  actors: string[]
  year: number
  rating: number
  generes: string[]
  director: string
}

export type MovieOnlyDirector = Pick<Movie, 'id' | 'name' | 'director'> // aca se define un tipo de dato que solo tiene id y name, y que consume de la interfaz padre TypePokemon

// export type TypePokemonNames = Omit<TypePokemon, 'strongAgainst' | 'weakAgainst'> aca se define un tipo de dato que tiene todos los campos de la interfaz padre TypePokemon menos strongAgainst y weakAgainst
