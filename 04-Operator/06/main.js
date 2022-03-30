let a = 1;
console.log(`a = ${a}`);
let b = 2;
console.log(`a = ${a} b = ${b}`);
let c = a++; // c = 1
console.log(`a = ${a} b = ${b} c = ${c}`);
let d = ++c; // c = 2
console.log(`a = ${a} b = ${b} c = ${c} d = ${d}`);
let e = ++d + d++ + d; // 3 + 3 + 4 = 10
console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}`);
