import { checkCapicua } from "../lab03/functions";

//ex01
export function countDigit(num: number): number{
    let digits: string = num.toString();
    let result = digits.length;

    return result;
}

//ex02
export function numberToArray(num: number): number []{
  
    const arrayConversion = num.toString().split('').map(num => parseInt(num)); // converter para string | divide a string em caracteres individuais | map percorre cada caractere do array e converte em um numero inteiro usando o parseint
    return arrayConversion;
}

//ex03
export function sumArray(num: number[]):number{
    let sumArray: number = 0;
    for (let i = 0; i < num.length; i++){
        sumArray += num[i];
    } return sumArray;
}

//ex04
export function returnEven(num: number[]): number[]{
    let onlyEven: number[] = [];
    for (let i = 0; i <= num.length; i++){
        if(num[i] % 2 === 0){
            onlyEven.push(num[i]);
            
        }
    } return onlyEven;   
}

//ex 5

export function returnOddArrayElements(num: number[]): number[] {

    let evenArray: number[] = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            evenArray.push(num[i]);
        }
    }
    return evenArray;
}

//ex 6 

export function sumDigitPair(num: number): number {

    let sum: number = 0;
    let digitConversion = num.toString().split('');

    for (let i = 0; i < digitConversion.length; i++) {
        if (parseInt(digitConversion[i]) % 2 == 0) {
            sum += parseInt(digitConversion[i]);
        }
    }
    return sum;
}

// ex 7 

export function sumDigitOdd(num: number): number {
    let sum: number = 0;
    let digitConversion = num.toString().split('');

    for (let i = 0; i < digitConversion.length; i++) {
        if (parseInt(digitConversion[i]) % 2 != 0) {
            sum += parseInt(digitConversion[i]);
        }
    }
    return sum;
}

// ex8 

export function firstNumElementsArray(array: number[], num: number): number[] {

    return array.slice(0, num);  // indice inicial | indice final

}

//ex 9 

export function multiplesThreeInInterval(begin: number, end: number): number[] {

    const multiple: number = 3;
    let multipleArray: number[] = [];

    for (let i = begin; i < end; i++) {
        if (i % multiple == 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}

// ex10 

export function multiplesInInterval(begin: number, end: number, multiple: number): number[] {
    let multipleArray: number[] = [];

    for (let i = begin; i < end; i++) {
        if (i % multiple == 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}

// ex11 

export function multiplesInCommon(start: number, end: number, numbers: number[]): number[] {

    const commonMultiples: number[] = [];
    for (let i = start; i <= end; i++) {
        let isCommonMultiple = true;
        for (let j = 0; j < numbers.length; j++) {
            if (i % numbers[j] !== 0) {
                isCommonMultiple = false;
                break;
            }
        }
        if (isCommonMultiple) {
            commonMultiples.push(i);
        }
    }
    return commonMultiples;
}

//ex 12 

export function checkPaliondrome(num: number): boolean {
    let check = checkCapicua(num);
    return check;
}

//ex 13 a
export function lowNumber(num: number[]): number{
   let lowestValue = num[0];
   for (let i = 1; i < num.length; i++) {
    if (num[i] < lowestValue) {
      lowestValue = num[i];
    }
  }return lowestValue;
}

//ex 13 b

export function highNumber(num: number[]): number{
    let highestValue = num[0];
    for (let i = 1; i < num.length; i++) {
     if (num[i] > highestValue) {
        highestValue = num[i];
     }
   }return highestValue;
 }

  //13c
export function averageArray(num: number[]): number{
    let average: number;
    let count: number = 0;
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum += num[i];
        count++;
    } return average = Math.trunc(sum/count);
}

//13 d
// Construa uma solução que para um array de números inteiros retorne:
//d) o produto dos seus elementos;

export function productArray(num: number[]){
    let multiplie: number = 1;
    for(let i = 0; i < num.length; i++){
        multiplie *= num[i];
    } return multiplie;
}

//13 e
//e) o conjunto de elementos não repetidos; (**)
export function noRepeat(num: number[]){
    
}


 // Exercício 14: Número de Colunas em Matriz (**)

 export function numberOfColunsMatrix(matrix: number[][]): number {

    const numColuns = matrix[0].length;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].length !== numColuns) {
            return -1
        }
    }
    return numColuns;
}