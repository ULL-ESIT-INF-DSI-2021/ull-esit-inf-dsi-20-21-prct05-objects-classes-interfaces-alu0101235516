class Pokemon {
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

const Victreebel = new Pokemon("Victreebel", 15.5, 1.7, "hierba", [105, 65, 70, 80]);
const Voltorb = new Pokemon("Voltorb", 10.4, 0.5, "electrico", [30, 50, 100, 40]);
const Ninetales = new Pokemon("Ninetales", 19.9, 1.1, "fuego", [76, 75, 100, 73]);
const Poliwhirl = new Pokemon("Poliwhirl", 20, 1, "agua", [65, 65, 90, 65]);

const Pokedex = [Victreebel, Voltorb, Ninetales, Poliwhirl];
// console.log(Pokedex);

class Combat {
  constructor(private Pok1: Pokemon, private Pok2: Pokemon) {}

  public damageGet() {
    let efectPk1: number = 0;
    let efectPk2: number = 0;
    let daño: number = 0;
    let dañoInt: number = 0;
    const PokAttack: number = 0;

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

  public start() {
    let PokAttack: number = 0;

    while ((this.Pok1.getBasicData().HP > 0) || (this.Pok2.getBasicData().HP > 0)) {
      if (PokAttack == 0) {
        this.Pok2.setHP((this.Pok2.getBasicData().HP) - this.damageGet());
        PokAttack++;
        console.log(this.Pok2.getBasicData().HP);
      } else {
        this.Pok1.setHP((this.Pok1.getBasicData().HP) - this.damageGet());
        PokAttack--;
      }
    }
  }
}

const Combat1: Combat = new Combat(Voltorb, Ninetales);
console.log(Combat1.start());
