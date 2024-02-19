import { sumOfMultiplesInRange } from "../../lab03/functions";

describe('This func must inform the multiple of twon intenger in given interval', ()=>{
    test('In a given interval from 3 to 50 must return 90', ()=>{

        //Arrange
        let start: number = 3;
        let end: number = 50;
        let multX: number =3;
        let multY: number = 5;
        let expectResult: number = 90;
        

        //Act

        let result = sumOfMultiplesInRange(start, end, multX, multY);

        //Arrange

        expect(result).toBe(expectResult);
        

    });
});