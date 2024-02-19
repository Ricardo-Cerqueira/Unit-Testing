import { sumDigts } from "../../lab03/functions";

describe('This func return the sum of algarithms from given number', ()=>{
    test('it must return 11 if give 245 as a parameter', ()=>{
        //arrange
            let num: number = 245;
            let expectResult = 11;

        //act

        let result = sumDigts(num);


        //assert

        expect(result).toBe(expectResult)
    });
});