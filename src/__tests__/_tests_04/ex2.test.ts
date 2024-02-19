import { numberToArray } from "../../lab04/functions";

describe('This function must transforme the values receive into a array each number in a postion of it', ()=>{
    test('if the number receive is 36781 the position must be [3,6,7,8,1',()=>{
        //arrange
        let numA: number = 36781;
        let expectResult: number[] = [3, 6, 7, 8, 1]
        
        //act
        let result = numberToArray(numA);
        
        //assert

        expect(result).toStrictEqual(expectResult);
    })
})