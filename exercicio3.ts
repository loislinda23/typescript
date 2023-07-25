// fazer um menu de exercicios utilizando exemplos dados em aula
//(6 exercicios dentro de funcoes, e incluir nome ou algo de sua preferncia )
import promptSync from "prompt-sync"

let prompt = promptSync() 

import { exercicio1,exercicio2,exercicio3,exercicio4,exercicio5,exercicio6 } from "./moduloExercicio1"

let resposta: string

do {

console.log("bem vindo ao menu de execicios!")

resposta = prompt("digite um numero de 1 a 6, e para escolher ")

  switch (resposta){
  //chamar exercicio 1 
case '1':
  console.log("voce escolheu o exercicio 1 - contagem de 1-10 ")  

  exercicio1()
  break;
  case '2':
  console.log("voce escolheu o exercicio 2  numeros pares de 1-10")  

  exercicio2()
  break;
  case '3':
  console.log("voce escolheu o exercicio 3 numeros impares de 0-50")  

  exercicio3()
  break;
  case '4':
  console.log("voce escolheu o exercicio 4 - tabuada  ")  

  exercicio4()
  break;
  case '5':
  console.log("voce escolheu o exercicio 5 fibonacci ")  

  exercicio5()
  break;
  case '6':
  console.log("voce escolheu o exercicio 6 0-20 loop while ")  

  exercicio6()
  break;
  default:
    console.log("valor digitado nao corresonde ") 
    break 
    }

} while (resposta != "sair");