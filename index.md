# Informe. Práctica 5: Objetos, clases e interfaces.
## Desarrollo de Sistemas Informáticos.
#### ADRIAN HERNANDEZ SUAREZ - alu0101235516@ull.edu.es


### _**Introducción.**_

  Para llevar a cabo este informe, hemos tenido que realizar 3 ejercicios diferentes acerca de la utilización de clases e interfaces. Cada ejercico es diferente a otro y con eso hemos conseguido mayor diversidad y mayor conocimiento acerca de diferentes áreas del **TypeScript**.

### _**Objetivos.**_

  El objetivo de esta práctica es resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad, toda la utilización y la mayor eficacia que te dan las clases y las interfaces para la realización de las funciones en **TypeScript**.

### _**Primer paso: Creación de los directorios de trabajo**_

  Para completar este primer apartado, tendremos que seguir los pasos que se muestran en el siguiente enlace [Creación de un proyecto inicial para trabajar con TypeScript](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) con esto lo que conseguiremos será crear un espacio de trabajo ideal para comenzar con el desarrollo de los ejercicios propuestos.
  Cuando tengamos esta parte realizada, tendremos creado un directorio llamado `./src`, en este directorio es donde alojaremos todos los ejercicios que vayamos haciendo, cada uno en un fichero independiente con la siguiente notación `ejercicio-n.ts`.
  
### _**Segundo paso: Instalación de mocha y chai.  Además de la configuración de TypeDoc**_
  
  Una vez tengamos hecho el primer paso de esta práctica tendremos que hacer la instalación de TypeDoc, esto es un generador automático de documentación para proyectos de **TypeScript**.  Para conocer mejor esto y seguir la instalación y configuración correctamente, mire el siguiente enlace [Instalación y Configuración de TypeDoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view). 
  Cuando tengamos la documentación creada, tendremos que proceder a la instalación de `Mocha` y de `Chai`. Para conocer mejor su funcionamiento y ver la correcta pauta de instalación, siga el siguiente enlace [Instalación y Configuración de Mocha y Chai](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view).
  
  Cuando tengamos todo esto listo, lo que conseguiremos es hacer un TDD del proyecto, es decir, las pruebas unitarias. Utilizando el comando `npm test` podremos ejecutar dichas pruebas, viendo si la función que hemos creado, es correcta o no. Para dar validez y constancia de esto, tendremos que hacer un commit antes de la realización del código y con el test hecho, viendo como falla dicho test, y luego tendremos que hacer otro commit después de la correcta realización del código para dar constancia de que esta bien realizado.

### _**Tercer paso: Realizar los ejercicios propuestos**_
### Ejercicio 1 - Decodificar resistencias.

  **Enunciado a realizar**

Se pide crear una Pokedex donde se almacene la información relacionada con distintos Pokemons. Para cada Pokemon, se deben almacenar los siguientes elementos de información en la Pokedex: 
- Nombre del Pokemon
- Peso y altura
- Tipo
- Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP).

Además diseñe una clase Combat que simule el combate entre dos Pokemons.

Como vamos a tener que realizar varias clases, las vamos a ir explicando poco a poco cada una de ellas.

  **La clase Pokemon**
  
```TypeScript
export class Pokemon {
  private BasicData = {
    AT: 0,
    DF: 0,
    VL: 0,
    HP: 0,
  }
  constructor(private name: string, private weight: number, private height: number, private PokType: string, BasicData: [number, number, number, number]) {
    this.BasicData.AT = BasicData[0];
    this.BasicData.DF = BasicData[1];
    this.BasicData.VL = BasicData[2];
    this.BasicData.HP = BasicData[3];
  }

  public getName() {
    return this.name;
  }
  public getWeight() {
    return this.weight;
  }
  public getHeight() {
    return this.height;
  }
  public getPokType() {
    return this.PokType;
  }
  public getBasicData() {
    return this.BasicData;
  }
  public setHP(hp: number) {
    this.BasicData.HP = hp;
  }
}
```
  La clase `Pokemon` la utilizamos para poder crear un objeto de tipo `Pokemon` que tenga diferentes atributos, desde nuestro constructor recibiremos, el nombre del pokemon, el peso, la altura, el tipo, y finalmente las estadísticas básicas, que son (el ataque, la defensa, la velocidad, y la vida maxima). 
  Por otro lado tenemos los métodos `getters` de cada uno de los atributos del constructor, el cual nos servirá para poder acceder a cada uno de ellos y además hemos creado, el `setter` de la vida máxima, para así poder irla alterando a medida que avanza el combate pokemon (que veremos más adelante).
  
**La clase Pokedex**
  
```TypeScript
import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase Pokedex contiene todos los pokemon.
 */
export class Pokedex {
  /**
   * Constructor de la clase
   * @param GestorPokemon Conjunto de Pokemon
   */
  constructor(private GestorPokemon: Pokemon[]) {}

  /**
   * Funcion para acceder a la variable privada GestorPokemon
   * @returns los pokemon que tenemos guardados
   */

  public getPokedex() {
    return this.GestorPokemon;
  }

  /**
   * Funcion para añadir un pokemon a la base de datos
   * @param pokemon nuevo pokemon que quieres añadir
   */

  public añadirPokemon(pokemon: Pokemon) {
    this.GestorPokemon.push(pokemon);
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla la pokedex
   */

  public mostrarPokedex() {
    console.table(this.GestorPokemon, ["name", "weight", "height", "PokType"]);
  }
}
```
  La clase `Pokedex` nos sirve para almacenar todos los pokemon en un sitio, es decir, a esta clase, le podremos introducir un objeto de tipo `Pokemon` el cual se quedará almacenado en nuestra Pokedex. Lo que tendrá el constructor de esta clase será un vector, el cual almacenará a todos los pokemon, pudiendo acceder a ellos o añadir otro a la base de datos.
  Tenemos el método `getPokedex()` el cual retornará los pokemon que tenemos guardado dentro de ella, el método `añadirPokemon()` el cual sirve (como nombre antes) para añadir un nuevo pokemon a la pokedex.
  Y finalmente tenemos la función `mostrarPokedex()` la cual nos sirve para mostrar en forma de tabla, los pokemon dentro de la pokedex con sus estadísticas, en este caso he decidido únicamente mostrar el nombre, el peso, la altura, y el tipo de pokemon que es.
  
  **La clase Combat**
  
```TypeScript
import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase combate contiene el metodo para hallar el daño y los pokemon que van a combatir
 */

export class Combat {
  /**
   * Constructor de la clase
   * @param Pok1 Primer pokemon
   * @param Pok2 Segundo pokemon
   */

  constructor(private Pok1: Pokemon, private Pok2: Pokemon) {
  }

  /**
   * Funcion para ver entre quien es el combate
   * @returns una muestra por pantalla de los combatientes
   */

  public getCombate() {
    return (`El combate es entre ${this.Pok1.getName()} y ${this.Pok2.getName()}`);
  }

  /**
   * Daño que hace un pokemon a otro
   * @param PokAttack Eleccion de que pokemon hace el ataque
   * @returns El daño que ha hecho el pokemon al otro
   */

  public damageGet(PokAttack: number) {
    let efectPk1: number = 0;
    let efectPk2: number = 0;
    let daño: number = 0;
    let dañoInt: number = 0;

    switch (this.Pok1.getPokType()) {
      case `fuego`: {
        if (this.Pok2.getPokType() == `hierba`) {
          efectPk1 = 2;
          efectPk2 = 0.5;
        } else if (this.Pok2.getPokType() == `agua` || this.Pok2.getPokType() == `fuego`) {
          efectPk1 = 0.5;
          efectPk2 = 2;
        } else {
          efectPk1 = 1;
          efectPk2 = 1;
        }
      } break;

      case `agua`: {
        if (this.Pok2.getPokType() == `fuego`) {
          efectPk1 = 2;
          efectPk2 = 0.5;
        } else {
          efectPk1 = 0.5;
          efectPk2 = 2;
        }
      } break;

      case `hierba`: {
        if (this.Pok2.getPokType() == `agua`) {
          efectPk1 = 2;
          efectPk2 = 0.5;
        } else if (this.Pok2.getPokType() == `fuego` || this.Pok2.getPokType() == `hierba`) {
          efectPk1 = 0.5;
          efectPk2 = 2;
        } else {
          efectPk1 = 1;
          efectPk2 = 1;
        }
      } break;

      case `electrico`: {
        if (this.Pok2.getPokType() == `agua`) {
          efectPk1 = 2;
          efectPk2 = 0.5;
        } else if (this.Pok2.getPokType() == `electrico`) {
          efectPk1 = 0.5;
          efectPk2 = 2;
        } else {
          efectPk1 = 1;
          efectPk2 = 1;
        }
      }
    }

    if (PokAttack == 0) {
      daño = 50 * (this.Pok1.getBasicData().AT / this.Pok2.getBasicData().DF) * efectPk1;
    } else {
      daño = 50 * (this.Pok2.getBasicData().AT / this.Pok1.getBasicData().DF) * efectPk2;
    }
    dañoInt = Math.round(daño);
    return dañoInt;
  }

  /**
   * Funcion del combate entre los dos pokemon
   * @returns Quien ha ganado el combate
   */

  public start() {
    let PokAttack: number = 0;
    let i: number = 0;

    while ((this.Pok1.getBasicData().HP > 0) && (this.Pok2.getBasicData().HP > 0)) {
      console.log(`RONDA ${i}`);
      i++;

      if (PokAttack == 0) {
        console.log(`Esta atacando: ${this.Pok1.getName()}`);
        this.Pok2.setHP((this.Pok2.getBasicData().HP) - this.damageGet(PokAttack));
        console.log(`Vida de ${this.Pok2.getName()} restante: ${this.Pok2.getBasicData().HP} HP.`);
        console.log();
        PokAttack++;
      } else {
        console.log(`Esta atacando: ${this.Pok2.getName()}`);
        this.Pok1.setHP((this.Pok1.getBasicData().HP) - this.damageGet(PokAttack));
        console.log(`Vida de ${this.Pok1.getName()} restante: ${this.Pok1.getBasicData().HP} HP.`);
        console.log();
        PokAttack--;
      }
    }
    console.log();
    if (this.Pok1.getBasicData().HP <= 0) {
      console.log(`EL VENCEDOR ES ${this.Pok2.getName()}!!!`);
      return this.Pok2.getName();
    } else {
      console.log(`EL VENCEDOR ES ${this.Pok1.getName()}!!!`);
      return this.Pok1.getName();
    }
  }
}
```
 Finalmente tenemos la clase `Combat`, esta clase tendrá como parámetros dos pokemon diferentes, los cuales se prestarán a hacer una simulación de combate. Para poder ver quien gana el combate, primero tendremos que ver el daño que le hace un pokemon a otro, para esto hacemos uso del método `damageGet()` el cual, según el tipo de pokemon que sea, verá la eficacia que le hace a su adversario, es decir, si el tipo de pokemon1 es de tipo fuego, pues le hará una eficacia mayor a un pokemon de tipo hierba.
 Para poder hacer eso, hacemos uso de un `switch`, este switch es el mismo que use en la práctica 3 para el ejercicio 9, con una diferencia, que le asigno también la eficacia que le hace el pokemon rival al pokemon 1.
 Hay que nombrar que a nuestro método le entra como parámetro el pokemon que ataca, si el pokemon 0 (que es el pokemon 1) o el pokemon 1 (que es el pokemon 2), dependiendo de esto, al final del método, se realizará una función de daño diferente, y se retornará.
 
 Al final de la clase, tenemos nuestro método `start()` este método es el principal de la clase, ya que es el que simula el combate pokemon, cuando el combate empiece, y mientas alguno de los dos pokemon tengan más de 0 de HP, seguirá el combate, lo que hace nuestro método es que según el pokemon que ataque, se le hará un daño al adversario que le restará vida. Cuando uno de los dos pokemon tenga la vida inferior o igual a 0 se decidirá el ganador del combate.
 
   **Aqui tenemos el test del código:**
    
 ```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';

describe(`EJ 1 - POKEDEX`, () => {
  const Electrode: Pokemon = new Pokemon("Electrode", 66.6, 1.2, "electrico", [50, 70, 150, 60]);
  const Marowak: Pokemon = new Pokemon("Marowak", 45, 1, "fuego", [80, 110, 45, 60]);
  const Starmie: Pokemon = new Pokemon("Starmie", 80, 1.1, "agua", [75, 85, 115, 60]);
  const Sceptile: Pokemon = new Pokemon("Sceptile", 52.2, 1.7, "hierba", [85, 65, 120, 70]);


  const pokedex = new Pokedex([]);
  pokedex.añadirPokemon(Electrode);
  pokedex.añadirPokemon(Marowak);
  pokedex.añadirPokemon(Starmie);
  pokedex.añadirPokemon(Sceptile);

  const combatePrincipal = new Combat(Electrode, Starmie);

  describe(`Probar llamadas de los datos de un pokemon`, () => {
    it('Nombre Pokemon', () => {
      expect(Starmie.getName()).to.be.equal("Starmie");
    });
    it('Peso Pokemon', () => {
      expect(Starmie.getWeight()).to.be.equal(80);
    });
    it('Altura Pokemon', () => {
      expect(Starmie.getHeight()).to.be.equal(1.1);
    });
    it('Tipo Pokemon', () => {
      expect(Starmie.getPokType()).to.be.equal("agua");
    });
    it('Ataque Pokemon', () => {
      expect(Starmie.getBasicData().AT).to.be.equal(75);
    });
    it('Defensa Pokemon', () => {
      expect(Starmie.getBasicData().DF).to.be.equal(85);
    });
    it('Velocidad Pokemon', () => {
      expect(Starmie.getBasicData().VL).to.be.equal(115);
    });
    it('Vida Pokemon', () => {
      expect(Starmie.getBasicData().HP).to.be.equal(60);
    });
  });

  describe(`Probar mostrado de la pokedex en formato tabla`, () => {
    it('Se puede crear un tipo pokedex', () => {
      expect(pokedex.getPokedex()).not.to.be.equal(null);
    });
    it('Todos los pokemon de la pokedex', () => {
      pokedex.mostrarPokedex();
    });
  });

  describe('Probar llamada a un objeto de la clase Combat', () => {
    it('Combate principal', () => {
      expect(combatePrincipal.getCombate()).to.be.equal(`El combate es entre Electrode y Starmie`);
    });
    it('QUE EMPIECE EL COMBATE!', () => {
      expect(combatePrincipal.start()).to.be.equal(`Electrode`);
    });
  });
});
```

### Ejercicio 2 - Gestor Bibliográfico.

   **Enunciado a realizar**

Diseñe el conjunto de clases e interfaces que considere para representar un gestor bibliográfico. El desarrollo realizado debe tener las siguientes funcionalidades:

Para cada artículo de investigación habrá que almacenar:

  - Título
  - Autor o autores del artículo.
  - Email de cada uno de los autores.
  - Palabras claves o keywords.
  - Resumen o abstract del artículo.
  - Fecha de publicación.
  - Editorial en la que se publicó el artículo.
  - Número de citas: cantidad de veces que el artículo ha sido referenciado en otros trabajos.
  - Además, incluya un método que devuelva la referencia del artículo en formato APA para revista electrónica sin DOI.
  
El gestor bibliográfico deberá:

  - Almacenar la información de múltiples artículos.
  - Mostrar por la consola la información incluida en la base de datos en formato tabla (console.table).
  - Permitir llevar a cabo búsquedas de trabajos por palabras claves y mostrar los resultados de la búsqueda en formato de tabla. Además, se deberá poder filtrar por los campos  fecha de publicación, editorial y nombre de autor.
  - Permitir la exportación de los resultados de una búsqueda en formato de cita APA.

Como vamos a tener que realizar varias clases, las vamos a ir explicando poco a poco cada una de ellas.

  **La clase Articulo**
  
```TypeScript
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
```
  La clase `Articulo` la utilizamos para poder crear un objeto de tipo `Articulo` que tenga diferentes atributos, desde nuestro constructor recibiremos, el titulo del artículo, el autor/autores, el email de los autores, palabras clave, el resumen, la fecha de publicación, la editorial con la que fue publicada el número de citas. 
  Por otro lado tenemos los métodos `getters y setters` de cada uno de los atributos del constructor, el cual nos servirá para poder acceder a cada uno de ellos y para modificar en cualquier momento algún atributo que especifiquemos.
  Finalmente, tenemos un método muy importante, que es uno de los requisitos de la práctica, el método `getAPA()` este método nos sirve para convertir nuestro artículo en formato APA, para revista electrónica sin DOI. Simplemente es una salida por pantalla del artículo ordenado de una forma específica, donde he hecho un condicional en el caso de que existan más de 1 autor que haya realizado el artículo.
  
**La clase Bibliografico**
  
```TypeScript
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
```
  La clase `Bibliografico` nos sirve para almacenar todos los artículos en un sitio, es decir, a esta clase, le podremos introducir un objeto de tipo `Artículo` el cual se quedará almacenado en nuestro Gestor Bibliográfico. Lo que tendrá el constructor de esta clase será un vector, el cual almacenará a todos los artículos, pudiendo acceder a ellos o añadir otro a la base de datos. Además el principal funcionamiento de esta clase, es el hecho de poder filtrar la búsqueda del mismo ya sea por palabras clave, o por otro parámetro diferente.
  En la clase podemos encontrar varios métodos, el método `getArticulos()` el cual nos sirve para ver los artículos que están dentro de nuestra base de datos, el método `muestraArticulos() y muestraTitulosAutor()` el cual nos sirve para mostrar por pantalla nuestro gestor bibliográfico en formato tabla, el método `añadirArticulo()` el cual nos sirve para añadir un nuevo artículo a nuestra base de conocimientos y finalmente nuestro método más importante, `searchArticulo()` este método recibe dos parámetros, primero lo que queremos buscar, y el segundo de que tipo es lo que queremos buscar. Lo que hacemos son varios recorridos usando el bucle `for` para recorrer el vector keyword, como el vector filtro, dentro de estos bucles, tenemos una serie de condicionales, los cuales nos ayudan a definir que campo estamos filtrando y ver si en los articulos que hay en nuestra base de conocimiento, aquello que queremos filtrar lo encontramos o no. En el caso de que algun articulo concuerde con lo que hemos querido filtrar, se almacenará en un nuevo vector de `articulosEncontrados` y se mostrarán por pantalla.
 
   **Aqui tenemos el test del código:**
    
 ```TypeScript
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
```
 
### Ejercicio 3 - Medios de transporte.
 
   **Enunciado a realizar**

Cree una interfaz denominada `Movable` que incluya las propiedades y métodos necesarios que deberá implementar cualquier clase que represente a un objeto que pueda moverse. A continuación, escriba las clases necesarias para representar los medios de transporte mencionados con anterioridad.

Por último, cree una clase `Street` que reciba el nombre de una calle y su localización, además de distintos tipos de vehículos que podrían circular por la misma. La clase deberá incluir un método que muestre por la consola la cantidad de vehículos de cada tipo que hay en ella en cada momento. Asimismo, se deberá poder añadir o eliminar vehículos de la calle en cualquier momento y ordenar y mostrar los vehículos según la velocidad a la que circulan.

Como vamos a tener que realizar varias clases, las vamos a ir explicando poco a poco cada una de ellas.

  **La interfaz Movable**
  
```TypeScript
/**
 * Interfaz Movable para vehiculos
 */

 export interface Movable {
  velocity: number;
  dimensions: string;
}
```
  La interfaz `Movable` contiene como parámetros la velocidad del vehiculo, y la dimension del vehiculo. Esta interfaz la usaremos para implementarla en nuestra clase padre, la cual se llamará `Vehiculos` que explicaremos a continuación.
  
  **La clase Vehiculo**
  
```TypeScript
import {Movable} from "./movable";

/**
 * Clase Vehiculo (Padre)
 * Implemente la interfaz Movable
 */

export class Vehiculo implements Movable {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   */
  constructor(public velocity: number, public dimensions: string) {}
}
```
  La clase `Vehiculo` como nombramos anteriormente, implementará la interfaz `Movable`, esta clase, contiene un constructor al que le pasaremos de forma **pública** los parámetros que ha recogido de la interfaz. Esta clase, es la padre, y tendrá como clases hija a:
  
  - La clase bicicleta - 
 
```TypeScript
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
```

  - La clase coche - 

```TypeScript
import {Vehiculo} from "./vehiculo";

/**
 * Clase Coche
 * Hereda de la clase Vehiculo
 */

export class Coche extends Vehiculo {
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
   * @returns la emision del coche
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
   * @returns la matricula del coche
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
```
  La cual, tiene dos parámetros más, los cuales están declarados de forma privada, estos parámetros son la emisión de gases y la matrícula. Como son parámetros privados, tendremos que asignarle un `getter y setter` a cada uno.
  
  - La clase guagua -

```TypeScript
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
```
  La cual, tiene dos parámetros más, los cuales están declarados de forma privada, estos parámetros son la emisión de gases y la matrícula. Como son parámetros privados, tendremos que asignarle un `getter y setter` a cada uno.

  - La clase moto - 

```TypeScript
import {Vehiculo} from "./vehiculo";

/**
 * Clase Moto
 * Hereda de la clase Vehiculo
 */
export class Moto extends Vehiculo {
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

  /**
   * Funcion para acceder a la variable privada enrollment
   * @returns la matricula de la moto
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
```
  La cual, tiene dos parámetros más, los cuales están declarados de forma privada, estos parámetros son la emisión de gases y la matrícula. Como son parámetros privados, tendremos que asignarle un `getter y setter` a cada uno.

  - La clase patinete - 

```TypeScript
import {Vehiculo} from "./vehiculo";

/**
 * Clase Patinene
 * Hereda de la clase Vehiculo
 */
export class Patinete extends Vehiculo {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   */
  constructor(velocity: number, dimensions: string) {
    super(velocity, dimensions);
  }
}
```

  - La clase peaton - 

```TypeScript
import {Vehiculo} from "./vehiculo";

/**
 * Clase Peaton
 * Hereda de la clase Vehiculo
 */
export class Peaton extends Vehiculo {
  /**
   * Constructor de la clase
   * @param velocity Velocidad a la que se mueve el vehiculo
   * @param dimensions Dimensiones del vehiculo
   */

  constructor(velocity: number, dimensions: string) {
    super(velocity, dimensions);
  }
}
```

  - La clase tren - 

```TypeScript
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
```
  La cual, tiene un parámetros más, los cuales están declarados de forma privada, este parámetro es la emisión de gases. Como es un parámetro privado, tendremos que asignarle un `getter y setter` independiente.


**La clase Street**
  
```TypeScript
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
```
  La clase `Street` nos sirve para, a través de diferentes métodos, poder ver los vehículos que están ciruclando por una calle, llevar su contabilidad y ver a la velocidada a la que circulan, el constructor de la clase recibe como parámetro el nombre de la calle, la localidad de esta, el tipo de vehiculo que admite la calle y un vector de vehiculos que puede contener cualquier tipo de vehículo admitido. 
  Nuestra clase tiene varios métodos diferentes, los cuales nos servirán de apoyo para diferentes tareas. 
  
  - El método `añadirVehiculo()` lo utilizamos para cuando un vehículo quiere acceder a nuestra calle, y lo implementamos en nuestra circulación. Si el tipo de vehículo qu quiere acceder es correcto, se le dejará circular.
  
  - El método `eliminarVehiculo()` nos sirve para cuando un vehículo desea abandonar la calle, pues lo eliminamos de nuestra circulación, nuestro método registra la posición en la que se encuentra y la elimina haciendo uso del `.splice()`.
  
  - El método `numeroVehiculos()` la usaremos para llevar una cuenta del número de vehículos de cada tipo que se encuentra en la circulación, gracias a un `switch` infinito, mientras queden vehículos en circulación iremos comprobando de que tipo es, en el caso de que sea de un tipo (por ejemplo) coche, el contador del tipo coche aumentará en 1. Finalmente nos mostrará en formato de tabla, el recuento de los vehículos en circulación.
  
  - El método `mostrarVehiculos()` lo usaremos para mostrar en formato tabla todos los vehículos que están en circulación pero esta vez ordenados de mayor a menor según su velocidad. Esto lo conseguimos haciendo uso del método íntegro `.sort()` y con una función anónima que le pasamos a este método, nos muestra la tabla como queremos.
 
   **Aqui tenemos el test del código:**
    
 ```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Vehiculo} from "../src/ejercicio-3/vehiculo";
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Tren} from '../src/ejercicio-3/tren';
import {Guagua} from '../src/ejercicio-3/guagua';
import {Bicicleta} from '../src/ejercicio-3/bicicleta';
import {Peaton} from '../src/ejercicio-3/peaton';
import {Street} from '../src/ejercicio-3/street';

describe(`EJ 3 - MEDIO TRANSPORTE`, () => {
  const cocheA = new Coche(43, "3.1x1.2", 121, "5412 ABC");
  const cocheB = new Coche(52, "4.1x2.2", 151, "7932 CFA");
  const cocheC = new Coche(52, "4.1x2.2", 151, "7932 CFA");

  const motoA = new Moto(82, "2.1x1.0", 151, "7932 CFA");
  const motoB = new Moto(72, "2.0x0.7", 102, "4901 HJY");

  const peatonA = new Peaton(3, "0.6x0.5");
  const peatonB = new Peaton(4, "0.4x0.8");
  const peatonC = new Peaton(5, "0.5x0.5");

  const patineteA = new Patinete(20, "0.5x0.2");

  const guaguaA = new Guagua(60, "6.1x3.2", 189, "5731 CBG");

  const bicicletaA = new Bicicleta(40, "2.0x0.4");
  const bicicletaB = new Bicicleta(35, "4.1x0.4");

  const trenA = new Tren(74, "15.3x4.2", 151);
  const trenB = new Tren(80, "26.1x5.2", 191);

  const calle = new Street("Plaza España", "Santa Cruz de Tenerife", ["Coche", "Moto", "Bicicleta", "Peaton", "Guagua", "Patinete"], []);

  calle.añadirVehiculo(cocheA);
  calle.añadirVehiculo(cocheB);
  calle.añadirVehiculo(cocheC);
  calle.añadirVehiculo(motoA);
  calle.añadirVehiculo(motoB);
  calle.añadirVehiculo(peatonA);
  calle.añadirVehiculo(peatonB);
  calle.añadirVehiculo(peatonC);
  calle.añadirVehiculo(patineteA);
  calle.añadirVehiculo(guaguaA);
  calle.añadirVehiculo(bicicletaA);
  calle.añadirVehiculo(bicicletaB);
  calle.añadirVehiculo(trenA);
  calle.añadirVehiculo(trenB);

  describe(`Probar llamadas de los diferentes vehiculos`, () => {
    it('Se puede instanciar un coche', () => {
      expect(cocheA).not.to.be.equal(null);
    });
    it('Se puede instanciar una moto', () => {
      expect(motoA).not.to.be.equal(null);
    });
    it('Se puede instanciar un peaton', () => {
      expect(peatonA).not.to.be.equal(null);
    });
  });

  describe(`Probar llamadas a las partes de un vehiculo`, () => {
    it('Se puede instanciar un coche', () => {
      expect(cocheA.getEmissions()).to.be.equal(121);
    });
    it('Se puede instanciar una moto', () => {
      expect(motoA.getEnrollment()).to.be.equal("7932 CFA");
    });
  });

  describe('Vehiculos circulando por la calle', () => {
    it('Cantidad de vehiculos de cada tipo: ', () => {
      calle.numeroVehiculos();
    });
  });

  describe('Vehiculos circulando por la calle de mayor a menor velocidad', () => {
    it('Velocidad de los vehiculos que estan circulando: ', () => {
      calle.mostrarVehiculos();
    });
  });
});
```

### _**Test de todos los ejercicios.**_  
  
  ![TEST](images/TESTS.PNG)


### Conclusiones.

  Para concluir, creo que la práctica ha estado divertida, y ha sido productiva, me lo he pasado muy bien sobre todo haciendo el ejercicio de la pokedex, me ha parecido muy entretenido, y a la vez, muy práctico, creo que el uso de las clases a partir de ahora lo vamos a tener más presente y va a ser que nuestros códigos mejoren con el paso del tiempo. 


### _**Bibliografía.**_

Nombre | Enlaces
-------|--------
Introducción a Markdown | https://guides.github.com/features/mastering-markdown/
Información sobre GitHub Pages | https://docs.github.com/en/github/working-with-github-pages
Sitio web de Jekyll | https://jekyllrb.com/
GutHub Learning Lab | https://lab.github.com/
Curso de GitHub Pages | https://lab.github.com/githubtraining/github-pages
Visual Studio Code | https://code.visualstudio.com/
Instalar Visual Studio Code | https://code.visualstudio.com/docs/setup/setup-overview
Tutorial VSCode sobre Additional Components | https://code.visualstudio.com/docs/setup/additional-components
Tutorial VSCode sobre User Interface | https://code.visualstudio.com/docs/getstarted/userinterface
Tutorial VSCode sobre Basic Editing | https://code.visualstudio.com/docs/editor/codebasics
Tutorial VSCode sobre Extension MarketPlace | https://code.visualstudio.com/docs/editor/extension-gallery
Tutorial VSCode sobre IntelliSense | https://code.visualstudio.com/docs/editor/intellisense
Tutorial VSCode sobre Code Navigation | https://code.visualstudio.com/docs/editor/editingevolved
Tutorial VSCode sobre Debugging | https://code.visualstudio.com/docs/editor/debugging
Tutorial VSCode sobre Version Control | https://code.visualstudio.com/docs/editor/versioncontrol
Tutorial VSCode sobre Working with GitHub | https://code.visualstudio.com/docs/editor/github
Tutorial VSCode sobre Integrated Terminal | https://code.visualstudio.com/docs/editor/integrated-terminal
Tutorial VSCode sobre Tasks | https://code.visualstudio.com/docs/editor/tasks
Tutorial VSCode sobre Snippets | https://code.visualstudio.com/docs/editor/userdefinedsnippets
Tutorial VSCode sobre Emmet | https://code.visualstudio.com/docs/editor/emmet
Tutorial VSCode sobre Command Line | https://code.visualstudio.com/docs/editor/command-line
Tutorial VSCode sobre  Multiroot Workspaces | https://code.visualstudio.com/docs/editor/multi-root-workspaces
Tutorial VSCode sobre  Accessibility | https://code.visualstudio.com/docs/editor/accessibility
Conectarnos desde VSCode a una máquina remota por SSH | https://code.visualstudio.com/docs/remote/ssh-tutorial
Informe de la práctica 1 de DSI | https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct01-iaas-alu0101206479/
Live Share Extension Pack | https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack
Documentación de Visual Studio Live Share | https://docs.microsoft.com/en-us/visualstudio/liveshare/
Libro Essential TypeScript: From Beginner to Pro | https://learning.oreilly.com/library/view/essential-typescript-from/9781484249796/html/Part_1.xhtml
