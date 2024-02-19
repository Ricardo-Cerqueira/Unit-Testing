import { numberClassification } from "../../lab03/functions";

describe('number classification', () => {
    test('the number 6 should return 0, 12 should return 1 and 9 should return -1', () => {

        //arrange
        const num:number= 6;
        const num2: number= 12;
        const num3:number=9;
        const expectedResult=0;
        const expectedResult2=1;
        const expectedResult3=-1;
        
        //act
        let result = numberClassification(num)
        let result2 = numberClassification(num2)
        let result3 = numberClassification(num3)
        
        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult2);
        expect(result3).toBe(expectedResult3);
       
    })    
})