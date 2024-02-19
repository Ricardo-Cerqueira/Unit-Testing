import { numAlgarith } from "../../lab03/functions";

describe('This gives the number of algariths from an intenger', ()=>{
    test(' If given a number 300 must return 3', ()=>{
        
        //Arrange
        let num: number = 300
        let expectResult: number = 3;

        //Act

        let result = numAlgarith(num);

        //Assert

        expect(result).toBe(expectResult)

    })
})