import { lowNumber } from "../../lab04/functions";

describe('It verifies the lowest umber fro an array', ()=>{
    test('if it receive an array with 4 5 6 9 1 it must return 1',()=>{
        //arrange
        let numA: number[] = [ 4, 5, 6, 9, 1];
        let expectResult: number = 1;
        //act

        let result = lowNumber(numA);
        //assert

        expect(result).toStrictEqual(expectResult);
    });
});