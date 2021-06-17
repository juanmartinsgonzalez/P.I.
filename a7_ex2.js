// Calbacks Andar e Parar. (Silvia ou Cris, tem algum problema eu criar os Callbacks antes da Funç~ao que vai recebe-los?)
andar = () => console.log("O Carro esta andando")
parar = () => console.log("O Carro parou")
// Arrow-Function que recebe o CallBack
acaoCarro = (algumafuncao) => algumafuncao()
//Invocada
acaoCarro(andar)
acaoCarro(parar)