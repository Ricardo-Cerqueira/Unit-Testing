import { firstNumElementsArray } from '../..//lab04/functions'


describe('this function must return the first numbers from an array', ()=>{
    test('if give the array [5 6 7 9 8 5] and num 2 must return 5 6 7', ()=>{
        //arrange
        let numA: number[] = [5,6,7,9,8,5];
        let num: number = 3;
        let expectResult: number[] = [5 ,6 ,7]
        //act

        let result = firstNumElementsArray(numA, num);

        //assert/

        expect(result).toStrictEqual(expectResult);
    });
});