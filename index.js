import { Enigma } from "./enigma.js";
import { rotorI, rotorII, rotorIII, reflectorUKW } from "./historic.js";

const enigma = new Enigma([rotorI, rotorII, rotorIII], reflectorUKW);

const plainText = "FORTUNEFAVORSTHEBOLD";

// enigma.setState(1, 12, 3);
const cipherText = enigma.encrypt(plainText, [1, 12, 3]);
console.log(cipherText);

// enigma.setState(1, 12, 3);
const decipherText = enigma.encrypt(cipherText, [1, 12, 3]);
console.log(decipherText);