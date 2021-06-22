// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, 
// que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

//(1)
var numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
var numeros = [...numerosPrimos, 108, 216, 432, 864]
console.log(numeros)
