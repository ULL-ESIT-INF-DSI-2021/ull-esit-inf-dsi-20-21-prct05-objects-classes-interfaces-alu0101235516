import {Vehiculo} from "./vehiculo";

/**
 * Clase Bicicleta
 * Hereda de la clase Vehiculo
 */

export class Bicicleta extends Vehiculo {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   */
  constructor(velocity: number, dimensions: string) {
    super(velocity, dimensions);
  }
}
