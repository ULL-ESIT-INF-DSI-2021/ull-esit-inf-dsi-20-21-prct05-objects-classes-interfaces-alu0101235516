/**
 * Class Articulo cotienen los datos que componen un articulo.
 */

 export class Articulo {
  /**
   * Constructor de la clase
   * @param titulo Titulo del articulo
   * @param autor Autor/es del articulo
   * @param email Email de los autores
   * @param keywords Keywords del articulo
   * @param resumen Resumen del articulo
   * @param fecha Fecha de publicacion del articulo
   * @param editorial Editorial de publicado del articulo
   * @param citas Numero de citas que ha tenido el articulo
   */
  constructor(private titulo: string, private autor: string[], private email: string[], private keywords: string[], private resumen: string, private fecha: number,
              private editorial: string, private citas: number) {
  }

  /**
   * Funcion para acceder a la variable privada titulo
   * @returns el titulo del articulo
   */

  public getTitulo() {
    return this.titulo;
  }

  /**
   * Funcion para modificar la variable privada titulo
   * @param title nuevo titulo que queremos asignar
   */

  public setTitulo(title: string) {
    this.titulo = title;
  }

  /**
   * Funcion para acceder a la variable privada autor
   * @returns el nombre/es del autor/es
   */
  public getAutor() {
    return this.autor;
  }

  /**
   * Funcion para modificar la variable privada autor
   * @param author nuevo autor que queremos asignar
   */

  public setAutor(author: string) {
    this.autor.push(author);
  }

  /**
   * Funcion para acceder a la variable privada email
   * @returns  el email del autor/es
   */

  public getEmail() {
    return this.email;
  }

  /**
   * Funcion para modificar la variable privada email
   * @param email nuevo titulo que queremos asignar
   */

  public setEmail(email: string) {
    this.email.push(email);
  }

  /**
   * Funcion para acceder a la variable privada keywords
   * @returns la palabra clave del articulo
   */

  public getKeywords() {
    return this.keywords;
  }

  /**
   * Funcion para modificar la variable privada keywords
   * @param keywords nueva palabra clave que queremos asignar
   */

  public setKeywords(keywords: string) {
    this.keywords.push(keywords);
  }

  /**
   * Funcion para acceder a la variable privada resumen
   * @returns el resumen del articulo
   */

  public getResumen() {
    return this.resumen;
  }

  /**
   * Funcion para modificar la variable privada resumen
   * @param abstract nuevo resumen que queremos asignar
   */

  public setResumen(abstract: string) {
    this.resumen = abstract;
  }

  /**
   * Funcion para acceder a la variable privada fecha
   * @returns la fecha de publicacion del articulo
   */

  public getFecha() {
    return this.fecha;
  }

  /**
   * Funcion para modificar la variable privada fecha
   * @param date nueva fecha que queremos asignar
   */

  public setFecha(date: number) {
    this.fecha = date;
  }

  /**
   * Funcion para acceder a la variable privada editorial
   * @returns la editorial donde se publico el articulo
   */

  public getEditorial() {
    return this.editorial;
  }

  /**
   * Funcion para modificar la variable privada editorial
   * @param leader nueva editorial que queremos asignar
   */

  public setEditorial(leader: string) {
    this.editorial = leader;
  }

  /**
   * Funcion para acceder a la variable privada citas
   * @returns el numero de citas que ha tenido el articulo
   */

  public getCitas() {
    return this.citas;
  }

  /**
   * Funcion para modificar la variable privada citas
   * @param quote nuevo numero de citas que queremos asignar
   */

  public setCitas(quote: number) {
    this.citas = quote;
  }

  /**
   * Funcion para poner el articulo en formato APA
   * @returns el articulo en formato APA
   */

  public getAPA() {
    let output: string = "";
    let index = 0;

    this.autor.forEach((element) => {
      if (index == 0) {
        output = element;
      } else if (index > 0) {
        if (index == this.autor.length - 1) {
          output += ` y ${element}`;
        } else {
          output += `, ${element}.`;
        }
      }
      index++;
    });

    output += ` (${this.fecha}) "${this.titulo}", ${this.editorial}`;
    return output;
  }
}
