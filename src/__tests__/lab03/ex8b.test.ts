import { numAlgarithEven } from "../../lab03/functions";

describe('This func return the number of algarithms from a even intenger', ()=>{
    test('it must return 2 if give 245 as a parameter meaning 2 and 4 is even', ()=>{
        //arrange
            let num: number = 245;
            let expectResult = 2;


        //act

        let result = numAlgarithEven(num);


        //assert

        expect(result).toBe(expectResult)
    });
});