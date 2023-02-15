import Enigma from "./Enigma.js";
import { rocket as R } from "./historic.js";

const enigma = new Enigma([R.I, R.II, R.III], R.UKW);

const plainText = "Fortune Favors the Bold!";

// enigma.setState(1, 12, 3);
const cipherText = enigma.encrypt(plainText, [1, 12, 3]);
console.log(cipherText);

// enigma.setState(1, 12, 3);
const decipherText = enigma.encrypt(cipherText, [1, 12, 3]);
console.log(decipherText);
