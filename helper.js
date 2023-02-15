export const plainAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const stringMap = (string, cb) => string.split("").map(cb).join("");

export const isLetter = char => plainAlpha.includes(char.toUpperCase());

export const isUpper = char => char === char.toUpperCase();
