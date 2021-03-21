import {Vehiculo} from "./vehiculo";

/**
 * Clase Tren
 * Hereda de la clase vehiculo
 */
export class Tren extends Vehiculo {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   * @param emissions Emisiones del vehiculo
   */
  constructor(velocity: number, dimensions: string, private emissions: number) {
    super(velocity, dimensions);
  }

  /**
   * Funcion para acceder a la variable privada emissions
   * @returns la emision de la moto
   */
  public getEmissions() {
    return this.emissions;
  }
  /**
   * Funcion para añadir una nueva emision
   * @param newEmissions nueva emision
   */
  public setEmissions(newEmissions: number) {
    this.emissions = newEmissions;
  }
}
