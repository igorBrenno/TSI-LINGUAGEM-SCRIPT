/*
Atividade 1
var b, h, a;
b = 4;
h = 4;
a = b * h;
console.log(a)
*/

/*
Atividade 2
var x, p;
x = 4;
p = x * 4;
console.log(p)

*/

/*
Atividade 3
var b, h, a;
b = 10;
h = 4;
a = b + h;

console.log(a * 2);
*/

/*
Atividae 4
var b, h, a;
b = 10;
h = 4;
a = b * h;

console.log(a);
*/

/*
Atividade 5
var g, n;
g = 5;
n = g * 8;
console.log(n);
*/

/*
Atividade 6
var v, n;
v = 5;
n = v * 20;
console.log(n);
*/

/*
var x, y;
x = 5;
y = 7;

x = x + y
y = x - y
x = x - y

console.log(x);
console.log(y);
*/

/*
Atividade 8
var quantL, quantG;
quantL = 1 * 20;
quantG = quantL / 2
console.log(quantG)
*/

/*
Atividade 9
var quantGL, valorL
quantGL = 4;
valorL = quantGL * 3;
*/

/*
Atividade 11
var p, a, imc;
p = 80
a = 1.80;
imc = p / (a * a);
console.log(imc.toFixed(2).replace(".", ","));
*/

var LAnterior, LAtual, imposto, juros, multa, consumo;
LAnterior = 1944462;
LAtual = 1944825;
imposto = 0.809980;
juros = 0.65;
multa = 6.52;
consumo = LAtual - LAnterior
consumo = (consumo * imposto).toFixed(2)
consumo = consumo + juros + multa

console.log(consumo)


