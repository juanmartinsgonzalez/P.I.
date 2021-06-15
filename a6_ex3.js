// 'n1' é Numero Fixo (Dono da Tabuada), 'n2' é o Numero Variavel dentro da tabuada
var operador = '+'
console.log('Tabuada: ')
//   valor incial condição de enquanto for menor que dez faca ele somar mais um ao total, o total passa a ser o novo fator inicial e assim gera um novo lopp
for (n1 = 1; n1 <= 10; n1=n1+1)
for (n2 = 0; n2 <= 10; n2=n2+1) {
    if (operador == '+'){
         console.log(n1,'+', n2, '=', n1+n2)
    } else if(operador == '-'){ 
         console.log(n2, '-', n1, '=', n2-n1)
    } else if  (operador == '*') {
        console.log(n1,'X',n2, '=', n1*n2)
    } else if(operador== '/'){
        console.log(n1, '/', n2, '=', n1/n2)}
    }