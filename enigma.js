const plainAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

  cipher(char) {
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
    if (state) this.setState(...state);
    const cipherText = phrase
      .split("")
      .map(char => this.cipher(char))
      .join("");
    this.reset();

    return cipherText;
  }

  cipher(char) {
    const DEBUG = false;

    if (DEBUG) console.log("Input:", char);

    this.wheels.forEach(wheel => (char = wheel.cipher(char)));

    char = this.reflector.cipher(char);

    [...this.wheels]
      .reverse()
      .forEach(wheel => (char = wheel.cipher(char, true)));

    if (DEBUG) console.log("Output:", char);

    this.advance();

    return char;
  }

  setState(a, b, c) {
    this.wheels[0].position = a;
    this.wheels[1].position = b;
    this.wheels[2].position = c;
  }

  advance() {
    let next = this.wheels[0].advance();
    if (next) next = this.wheels[1].advance();
    if (next) this.wheels[2].advance();
  }

  reset() {
    this.wheels.forEach(w => (w.position = 0));
  }
}
