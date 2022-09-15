const objA = {
    chaveA: "A"
};

const objB = {
    chaveB: "B"
};

const objC = {
    chaveC: "C"
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);

console.log(`=========`);

console.log(objB.chaveA);
console.log(objB.chaveB);
console.log(objB.chaveC);

console.log(`=========`);

console.log(objA.chaveA);
console.log(objA.chaveB);
console.log(objA.chaveC);

