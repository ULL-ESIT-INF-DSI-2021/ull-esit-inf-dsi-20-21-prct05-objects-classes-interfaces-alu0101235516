import {assert} from "chai";

/**
 * VENTA DE ELECTRODOMESTICOS - PE103
 * @param precio precio del televisor
 * @param peso peso del televisor
 * @param color color del televisor
 * @param consumo consumo del televisor
 * @param resolucion resolucion del televisor
 */

import {Electrodomestico} from '../src/electrodomestico';

export class Televisor extends Electrodomestico {
  constructor( protected precio: number, protected peso: number = 5, protected color: string, protected consumo: string, private resolucion: number = 20) {
    super(precio, peso, color, consumo);
    this.precio = precio;
    this.peso = peso;
    this.color = color;
    this.consumo = consumo;
    this.resolucion = resolucion;
  }
}

