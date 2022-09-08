//Labank


// let dependente = Number(prompt("Quantos anos tem o dependente?"))


// console.log(dependente)


//Aninhamento


// if(dependente>=13){
//     console.log("Seu dependente é maior que 13")

//     if(dependente<=17){
//          console.log("E menor que 17\n\"Seu dependente já pode ter um cartão de crédito vinculado ao seu\"")

//     }else{
//          console.log("Mas também é maior que 17. \n\"Consulte outras possibilidades na Labank\"")    
//     }    

// }else{
//     console.log("Seu dependente é menor que 13. \n\"Consulte outras possibilidades na Labank\"")

// }


//Operador lógico


// if(dependente>=13 && dependente<=17){
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")

// }else{
//     console.log("Consulte outras possibilidades do Labank")

// }


//If ternário(o certo, segundo a aula é se fazer sem if usando console.log na operação)



// if(dependente ? (dependente===13) : (dependente!==13)){

//         console.log("A idade do dependente é 13 e já pode ter um cartão")
       
//     }else{
//         console.log("Verifique as opções possíveis")
   
// }



//Escolha de Cartão por telefone
//Switch Case


// let cartao

// const numero = Number(prompt("Escolha um cartão digitando numero:\n1 para Cartão Fácil\n2 para Cartão Black\n3 para Cartão Platinum\n4 para Cartão Master Gold"))

// switch(numero){
//     case 1:
//         cartao = "Cartão Fácil"
//         console.log (cartao)
//         break
//     case 2:
//         cartao = "Cartão Black"
//         console.log (cartao)
//         break
//     case 3:
//         cartao = "Cartão Platinum"
//         console.log (cartao)
//         break
//     case 4:
//         cartao = "Cartão Master Gold"
//         console.log (cartao)
//         break
//     default:
//         console.log("Escolha uma das quatro opções disponíveis");
// }


//Pra guardar na cabeça


let numbDiv = Number(prompt("Digite um número"))

console.log(numbDiv)
//Aninhamento


if(numbDiv %2 === 0){

    if(numbDiv %3 === 0){
    console.log ("É divisivel por 2 e 3")
    
    }else{
        console.log ("Não é divisivel por 2 e 3")

    }
    
}else{
    console.log ("Não é divisivel por 2 e 3")

}


//Operador lógico


if(numbDiv %2 === 0 && numbDiv %3 === 0){


    console.log ("É divisivel por 2 e 3")


}else{
    console.log ("Não é divisivel por 2 e 3")

}



//If ternario surpresa



if(numbDiv %2 === 0 && numbDiv %3 === 0){

    if(numbDiv ? (numbDiv === 30) : (numbDiv !==30)){
        console.log ("UFA ACERTEI!")

    }else{
        console.log ("não foi dessa vez")
    }
    
    console.log ("É divisivel por 2 e 3")
    
}else{

    console.log ("não foi dessa vez")
    console.log ("Não é divisivel por 2 e 3")
    
}



// Switch case


let especial

switch(numbDiv){
    case (6):
        especial = "Criança"
        console.log (especial)
        break
    case 12:
        especial = "Adolecente"
        console.log (especial)
        break
    case 18:
        especial = "Jovem"
        console.log (especial)
        break
    case 24:
        especial = "Adulto"
        console.log (especial) 
        break
    case 30:
        especial = "Tá na roça"
        console.log (especial)
        break
        default:
        console.log ("O numero é maior que 30 ou menor que 6")    

}