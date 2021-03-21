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
    if (this.Pok1.getBasicData().HP < 0) {
      console.log(`EL VENCEDOR ES ${this.Pok2.getName()}!!!`);
      return this.Pok2.getName();
    } else {
      console.log(`EL VENCEDOR ES ${this.Pok1.getName()}!!!`);
      return this.Pok1.getName();
    }
  }
}
