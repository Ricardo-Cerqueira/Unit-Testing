import { sumOdd } from "../../lab03/functions";

describe('sum odd', () => {
    test('when the number starts in 1 and ends in 9 the result should be 25', () => {

        //arrange

        const num1: number = 1;
        const num2:number =9;

        const expectedResult: number = 25;

        //act

        let result = sumOdd(num1,num2);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})