/* eslint no-underscore-dangle: 0 */

export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = sqft;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  // Setters
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = sqft;
  }
}
