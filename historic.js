// https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

import { Reflector, Wheel } from "./Enigma.js";

export const rocket = {
  I: new Wheel("JGDQOXUSCAMIFRVTPNEWKBLZYH"),
  II: new Wheel("NTZPSFBOKMWRCJDIVLAEYUXHGQ"),
  III: new Wheel("JVIUBHTCDYAKEQZPOSGXNRMWFL"),
  UKW: new Reflector("QYHOGNECVPUZTFDJAXWMKISRBL"),
  // ETW: new Wheel("QWERTZUIOASDFGHJKPYXCVBNML"),
};

export const swissK = {
  I: new Wheel("PEZUOHXSCVFMTBGLRINQJWAYDK"),
  II: new Wheel("ZOUESYDKFWPCIQXHMVBLGNJRAT"),
  III: new Wheel("EHRVXGAOBQUSIMZFLYNWKTPDJC"),
  UKW: new Reflector("IMETCGFRAYSQBZXWLHKDVUPOJN"),
  // ETW: new Wheel("QWERTZUIOASDFGHJKPYXCVBNML"),
};
