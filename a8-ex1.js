// Crie uma função construtora chamada Restaurante, 
// que receba como parâmetros o nome do restaurante 
// e o cardápio (que será um array de strings).

// Após isso chame a função entrada() dentro do objeto, 
// que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.
function restaurante (name, menu) {
    this.name = name;
    this.menu = menu;
} 
res1 = new restaurante ("Govinda's", ["Rasagula", "Gulabjamun", "Ladhu", "Burfi", "Rasamalai"])
function entrada () {
    console.log("Bem Vindo,",res1)
}
entrada()