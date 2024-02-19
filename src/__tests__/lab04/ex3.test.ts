import { sumArray } from '../../lab04/functions'

describe('this function sum all the elemnts of the array', ()=>{
    test('if receive the number 3 6 7 8 1 must return 25', ()=>{
        //arrange
        let num: number[] = [3,6,7,8,1];
        let expectResult: number = 25;
        
        //act
        let result = sumArray(num) 

        //assert

        expect(result).toStrictEqual(expectResult);
    })
})
