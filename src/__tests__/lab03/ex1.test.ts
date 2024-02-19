import { calculateFactorial } from "../../lab03/functions";

describe('qual Algoritmo', () => {
    test('quando o numero introduzido for 12, 1 e 0 o resultado deve ser 479001600, 1 e 1  ', () => {

        //arrange

        const num: number = 12;
        const num2: number = 1;
        const num3: number = 0;
        const expectedResult: number = 479001600;
        const expectedResult2: number = 1;
        const expectedResult3: number = 1;
        //act

        let result = calculateFactorial(num)
        let result2 = calculateFactorial(num2)
        let result3 = calculateFactorial(num3)

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult2);
        expect(result3).toBe(expectedResult3);
    }
    )
})