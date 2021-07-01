alimento = "brigadeiro"
tempo = 5

        /* Pipoca */
if(alimento == 'pipoca'){
    if(tempo >= 2*10 && tempo < 3*10){
        console.log('Comida Queimou')
    }
    else if(tempo >= 3* 10){
        console.log('Kaboom')
    }
    else if(tempo < 10){
        console.log('Tempo Insuficiente')
    }
    else if(tempo == 10){
        console.log('Pronto, Boa Apetite')
    }
}
        /* Macarrao */
else if(alimento == 'macarrao'){
    if(tempo >= 2*8 && tempo < 3*8){
        console.log('Comida Queimou')
    }
    else if(tempo >= 3* 8){
        console.log('Kaboom')
    }
    else if(tempo < 8){
        console.log('Tempo Insuficiente')
    }
    else if(tempo == 8){
        console.log('Pronto, Boa Apetite')
    }
}
        /* Carne */
else if(alimento == 'carne'){
    if(tempo >= 2*15 && tempo < 3*15){
        console.log('Comida Queimou')
    }
    else if(tempo >= 3* 15){
        console.log('Kaboom')
    }
    else if(tempo < 15){
        console.log('Tempo Insuficiente')
    }
    else if(tempo == 15){
        console.log('Pronto, Boa Apetite')
    }
}
        /* Feijao */
else if(alimento == 'feijao'){
    if(tempo >= 2*12 && tempo < 3*12){
        console.log('Comida Queimou')
    }
    else if(tempo >= 3* 12){
        console.log('Kaboom')
    }
    else if(tempo < 12){
        console.log('Tempo Insuficiente')
    }
    else if(tempo == 12){
        console.log('Pronto, Boa Apetite')
    }
}
        /* Brigadeiro */ 

else if(alimento == 'brigadeiro'){
    if(tempo >= 2*8 && tempo < 3*8){
        console.log('Comida Queimou')
    }
    else if(tempo >= 3*8){
        console.log('Kaboom')
    }
    else if(tempo < 8){
        console.log('Tempo Insuficiente')
    }
    else if(tempo == 8){
        console.log('Pronto, Boa Apetite')
    }
}
else{
    console.log('Inexistente')
}