import {Movable} from "./movable";

/**
 * Clase Vehiculo (Padre)
 * Implemente la interfaz Movable
 */

export class Vehiculo implements Movable {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   */
  constructor(public velocity: number, public dimensions: string) {}
}
