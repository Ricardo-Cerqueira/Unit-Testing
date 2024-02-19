import { salaryRentention } from "../../lab03/functions";

describe('the test must inform the percentage of taxes from a given salary', () => {
    test('the salary inform 400 600 754 1260 must result in 0.10 0.15 0.15 0.20',()=>{

        
        //Arange
        let salary1: number = 400;
        let salary2: number = 500;
        let salary3: number = 754;
        let salary4: number = 1000;
        let salary5: number = 1200;

        const expectResult1: number = 360;
        const expectResult2: number = 425;
        const expectResult3: number = 640.90;
        const expectResult4: number = 850;
        const expectResult5: number = 960;

        //Act
        let result1 = salaryRentention(salary1);
        let result2 = salaryRentention(salary2);
        let result3 = salaryRentention(salary3);
        let result4 = salaryRentention(salary4);
        let result5 = salaryRentention(salary5);

        //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
        expect(result4).toBe(expectResult4);
        expect(result5).toBe(expectResult5);
    })
})