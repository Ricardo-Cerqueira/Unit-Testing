import { exchange } from "../../lab03/functions";

describe('exchange function', () => {
    test('when the symbol is D and the amount 45 the result should be 69  ', () => {

        //arrange

        const symbol: string = "D";
        const value:number= 45;

        const expectedResult: number = 69;

        //act

        let result = exchange(symbol,value);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})

describe('exchange function', () => {
    test('when the symbol is L and the amount 55 the result should be 42  ', () => {

        //arrange

        const symbol: string = "L";
        const value:number= 55;

        const expectedResult: number = 42;

        //act

        let result = exchange(symbol,value);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})
describe('exchange function', () => {
    test('when the symbol is I and the amount 33 the result should be 5328 ', () => {

        //arrange

        const symbol: string = "L";
        const value:number= 55;

        const expectedResult: number = 42;

        //act

        let result = exchange(symbol,value);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})
describe('exchange function', () => {
    test('when the symbol is C and the amount 80 the result should be 767 ', () => {

        //arrange

        const symbol: string = "C";
        const value:number= 80;

        const expectedResult: number = 767;

        //act

        let result = exchange(symbol,value);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
})
describe('exchange function', () => {
    test('when the symbol is F and the amount 150 the result should be 240. Also testing the error message when introcing diferent symbols ', () => {

        //arrange

        const symbol: string = "C";
        const value:number= 80;
        const symbol2:string= "X"

        const expectedResult: number = 767;

        //act

        let result = exchange(symbol,value);

        //assert

        expect(result).toBe(expectedResult);
        expect(() => {exchange(symbol2,value)}).toThrow(new Error("simbolo de moeda inválido"));
    }
    )
})