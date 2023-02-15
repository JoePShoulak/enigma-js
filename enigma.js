import { stringMap, plainAlpha, isLetter } from "./helper.js";

export class Wheel {
  constructor(key, turnover) {
    this.key = key;
    this.turnover = turnover ?? key.length - 1;

    this.home = 0;
    this.position = 0;
  }

  advance() {
    this.position++;
    this.position %= this.key.length;
    return this.position === this.turnover;
  }

  cipher(char, reverse = false) {
    const plain = reverse ? this.key : plainAlpha;
    const key = reverse ? plainAlpha : this.key;
    const mult = reverse ? -1 : 1;

    let index = (plain.indexOf(char) + this.position * mult) % this.key.length;
    if (index < 0) index += this.key.length;
    const cipher = key[index];

    return cipher;
  }
}

export class Reflector {
  constructor(key) {
    this.key = key;
  }

  reflect(char) {
    const index = plainAlpha.indexOf(char);
    const cipher = this.key[index];

    return cipher;
  }
}

export class Enigma {
  constructor(wheels, reflector) {
    this.wheels = wheels;
    this.reflector = reflector;
  }

  encrypt(phrase, state) {
    phrase = phrase.toUpperCase(); // TODO: Support lowercase letters

    if (state) this.setState(state);
    const cipherText = stringMap(phrase, char => this.cipher(char));
    this.reset();

    return cipherText;
  }

  wheelAction(char, reverse = false) {
    const wheels = reverse ? [...this.wheels].reverse() : this.wheels;

    wheels.forEach(wheel => (char = wheel.cipher(char, reverse)));

    return char;
  }

  cipher(char) {
    if (!isLetter(char)) return char;

    char = this.wheelAction(char);
    char = this.reflector.reflect(char);
    char = this.wheelAction(char, true);

    this.advance();

    return char;
  }

  setState(state) {
    this.wheels.forEach((wheel, index) => (wheel.position = state[index]));
  }

  advance() {
    for (let i = 0; i < this.wheels.length; i++) {
      const wheel = this.wheels[i];
      const cont = wheel.advance();
      if (!cont) break;
    }
  }

  reset() {
    this.wheels.forEach(w => (w.position = 0));
  }
}

export default Enigma;
