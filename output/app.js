"use strict";
// let message: string = "Hello Typescript";
// console.log(message);
class Operation {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value) {
        this.valorA = value;
    }
    set ValorB(value) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operation {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operation {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let operationS = new Suma();
operationS.ValorA = 45;
operationS.ValorB = 10;
operationS.Sumar();
console.log("El resultado de la suma es " + operationS.Resultado);
// let operationR = new Resta();
// operationR.ValorA = 45;
// operationR.ValorB = 10;
// operationR.Restar();
// console.log("El resultado de la resta es " + operationR.Resultado);
const addText = document.getElementById("suma");
addText.textContent = "El resultado de la suma es " + operationS.Resultado;
