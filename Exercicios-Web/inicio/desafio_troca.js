let a = 7;
let b = 94;

// depois da troca ... a = 94  e b= 7

console.log(a);
console.log(b);

let temp = a;
a = b;
b = temp;

[a, b] = [b, a];
//  inverter o valor da variavel

console.log(a);
console.log(b);
