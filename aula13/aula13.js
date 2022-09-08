let umaString = 'um texto'

console.log(umaString.length)
console.log(umaString.concat(' bem  divertido  né?!'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/[x]/))

umaString = 'o rato roueu a roupa do rei de roma';

console.log(umaString.charAt(1));
console.log(umaString.replace(/r/, 'R'));
console.log(umaString.replace(/r/g, 'R'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5));
console.log(umaString.split(' '));
console.log(umaString.split('R'));
console.log(umaString.split('r'));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
