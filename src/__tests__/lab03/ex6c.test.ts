import { multiple3and5 } from "../../lab03/functions";

describe('It calculates the numbers multiple of 3 and 5 in a given interval', ()=>{
    test('Give a interval between 5, 15, 30, 45, 50 and must return 3 ( 15 30 45', ()=>{
        //Arrange
        let sequence: number[] = [5, 15, 30, 45, 50];
        let expectResult : number = 3;

        //Act

        let result = multiple3and5(sequence)

        //Assert

        expect(result).toBe(expectResult);
    })
})