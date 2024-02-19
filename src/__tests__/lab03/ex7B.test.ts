import { quantityEven } from "../../lab03/functions";

describe('counts even', () => {
    test('when the number starts in 1 and ends in 9 the result should be 4', () => {

        //arrange

        const num1: number = 1;
        const num2:number =9;

        const expectedResult: number = 4;

        //act

        let result = quantityEven(num1,num2);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})