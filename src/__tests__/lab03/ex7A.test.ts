import { sumEven } from "../../lab03/functions";

describe('sum even', () => {
    test('when the number starts in 1 and endes in 9 the result should be 12', () => {

        //arrange

        const num1: number = 1;
        const num2:number =9;

        const expectedResult: number = 20;

        //act

        let result = sumEven(num1,num2);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})