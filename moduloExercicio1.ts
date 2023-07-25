
import promptSync from "prompt-sync"

let prompt = promptSync()

export function exercicio1() {
   
    for (let contador: number = 1; contador <= 10; contador++) {
        console.log(contador)

    }
}

export function exercicio2() {
    //2. Imprimir números pares de 1 a 10.
    for (let contador: number = 2; contador <= 10; contador += 2) {
        console.log(contador)
    }

}
export function exercicio3() {
    3. //Faça um programa que imprima os números ímpares de 0 a 50;
    for (let contador: number = 1; contador <= 100; contador += 2) {
        console.log(contador)
    }
}
export function exercicio4() {

    //4. Faça um programa que imprima na tela a tabuada de um número ate o 10

 

    let i: number = parseInt(prompt("Digite um numero: "))
    for (let n = 0; n <= 10; n += 1) {

        console.log(`${n} x ${i} = ${n * i}`)
    }
}

export function exercicio5() {

    //5. Imprimir os primeiros 10 números da sequência de Fibonacci.
    let numeroAnterior: number = 0
    let numeroAtual: number = 1
    console.log(numeroAnterior)
    console.log(numeroAtual)

    for (let contador: number = 3; contador <= 10; contador++) {


        let proximoNumero: number = numeroAnterior + numeroAtual
        console.log(proximoNumero)
        numeroAnterior = numeroAtual
        numeroAtual = proximoNumero
    }
}
export function exercicio6() {

    //6. Imprimir números pares de 0 a 20 utilizando o loop while
    let contador:number = 0;
    while (contador <= 20) {
        console.log(contador)
        contador += 2
    }
}
