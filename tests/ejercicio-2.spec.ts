import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {Bibliografico} from '../src/ejercicio-2/bibliografico';

describe(`EJ 2 - GESTOR BIBLIOGRAFICO`, () => {
  const articulo1: Articulo = new Articulo("Hiding information and signatures in trapdoor knapsacks", ["R. Merkle"], ["alu0101235516@ull.edu.es"], ["Cryptography"],
      "The knapsack problem is an NP-complete combinatorial problem that is strongly believed to be computationally difficult to solve in general.",
      1978, "IEEE", 387);
  const articulo2: Articulo = new Articulo("MEATSP: A Membrane Evolutionary Algorithm for Solving TSP", ["Ping Guo", "Mengliang Hou"], ["alu0101235516@ull.edu.es"], ["heuristic"],
      "In recent years, heuristic intelligent algorithms have achieved rapid development in solving combinatorial optimization problems.",
      1978, "IEEE", 387);

  const biblio = new Bibliografico([]);
  biblio.añadirArticulos(articulo1);
  biblio.añadirArticulos(articulo2);

  describe(`Probar llamadas de las partes del artículo`, () => {
    it('Titulo del articulo', () => {
      expect(articulo1.getTitulo()).to.be.equal("Hiding information and signatures in trapdoor knapsacks");
    });
    it('Autor/es del articulo', () => {
      expect(articulo1.getAutor()).to.deep.equal(["R. Merkle"]);
    });
    it('email/s del articulo', () => {
      expect(articulo1.getEmail()).to.deep.equal(["alu0101235516@ull.edu.es"]);
    });
    it('Keywords del articulo', () => {
      expect(articulo1.getKeywords()).to.deep.equal(["Cryptography"]);
    });
    it('Fecha del articulo', () => {
      expect(articulo1.getFecha()).to.be.equal(1978);
    });
    it('Editorial del articulo', () => {
      expect(articulo1.getEditorial()).to.be.equal("IEEE");
    });
    it('Citas del articulo', () => {
      expect(articulo1.getCitas()).to.be.equal(387);
    });
  });

  describe(`Probar funcionamiento y mostrado por pantalla del Gestor Bibliografico`, () => {
    it('Mostrado de la tabla de articulos totales', () => {
      biblio.muestraArticulos();
    });
    it('Mostrado de los titulos y sus autores de todos los articulos', () => {
      biblio.muestraTitulosAutor();
    });
  });

  describe(`Probar funcionamiento y mostrado por pantalla del formato APA`, () => {
    it('Mostrado del articulo 1 en formato APA', () => {
      console.log(`Formato APA del articulo-1: [${articulo1.getAPA()}]`);
    });
  });

  describe(`Probar funcionamiento del buscador`, () => {
    it('Flitrando por keyword', () => {
      biblio.searchArticulo(["heuristic"], ["keywords"]);
    });
    it('Flitrando por autor', () => {
      biblio.searchArticulo(["R. Merkle"], ["autor"]);
    });
  });
});

