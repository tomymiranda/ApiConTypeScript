import { TypePokemon } from '../types';
import typePokemonData from './typePokemon.json';

const typesPokemon: TypePokemon[] = typePokemonData // aca se setea el array q permitira el dato de typePokemon y se le llena con typePokemonData

export const getAllTypesPokemon = () => typePokemonData

export const addNewTypePokemon = (newTypePokemon: any) => null
