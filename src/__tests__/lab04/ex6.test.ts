import { sumDigitPair } from '../../lab04/functions'

describe('this function return the sum of the numbers pair', ()=>{
    test('if receive a number like 36781 it will sum 6 + 8 and wull return 14',()=>{
        //arrange
        let num: number = 36781;
        let expectResult: number = 14;

        //act

        let result: number = sumDigitPair(num);

        //assert

        expect(result).toBe(expectResult);
    })
})