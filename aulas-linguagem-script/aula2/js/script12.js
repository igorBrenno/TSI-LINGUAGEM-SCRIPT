var LAnterior, LAtual, imposto, adicVermelha, juros, multa, contrib, consumoKWh, consumo;
LAnterior = 1944462;
LAtual = 1944825;
imposto = 0.809980;
adicVermelha = 21.52
juros = 0.65;
multa = 6.52;
contrab = 15.78;
consumoKWh = LAtual - LAnterior
consumo = consumoKWh * imposto
consumo = consumo + adicVermelha + juros + multa + contrab

console.log("Leitura Anterior: " + LAnterior)
console.log("Leitura Atual: " + LAtual)
console.log("Consumo em kWh: " + consumoKWh)
console.log("Adic. B. Vermelha: " + adicVermelha)
console.log("Contrab serv.ilum.publica: " + contrab)
console.log("Juros de mora 08/2019: " + juros)
console.log("Multa 08/2019: " + multa)
console.log("Total a pagar: " + consumo.toFixed(2))