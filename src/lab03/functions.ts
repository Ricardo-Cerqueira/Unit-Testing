
/**Ex 01 */

export function calculateFactorial(num: number): number {
    let res: number = 1;
    let x: number;

    for (x = num; x >= 1; x--) {
        res = res * x;
    }
    return res;

}

/**Ex 02 */

export function exchange(currency: string, amount: number): number {
    const dolar: number = 1.534;
    const libra: number = 0.774;
    const iene: number = 161.480;
    const coroaSueca: number = 9.593;
    const francoSuico: number = 1.601;
    let euro: number;

    switch (currency) {
        case "D": {
            euro = Math.trunc(amount * dolar);
            break;
        }
        case "L": {
            euro = Math.trunc(amount * libra);
            break;
        }
        case "I": {
            euro = Math.trunc(amount * iene);
            break;
        } case "C": {
            euro = Math.trunc(amount * coroaSueca);
            break;
        } case "F": {
            euro = Math.trunc(amount * francoSuico);
            break;
        } default:
            throw new Error("simbolo de moeda inválido")
    } return euro;


}

/**Ex 03 */
export function productDescription(productCode: number): string {
    if (productCode === 1) {
        return "Alimento não perecível"
    } else if (productCode >= 2 && productCode <= 4) {
        return "Alimento perecível"
    } else if (productCode >= 5 && productCode <= 6) {
        return "Vestuário"
    } else if (productCode === 7) {
        return "Higiene Pessoal"
    } else if (productCode >= 8 && productCode <= 15) {
        return "Limpeza e utensilios domésticos"
    } else {
        return "Código Inválido"
    }
}

/**Ex 04 */

export function studentGrade(grade: number): string {
    if (grade >= 0 && grade <= 4) {
        return "Mau"
    } else if (grade >= 5 && grade <= 9) {
        return "Mediocre"
    } else if (grade >= 10 && grade <= 13) {
        return "Suficiente"
    } else if (grade >= 14 && grade <= 17) {
        return "Bom"
    } else if (grade >= 18 && grade <= 20) {
        return "Muito Bom"
    } else {
        return "Nota inválida"
    }
}

/**Ex 05 */

export function salaryRentention(salary: number): number {
    let salaryaftertaxes: number;
    if (salary < 500) {
        salaryaftertaxes = salary - (salary * 0.10)
    } else if (salary >= 500 && salary <= 1000) {
        salaryaftertaxes = salary - (salary * 0.15)
    } else {
        salaryaftertaxes = salary - (salary * 0.20)
    } return salaryaftertaxes;
}

/**Ex 06 a*/


export function numberX(numArray: number[]): number {
    let count: number = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 3 === 0) {
            count++;
        }
    } return count;
}

/**Ex 06 b*/
export function multipleX(numMultiple: number, numArray: number[]): number {
    let count: number = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % numMultiple === 0) {
            count++;
        }
    } return count;
}

/**Ex 06 c*/
export function multiple3and5(numArray: number[]): number {
    let count: number = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 3 === 0 && numArray[i] % 5 === 0) {
            count++;
        }
    } return count;
}

/**Ex 06 d*/

export function multiple2(numMultiple1: number, numMultiple2: number, numArray: number[]): number {
    let count: number = 0;
    for (let i = 1; i < numArray.length; i += 1) {
        if (numArray[i] % numMultiple1 === 0 && numArray[i] % numMultiple2 === 0) {
            count++;
        }
    } return count;
}




/**Ex 06 e*/

export function sumOfMultiplesInRange(start: number, end: number, numMultiple1: number, numMultiple2: number): number {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % numMultiple1 === 0 && i % numMultiple2 === 0) {
            sum += i;
        }
    }

    return sum;
}


/**Ex 07 a */

export function sumEven(num1: number, num2: number): number {
    let sum: number = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    } return sum;
}

/**Ex 07 b */
export function quantityEven(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            count++;
        }
    } return count;
}

/** Ex 07 c */

export function sumOdd(num1: number, num2: number): number {
    let sum: number = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    } return sum;
}

/**Ex 07 d */

export function quantityOdd(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            count++;
        }
    } return count;
}


/**Ex07 e */

export function sumMultiplesInRange(start: number, end: number, numMultiple: number): number {
    let sum = 0;

    let smallNum: number = Math.min(start, end);
    let bigNum: number = Math.max(start, end)

    for (let i = smallNum; i <= bigNum; i++) {
        if (i % numMultiple === 0) {
            sum += i;
        }
    }

    return sum;
}

/** Ex 07 f */

export function multipleProduct(start: number, end: number, numMultiple: number): number {
    let product = 1;

    for (let i = start; i <= end; i++) {
        if (i % numMultiple === 0) {
            product *= i;
        }
    }

    return product;
}

/**Ex 07 g */

export function multipleAverage(start: number, end: number, multiple: number): number {
    let average: number = 0;
    let sum: number = 0;
    let count: number = 0;

    sum = sumMultiplesInRange(start, end, multiple);
    for (let i = start; i <= end; i++) {
        if (i % multiple === 0) {
            count++;
        }
    }
    average = Math.trunc(sum / count);
    return average;
}

/** Ex 07 h */

export function multipleAvarageXY(start: number, end: number, multipleX: number, multipleY: number): number {
    let average: number = 0;
    let sum: number = 0;
    let count: number = 0;

    for (let i = start; i <= end; i++) {
        if (i % multipleX === 0 || i % multipleY === 0) {
            count++;
            sum += i;
        }
    }
    average = Math.trunc(sum / count);
    return average;

}

/** Ex 08 a */

export function numAlgarith(num: number): number {
    return num.toString().length;
}

/**Ex 08 b */

export function numAlgarithEven(num: number): number {
    let count: number = 0;
    const digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) % 2 == 0) {
            count++
        }
    } return count;
}

/**Ex 08 c */

export function numAlgarithOdd(num: number): number {
    let count: number = 0;
    const digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) % 2 != 0) {
            count++
        }
    } return count;
}


/**Ex 08 d */

export function sumDigts(num: number): number {
    let sum: number = 0;
    const digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i])
    } return sum;
}

/**Ex 08 e */

export function sumDigtsEven(num: number): number {
    let sum: number = 0;
    const digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) % 2 == 0) {
            sum += parseInt(digits[i])
        }
    } return sum;
}

/**Ex 08 f */

export function sumDigtsOdd(num: number): number {
    let sum: number = 0;
    const digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) % 2 != 0) {
            sum += parseInt(digits[i])
        }
    } return sum;
}


/** Ex 08 g */

export function averageDigits(num: number): number {
    let average: number = 0;
    let sum: number = 0;

    const digits = num.toString().split('');
    sum = sumDigts(num);

    average = Math.trunc(sum / digits.length);
    return average;
}

/**Ex 08 h */
export function averageDigitsEven(num: number): number {
    let average: number = 0;
    let sum: number = 0;
    let count: number = 0;

    sum = sumDigtsEven(num);

    count = numAlgarithEven(num)

    average = count > 0 ? sum / count : 0; // condição que valida se for verdadeiro; return que se for falso resultará em 0;
    return average;
}

/**Ex 08 i */

export function averageDigitsOdd(num: number): number {
    let average: number = 0;
    let sum: number = 0;
    let count: number = 0;

    sum = sumDigtsOdd(num);

    count = numAlgarithOdd(num)

    average = count > 0 ? sum / count : 0; // condição que valida se for verdadeiro; return que se for falso resultará em 0;
    return average;
}

/**Ex 08 j */

export function inverseNumber(num: number): number {
    let invertedNumber: number;

    invertedNumber = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    return invertedNumber
}

/**Ex 09 a */
export function checkCapicua(num: number): boolean {
    const invertedNumber = inverseNumber(num);
    return num == invertedNumber;
}

/** Ex 09 b */
export function checkNumAmstrong(num: number): boolean {
    let sum: number = 0;
    let numbers: number = num;

    while (numbers > 0) {
        const digit: number = numbers % 10; // descobrir o ultimo digito da variavel
        sum += digit ** 3; // calculo da soma dos cubos
        numbers = Math.floor(numbers / 10); // remove o ultimo digito da var numbers e prepara o ciclo para a prox interação
    }

    return sum == num;

}



/**
 * 
 * Ex 10
 * SalarioBase, horaExtra, salarioMes: inteiro
 * parametros: horaExtra, salarioBase
 */

export function monthlyPayment(extrahr: number, salaryBase: number): number {
    let hourPrice: number = salaryBase * 0.02;
    let extraHourPay: number = hourPrice * extrahr;
    let amount: number = salaryBase + extraHourPay;
    return amount;
}

//Ex 11
/**lista numeros positivos, retorne a posição o produto acumulado superior a um dado numero */

export function productPosition(list: number[], num: number): number {
    let product: number = 1;
    let position: number = 0;
    let limit: number = num;

    for (let i = 0; i <= list.length; i++) {
        product *= list[i];


        if (product > limit) {
            return position;
        }
        position++;
    } return -1;
}


/**Ex 12 */

export function numberClassification(num: number) {
    let result: number;
    let sum: number = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        result = 0;
    } else if (sum > num) {
        result = 1;
    } else {
        result = -1;
    }
    return result;
}

/**Ex 13 */

export function givenNumber(num: number): number {
    let count: number = 0;
    let start: number = 0;
    let end: number = 10;

    const limit: number = 1;
    const limitEnd: number = 20;

    if (num < limit || num > limitEnd) {
        throw new RangeError('The number must be between 1 and 20')
    }

    for (let i = start; i <= end; i++) {
        for (let x = i; x <= end; x++) {
            if (num === i + x) {
                count++;
            }
        }
    }
    return count;
}

/**Ex 14
 * Pequena até 10kg
 * Média > 10 && <= 25kg
 * Grande > 25kg && <= 45kg
 * Gigante > 45kg
 *
 * Pequena come 100g ração/dia
 * Media come 250g ração/dia
 * Grande 300g
 * Gigante 500g
 *
*/

// 14 a

export function dogWeight(weigth: number, petFood: number) {
    if (weigth <= 10 && petFood == 100 || weigth >= 10 && weigth <= 25 && petFood == 250 || weigth > 25 && weigth <= 45 && petFood == 300 || weigth > 45 && petFood == 500) {
        return 0;
    } else if (weigth <= 10 && petFood > 100 || weigth >= 10 && weigth <= 25 && petFood > 250 || weigth > 25 && weigth <= 45 && petFood > 300 || weigth > 45 && petFood > 500) {
        return 1;
    } else {
        return -1
    }
}

// 14 b


export function dogWeightMultiple(weight: number[], petFood: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < weight.length; i++) {
        const weightDog = weight[i];
        const petFoodDog = petFood[i];
        if (weightDog <= 0) {
            throw new Error("The dog weight cannot be 0 or negative!");
        }
        let correctFood: number;
        if (weightDog <= 10) {
            correctFood = 100;
        } else if (weightDog > 10 && weightDog <= 25) {
            correctFood = 250;
        } else if (weightDog > 25 && weightDog <= 45) {
            correctFood = 300;
        } else {
            correctFood = 500;
        }

        if (petFoodDog === correctFood) {
            result.push(0);
        } else if (petFoodDog > correctFood) {
            result.push(1);
        } else {
            result.push(-1);
        }
    }
    return result;

}

/**
 * let dogRace: string;
    if (weigth < 10){
        dogRace = 'Raça pequena';
        if(petFood == 100){
            return 0;
        } else if( petFood > 100){
            return 1;
        } else {
            return -1;
        }

    } else if (weigth > 10 && weigth <= 25){
        dogRace = 'Raça média';
        if(petFood == 250){
            return 0;
        } else if( petFood > 250){
            return 1;
        } else {
            return -1;
        }
    } else if (weigth > 25 && weigth <= 45){
        dogRace = 'Raça grande';
        if(petFood == 300){
            return 0;
        } else if( petFood > 300){
            return 1;
        } else {
            return -1;
        }
    } else {
        dogRace = 'Raça gigante'
        if(petFood == 500){
            return 0;
        } else if( petFood > 500){
            return 1;
        } else {
            return -1;
        }
    } return dogRace;
}
 */

/**Ex 15 */
export function checkSumNum(num: string): boolean {
    if (num.length > 8) {
        return false;
    }
    const digit = num.split('').map(Number);
    const lastDigit = digit[num.length - 1]; // length é igual a 8, ultimo digito é o 7 pois começa a contar no 0;
    digit.push(lastDigit); // Adiciona o ultimo algaritmo ao numero e passa a ter 9 digitos


    let sum: number = 0;

    for (let i = 0; i < digit.length; i++) {
        sum += digit[i] * (digit.length - i); //primeira interação do loop multiplica o primeiro algaritmo por 9 e assim sucessivamente em ordem decrescente;
    }
    return sum % 11 === 0;
}

/**Ex 16 */

export function splitEvenOdd(sequence: number[]): number[] {
    let evenNumber: number[] = [];
    let oddNumber: number[] = [];

    for (const i of sequence) {
        if (i <= 0 && i > 9 || !Number.isInteger(i)) {
            throw RangeError('Only takes one digit positive input values')
        }
    }

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] % 2 === 0) {
            evenNumber.push(sequence[i]);
        } else {
            oddNumber.push(sequence[i]);
        }
    }

    evenNumber.sort();
    oddNumber.sort();
    return oddNumber.concat(evenNumber);
}






