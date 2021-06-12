//Exercicio de Arrays: Busquei cria-lo da forma o mais eficiente o possivel e tambem englobando o maximo de elementos estudados o Possivel.

//Digite Aqui, na Variavel Tipo, o Metodo que deseja ver a explicação e execução, Exemplo: 'pop', 'join', 'shift' e 'unshift'
var tipo = 'join'
var retorno = ' '
var compras = ['Chocolate','Banana','Manga','Farinha de Trigo.']
function tipos(){
    if (tipo == 'join'){
        console.log('"Join" une os Elementos em uma Unica String, Exemplo:',compras.join())
    } else if (tipo == 'pop'){
        compras.pop()
        console.log('"Pop" remove o ultimo item do Array, Exemplo: ',compras)
    } else if (tipo == 'shift'){
        retorno = compras.shift()
        console.log('"Shift" Remove o primeiro Elemento do Array e pode devolver o valor removido, Por exemplo, o Array ficara: ', compras)
        console.log('E o retorno do valor removido sera: ',retorno)
    } else if (tipo == 'unshift'){
        retorno = compras.unshift('Maizena')
        console.log('"Unshift" Adiciona um Elemento no Inicio do Array e retorna o "Lenght", Por exemplo, o Array ficara: : ', compras)
        console.log('E o "Lenght" será: ', retorno)
    } else{
        console.log('Metodo digitado Invalido, Por-favor tente novamente.')
    }
}
tipos()

