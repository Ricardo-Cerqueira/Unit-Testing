import { checkPaliondrome } from "../../lab04/functions";

describe('It return if a number is capicuia', ()=>{
    test('if receive a number 6446 must return true',()=>{
        //arrange
        let num: number = 6446;
        let expectResult: boolean = true; 
        //act

        let result = checkPaliondrome(num);
        //assert

        expect(result).toBe(expectResult)
    })
})