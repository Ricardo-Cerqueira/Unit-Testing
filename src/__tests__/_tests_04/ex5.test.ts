import { returnOddArrayElements } from '../../lab04/functions'

describe(' this function must return all de ood number from an array', ()=>{
    test('if receive an array 3 6 7 8 1 it must return 3 7 1 as a result', ()=>{
        //arrange
        let numA: number[] = [ 3, 6, 7 , 8, 1] ;
        let expectResult: number[] = [3,7,1]
        //act

        let result = returnOddArrayElements(numA);

        //assert 

        expect(result).toStrictEqual(expectResult);     

    })
})