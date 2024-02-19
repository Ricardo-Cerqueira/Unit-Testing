import { numberX } from "../../lab03/functions";

describe('Count multiples of three', ()=>{
    test('Calculates the number 1 3 5 7 multiples of three must return 1', ()=>{
        //Arange
        let numArray: number[]= [1, 3, 5, 7];

        let expectResult: number = 1;

        //Act
        let result = numberX(numArray);

        // Assert
        expect(result).toBe(expectResult);

    });
});