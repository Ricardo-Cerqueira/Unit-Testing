import { highNumber } from "../../lab04/functions";

describe('It verifies the highest umber fro an array', ()=>{
    test('if it receive an array with 4 5 6 9 1 it must return 9',()=>{
        //arrange
        let numA: number[] = [ 4, 5, 6, 9, 1];
        let expectResult: number = 9;
        //act

        let result = highNumber(numA);
        //assert

        expect(result).toStrictEqual(expectResult);
    })
})