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
