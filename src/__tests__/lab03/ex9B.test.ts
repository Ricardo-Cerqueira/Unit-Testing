import { checkNumAmstrong } from "../../lab03/functions";

describe('check num armstrong', () => {
    test('if the number is 153 must return true', () => {

        //arrange

        const num: number = 153;

        const expectedResult= true;

        //act

        let result = checkNumAmstrong(num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)

describe('check num armstrong', () => {
    test('if the number is 157 must return false', () => {

        //arrange

        const num: number = 157;

        const expectedResult= false;

        //act

        let result = checkNumAmstrong(num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)