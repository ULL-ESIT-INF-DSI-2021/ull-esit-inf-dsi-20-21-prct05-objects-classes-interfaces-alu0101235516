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
