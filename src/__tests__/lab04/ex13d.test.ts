import { productArray } from "../../lab04/functions";

describe('this function must multiplie the values of an array', ()=>{
    test('if receive 6 and 2 must return 12',()=>{
        //arrange

        let numA: number[] = [6,2];
        let expectResult = 12;
        //act
        let result = productArray(numA);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});