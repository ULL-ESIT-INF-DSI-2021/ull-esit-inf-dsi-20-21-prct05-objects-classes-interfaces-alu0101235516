import {Articulo} from './articulo';

export class Bibliografico {
  constructor(private articulosGestion: Articulo[]) {
  }

  public getArticulos() {
    return this.articulosGestion;
  }

  public muestraArticulos() {
    console.table(this.articulosGestion);
  }

  public busqueda() {

  }
}
