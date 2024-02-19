import { monthlyPayment } from "../../lab03/functions";

describe('monthly payment', () => {
    test('if the extra hour is 5 and the salary 500 the result should be', () => {

        //arrange

        const extraH: number = 5;
        const salary:number=500;
        const expectedResult:number = 550;

        //act

        let result = monthlyPayment(extraH,salary);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)