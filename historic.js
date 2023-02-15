// https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

/**
 * Rotor #	ABCDEFGHIJKLMNOPQRSTUVWXYZ	Date              Introduced	Model Name & Number
 * I	      JGDQOXUSCAMIFRVTPNEWKBLZYH	7 February 1941	  German Railway (Rocket)
 * II	      NTZPSFBOKMWRCJDIVLAEYUXHGQ	7 February 1941	  German Railway (Rocket)
 * III	    JVIUBHTCDYAKEQZPOSGXNRMWFL	7 February 1941	  German Railway (Rocket)
 * UKW	    QYHOGNECVPUZTFDJAXWMKISRBL	7 February 1941	  German Railway (Rocket)
 * ETW	    QWERTZUIOASDFGHJKPYXCVBNML	7 February 1941	  German Railway (Rocket)
 */

import { Reflector, Wheel } from "./enigma.js";

export const rotorI = new Wheel("JGDQOXUSCAMIFRVTPNEWKBLZYH");
export const rotorII = new Wheel("NTZPSFBOKMWRCJDIVLAEYUXHGQ");
export const rotorIII = new Wheel("JVIUBHTCDYAKEQZPOSGXNRMWFL");
export const reflectorUKW = new Reflector("QYHOGNECVPUZTFDJAXWMKISRBL");
// export const rotorETW = new Wheel("QWERTZUIOASDFGHJKPYXCVBNML");
