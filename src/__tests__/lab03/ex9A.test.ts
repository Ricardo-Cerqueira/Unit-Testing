import { checkCapicua } from "../../lab03/functions";


describe('check capicua', () => {
    test('if the number is 343 must return true', () => {

        //arrange

        const num: number = 343;

        const expectedResult= true;

        //act

        let result = checkCapicua(num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)

describe('check capicua', () => {
    test('if the number is 356 must return false', () => {

        //arrange

        const num: number = 356;

        const expectedResult= false;

        //act

        let result = checkCapicua(num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)