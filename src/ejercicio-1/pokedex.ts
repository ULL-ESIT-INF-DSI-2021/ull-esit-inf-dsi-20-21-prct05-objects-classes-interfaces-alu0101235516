import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase Pokedex contiene todos los pokemon.
 */
export class Pokedex {
  /**
   * Constructor de la clase
   * @param GestorPokemon Conjunto de Pokemon
   */
  constructor(private GestorPokemon: Pokemon[]) {}

  /**
   * Funcion para acceder a la variable privada GestorPokemon
   * @returns los pokemon que tenemos guardados
   */

  public getPokedex() {
    return this.GestorPokemon;
  }

  /**
   * Funcion para añadir un pokemon a la base de datos
   * @param pokemon nuevo pokemon que quieres añadir
   */

  public añadirPokemon(pokemon: Pokemon) {
    this.GestorPokemon.push(pokemon);
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla la pokedex
   */

  public mostrarPokedex() {
    console.table(this.GestorPokemon, ["name", "weight", "height", "PokType"]);
  }
}

