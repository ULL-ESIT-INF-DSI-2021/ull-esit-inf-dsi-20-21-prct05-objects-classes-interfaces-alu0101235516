import {Articulo} from './articulo';

/**
 * Class Bibliografico contiene todos los articulos.
 */
export class Bibliografico {
  /**
   * Constructor de la clase
   * @param articulosGestion Conjunto de articulos
   */
  constructor(private articulosGestion: Articulo[]) {
  }

  /**
   * Funcion para acceder a la variable privada articulosGestion
   * @returns los articulos que tenemos guardados
   */

  public getArticulos() {
    return this.articulosGestion;
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla
   */

  public muestraArticulos() {
    console.table(this.articulosGestion);
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla solamente el titulo y el autor
   */

  public muestraTitulosAutor() {
    console.table(this.articulosGestion, ["titulo", "autor"]);
  }

  /**
   * Funcion para añadir articulos nuevos
   * @param articuloNew articulo nuevo que queremos añadir
   */

  public añadirArticulos(articuloNew: Articulo) {
    this.articulosGestion.push(articuloNew);
  }

  /**
   * Funcion para filtrar la busqueda
   * @param keywords Que queremos buscar
   * @param filtrado Por que tipo lo quieres filtrar
   * @returns El articulo/articulos filtrar en formato APA
   */
  public searchArticulo(keywords: string[], filtrado: string[]) {
    const numero: number[] = [];
    for (let i: number = 0; i < keywords.length; i++) {
      for (let j: number = 0; j < this.articulosGestion.length; j++) {
        for (let t: number = 0; t < filtrado.length; t++) {
          if (filtrado[t] == 'keywords') {
            for (let z: number = 0; z < this.articulosGestion[j].getKeywords().length; z++) {
              if (this.articulosGestion[j].getKeywords()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }
          if (filtrado[t] == 'fecha') {
            if (this.articulosGestion[j].getFecha().toFixed() == keywords[i]) {
              numero.push(j);
            }
          }
          if (filtrado[t] == 'autor') {
            for (let z: number = 0; z < this.articulosGestion[j].getAutor().length; z++) {
              if (this.articulosGestion[j].getAutor()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }

          if (filtrado[t] == 'editorial') {
            if (this.articulosGestion[j].getEditorial() == keywords[i]) {
              numero.push(j);
            }
          }
        }
      }
    }
    for (let i = numero.length -1; i >=0; i--) {
      if (numero.indexOf(numero[i]) !== i) numero.splice(i, 1);
    }

    const result: Articulo[] = [];
    while (numero.length > 0) {
      result.push(this.articulosGestion[numero[0]]);
      numero.shift();
    }
    const articulosEncontrados: string[] = [];
    for (let i: number = 0; i < result.length; i++) {
      articulosEncontrados.push(result[i].getAPA());
      console.log(articulosEncontrados[i]);
    }
    return articulosEncontrados;
  }
}
