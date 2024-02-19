import { productDescription } from "../../lab03/functions";

describe('product description function', () => {
    test('when the code is 1 the return should be Alimento não perecível   ', () => {

        //arrange

        const code: number = 1;

        const expectedResult: string = "Alimento não perecível";

        //act

        let result = productDescription(code);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})

describe('product description function', () => {
    test('when the code is 2,3 or 4 the return should be Alimento perecível ', () => {

        //arrange

        const code: number = 4;
        const code2: number = 2;
        const code3: number = 3;

        const expectedResult: string = "Alimento perecível";

        //act

        let result = productDescription(code);
        let result2 = productDescription(code2);
        let result3 = productDescription(code3);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult);
        expect(result3).toBe(expectedResult);
    }
    )
})
describe('product description function', () => {
    test('when the code is 5, 5.5 or 6 the return should be Alimento perecível ', () => {

        //arrange

        const code: number = 5;
        const code2: number = 5.5;
        const code3: number = 6;

        const expectedResult: string = "Vestuário";

        //act

        let result = productDescription(code);
        let result2 = productDescription(code2);
        let result3 = productDescription(code3);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult);
        expect(result3).toBe(expectedResult);
    }
    )
})
describe('product description function', () => {
    test('when the code is 5, 5.5 or 6 the return should be Alimento perecível ', () => {

        //arrange

        const code: number = 5;
        const code2: number = 5.5;
        const code3: number = 6;

        const expectedResult: string = "Vestuário";

        //act

        let result = productDescription(code);
        let result2 = productDescription(code2);
        let result3 = productDescription(code3);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult);
        expect(result3).toBe(expectedResult);
    }
    )
})

describe('product description function', () => {
    test('when the code is 7 the return should be Higiene Pessoal, if its 8,10 or 15 the return should be Limpeza e utensílios domésticos, any other code should result in message error ', () => {

        //arrange

        const code: number = 7;
        const code2: number = 8;
        const code3: number = 10;
        const code4: number = 15;
        const code5: number = 5555;

        const expectedResult: string = "Higiene Pessoal";
        const expectedResult2: string = "Limpeza e utensilios domésticos";
        const expectedResult3: string = "Código Inválido"

        //act

        let result = productDescription(code);
        let result2 = productDescription(code2);
        let result3 = productDescription(code3);
        let result4 = productDescription(code4);
        let result5 = productDescription(code5);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult2);
        expect(result3).toBe(expectedResult2);
        expect(result4).toBe(expectedResult2);
        expect(result5).toBe(expectedResult3);
    }
    )
})