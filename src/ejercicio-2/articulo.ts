export class Articulo {
  constructor(private titulo: string, private autor: string, private email: string, private keywords: string, private resumen: string, private fecha: number,
              private editorial: string, private citas: number) {
  }

  public getTitulo() {
    return this.titulo;
  }
  public getAutor() {
    return this.autor;
  }
  public getEmail() {
    return this.email;
  }
  public getKeywords() {
    return this.keywords;
  }
  public getResumen() {
    return this.resumen;
  }
  public getFecha() {
    return this.fecha;
  }
  public getEditorial() {
    return this.editorial;
  }
  public getCitas() {
    return this.citas;
  }
}


const articulo1 = new Articulo("Hiding information and signatures in trapdoor knapsacks", "R. Merkle", "alu0101235516@ull.edu.es", "Cryptography",
    "The knapsack problem is an NP-complete combinatorial problem that is strongly believed to be computationally difficult to solve in general.",
    1978, "IEEE", 387);
const articulo2 = new Articulo("Hiding information and signatures in trapdoor knapsacks", "R. Merkle", "alu0101235516@ull.edu.es", "Cryptography",
    "The knapsack problem is an NP-complete combinatorial problem that is strongly believed to be computationally difficult to solve in general.",
    1978, "IEEE", 387);

const articulos = [articulo1, articulo2];
console.table(articulos);
