import { averageArray } from "../../lab04/functions";

describe('this function must calculate the media value from an array', ()=>{
    test('if receive 5 2 5 6 must return 4 because of mathtrunc',()=>{
        //arrange

        let numA: number[] = [5,2,5,6];
        let expectResult = 4;
        //act
        let result = averageArray(numA);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});
