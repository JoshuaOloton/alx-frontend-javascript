import Car from "./10-car";

/* eslint no-underscore-dangle: 0 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car();
  }
}