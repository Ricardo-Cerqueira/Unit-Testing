import { sumDigitOdd } from '../../lab04/functions'

describe('this function return the sum of the numbers pair', ()=>{
    test('if receive a number like 36781 it will sum 3 + 7 + 1 and wull return 11',()=>{
        //arrange
        let num: number = 36781;
        let expectResult: number = 11;

        //act

        let result: number = sumDigitOdd(num);

        //assert

        expect(result).toBe(expectResult);
    })
})