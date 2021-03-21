import {Vehiculo} from "./vehiculo";

/**
 * Clase Guagua
 * Hereda de la clase Vehiculo
 */
export class Guagua extends Vehiculo {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   * @param enrollment Matricula del vehiculo
   * @param emissions Emisiones del vehiculo
   */
  constructor(velocity: number, dimensions: string, private emissions: number, private enrollment: string) {
    super(velocity, dimensions);
  }

  /**
   * Funcion para acceder a la variable privada emissions
   * @returns la emision de la guagua
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

  /**
   * Funcion para acceder a la variable privada enrollment
   * @returns la matricula de la guagua
   */
  public getEnrollment() {
    return this.enrollment;
  }
  /**
   * Funcion para cambiar la matricula del coche
   * @param newEnrollment Nueva matricula
   */
  public setEnrollment(newEnrollment: string) {
    this.enrollment = newEnrollment;
  }
}