import { quantityOdd } from "../../lab03/functions";

describe('quantity odd', () => {
    test('when the number starts in 1 and ends in 9 the result should be 5', () => {

        //arrange

        const num1: number = 1;
        const num2:number =9;

        const expectedResult: number = 5;

        //act

        let result = quantityOdd(num1,num2);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})