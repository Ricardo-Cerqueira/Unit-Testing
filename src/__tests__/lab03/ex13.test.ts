import { givenNumber } from "../../lab03/functions";

describe('given number', () => {
    test('inside the interval from 1 to 20 returns the possible ways to obtain a number N from adding numbers from 0 to 10 de obter um numero N somando dois numeros de 0 a 10 the number 3 should return error message', () => {

        //arrange
        const num: number = 5;
        const num2: number = 33;
        const expectedResult: number = 3;


        //act
        let result = givenNumber(num)

        //assert

        expect(result).toBe(expectedResult);
        expect(() => { givenNumber(num2) }).toThrow(new RangeError("The number must be between 1 and 20"))


    })
})

describe('given number', () => {
    test('inside the interval from 1 to 20 returns the possible ways to obtain a number N from adding numbers from 0 to', () => {

        //arrange
        const num: number = 1;
        const num2: number = 20;
        const expectedResult: number = 1;
        const expectedResult2: number = 1;


        //act
        let result = givenNumber(num);
        let result2 = givenNumber(num2);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult2);



    })
})