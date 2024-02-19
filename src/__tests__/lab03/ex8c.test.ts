import { numAlgarithOdd } from "../../lab03/functions";

describe('This func return the number of algarithms from a odd intenger', ()=>{
    test('it must return 1 if give 245 as a parameter meaning 5 is odd', ()=>{
        //arrange
            let num: number = 245;
            let expectResult = 1;

        //act

        let result = numAlgarithOdd(num);


        //assert

        expect(result).toBe(expectResult)
    });
});