import {Vehiculo} from "./vehiculo";
import {Coche} from './coche';
import {Moto} from './moto';
import {Patinete} from './patinete';
import {Tren} from './tren';
import {Guagua} from './guagua';
import {Bicicleta} from './bicicleta';
import {Peaton} from './peaton';

/**
 * Clase Street
 */
export class Street {
  /**
  * Constructor
  * @param nombre nombre de la calle
  * @param localizacion localizacion de la calle
  * @param tipos tipos de vehiculos que pueden circular por la calle
  */

  constructor(private name: string, private location: string, private types: string[], private circulation: Vehiculo[]) {
  }

  /**
   * Funcion para acceder al nombre de la calle
   * @returns el nombre de la calle
   */
  public getName() {
    return this.name;
  }

  /**
   * Funcion para acceder al nombre de la localizacion de la calle
   * @returns la localizacion de la calle
   */
  public getLocation() {
    return this.location;
  }

  /**
   * Funcion para acceder a los tipos de vehiculos que pueden acceder a la calle
   * @returns los vehiculos capacitados
   */
  public getTypes() {
    return this.types;
  }

  /**
   * Funcion para acceder a todos los vehiculos que estan circulando ahora mismo
   * @returns los vehiculos que circulan
   */
  public getcirculation() {
    return this.circulation;
  }

  /**
   * Funcion para añadir un vehiculo nuevo a la circulacion, si es del tipo que acepta la calle
   * @param newVehiculo nuevo vehiculo a instanciar
   */
  public añadirVehiculo(newVehiculo: Vehiculo) {
    let index: number = 0;

    while (index < this.types.length) {
      if (this.types[index] == newVehiculo.constructor.name) {
        this.circulation.push(newVehiculo);
        break;
      } else {
        index++;
      }
    }
    if (index == this.types.length) {
      console.log("ERROR: El tipo de vehiculo es inadecuado para esta calle.");
    }
  }

  /**
   * Funcion para eliminar un vehiculo que ya esta circulando, pero decide salir de la calle
   * @param index posicion del vehiculo en la circulacion
   */
  public eliminarVehiculo(index :number) {
    this.circulation.splice(index, 1);
  }

  /**
   * Muestra la cantidad de vehiculos de cada tipo que estan circulando ahora mismo por la calle
   */
  public numeroVehiculos() {
    const countVehicles: [["Coches", number], ["Motos", number], ["Patinetes", number], ["Trenes", number], ["Guaguas", number], ["Bicicletas", number], ["Peatones", number]] =
                         [["Coches", 0], ["Motos", 0], ["Patinetes", 0], ["Trenes", 0], ["Guaguas", 0], ["Bicicletas", 0], ["Peatones", 0]];

    this.circulation.forEach((vehiculo) => {
      switch (true) {
        case vehiculo instanceof Coche:
          countVehicles[0][1]++; break;
        case vehiculo instanceof Moto:
          countVehicles[1][1]++; break;
        case vehiculo instanceof Patinete:
          countVehicles[2][1]++; break;
        case vehiculo instanceof Tren:
          countVehicles[3][1]++; break;
        case vehiculo instanceof Guagua:
          countVehicles[4][1]++; break;
        case vehiculo instanceof Bicicleta:
          countVehicles[5][1]++; break;
        case vehiculo instanceof Peaton:
          countVehicles[6][1]++; break;
      }
    });

    console.table(countVehicles);
  }

  /**
   * Muestra todos los vehiculos que estan circulando por la calle, pero, ordenado de mayor a menor
   */
  public mostrarVehiculos() {
    const output :string[] = [];
    const sorted :Vehiculo[] = this.circulation.sort((a, b) => b.velocity - a.velocity);
    for (let i :number = 0; i < sorted.length; i++) {
      output.push((sorted[i].constructor.name));
    }
    console.table(sorted);
  }
}
