import { multipleX } from "../../lab03/functions";

describe('the number of multiples of a number in a given array', ()=>{
    test('Calculates the number of multiples of 5 in  1 3 5 7 must return 1', ()=>{
        //Arange
        let numArray: number[]= [1, 3, 5, 7];
        const multiple:number=5;
        let expectResult: number = 1;

        //Act
        let result = multipleX(multiple,numArray);

        // Assert
        expect(result).toBe(expectResult);

    });
});