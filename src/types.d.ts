/*puedo definir tipos de datos que se pueden usar en toda la aplicación*/
/* no puedo repetir type porq se podria sobreescribir y causaria error */
/*puedo repetir interface porq pueden convivir */

export interface TypePokemon {
    id: number;
    name: string;
    strongAgainst: string[];
    weakAgainst: string[];
}