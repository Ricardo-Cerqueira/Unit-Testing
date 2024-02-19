import { multiple2 } from "../../lab03/functions";

describe(' Gives the number of two multiples given, in a given interval', ()=>{
    test('It must return 1 if the interval is 10 35 5 21 100', ()=>{
        //Arrange
        let multiple0: number = 7;
        let multiple1: number = 5;
        let interval: number[] = [10, 35, 5, 21, 100];

        let expectResult: number = 1;

        //Act

        let result = multiple2(multiple0, multiple1, interval)
        //Assert

        expect(result).toBe(expectResult);

    })
})