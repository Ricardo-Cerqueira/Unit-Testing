import { multipleAverage } from "../../lab03/functions";

describe('average multiples in range', () => {
    test('when the number starts in 1 and ends in 11 and the multiple is 5 the result should be 7', () => {

        //arrange

        const num1: number = 1;
        const num2:number =11;
        const multiple:number= 5;

        const expectedResult: number = 7;

        //act

        let result = multipleAverage(num1,num2, multiple);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})